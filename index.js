require('dotenv').config();
const { Client, GatewayIntentBits, Collection, Partials } = require('discord.js');
const fs = require('fs');
const path = require('path');
const cron = require('node-cron');
const config = require('./config');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildModeration,
  ],
  partials: [Partials.GuildMember],
});

// Load commands
client.commands = new Collection();
const commandFiles = fs.readdirSync(path.join(__dirname, 'commands')).filter(f => f.endsWith('.js'));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.data.name, command);
}

// Load events
const eventFiles = fs.readdirSync(path.join(__dirname, 'events')).filter(f => f.endsWith('.js'));
for (const file of eventFiles) {
  const event = require(`./events/${file}`);
  if (event.once) {
    client.once(event.name, (...args) => event.execute(...args, client));
  } else {
    client.on(event.name, (...args) => event.execute(...args, client));
  }
}

// Handle slash commands
client.on('interactionCreate', async (interaction) => {
  if (!interaction.isChatInputCommand()) return;
  const command = client.commands.get(interaction.commandName);
  if (!command) return;
  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(`Error executing ${interaction.commandName}:`, error);
    const reply = { content: '🦝 Oops! Something went wrong. Byte dropped the ball...', ephemeral: true };
    if (interaction.replied || interaction.deferred) {
      await interaction.followUp(reply);
    } else {
      await interaction.reply(reply);
    }
  }
});

// Scheduled greetings
function randomPick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function scheduleGreetings() {
  const { schedule, greetingChannels, morningMessages, noonMessages, nightMessages } = config;

  const sendToChannels = async (messages) => {
    for (const channelId of greetingChannels) {
      const channel = client.channels.cache.get(channelId);
      if (channel) {
        await channel.send(randomPick(messages)).catch(console.error);
      }
    }
  };

  // All times in Asia/Tokyo
  cron.schedule(schedule.morning, () => sendToChannels(morningMessages), { timezone: 'Asia/Tokyo' });
  cron.schedule(schedule.noon, () => sendToChannels(noonMessages), { timezone: 'Asia/Tokyo' });
  cron.schedule(schedule.night, () => sendToChannels(nightMessages), { timezone: 'Asia/Tokyo' });

  console.log('Scheduled greetings set up (JST)');
}

client.once('ready', () => {
  console.log(`Byte Utility is online as ${client.user.tag}`);
  scheduleGreetings();
});

client.login(process.env.DISCORD_TOKEN);
