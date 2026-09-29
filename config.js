module.exports = {
  // Daily greetings disabled — no channels to send to
  greetingChannels: [],
  modLogChannel: '1524945630802219048',
  autoRoleName: '🦝 Member',

  // Scheduled greeting times (cron format, JST = UTC+9)
  schedule: {
    morning: '0 8 * * *',  // 8:00 AM JST
    noon: '0 12 * * *',    // 12:00 PM JST
    night: '0 22 * * *',   // 10:00 PM JST
  },

  // Anti-spam: max messages in a time window before timeout
  antiSpam: {
    maxMessages: 5,
    intervalMs: 5000,       // 5 messages within 5 seconds
    timeoutMinutes: 5,
  },

  // Byte greetings
  morningMessages: [
    '🦝 Ohayou! Rise and shine, everyone! Time to build something awesome today~',
    '🦝 Good morning! Byte here — don\'t forget to hydrate before you code!',
    '🦝 Morning crew! What are we shipping today? 🚀',
    '🦝 *stretches paws* Another beautiful morning at AkihiroLabs HQ!',
    '🦝 GM everyone! Remember: even a single line of code counts as progress 💪',
  ],
  noonMessages: [
    '🦝 It\'s lunch time! Take a break, you\'ve earned it 🍙',
    '🦝 Noon check-in! How\'s everyone doing? Don\'t skip lunch!',
    '🦝 Half the day done already! Byte believes in you~ 🦝✨',
    '🦝 Lunch break! Step away from the screen for a bit~',
    '🦝 Hey hey, it\'s noon! Fuel up and keep going 🍜',
  ],
  nightMessages: [
    '🦝 Oyasumi! Time to rest those eyes. See you tomorrow~',
    '🦝 Good night everyone! Byte is heading to sleep 🌙',
    '🦝 That\'s a wrap for today! Great work, team. Sleep well 💤',
    '🦝 Night night! Tomorrow is another day to create cool stuff~',
    '🦝 Winding down... don\'t stay up too late coding! (Do as I say, not as I do 😅)',
  ],

  // Welcome messages for new members
  welcomeMessages: [
    '🦝 Welcome to AkihiroLabs, **{user}**! I\'m Byte, the resident raccoon. Make yourself at home!',
    '🦝 Hey **{user}**! Welcome aboard~ I\'m Byte, nice to meet you! 🎉',
    '🦝 A new face! Welcome **{user}**! Byte is happy to see you here 🦝✨',
    '🦝 **{user}** just joined! Welcome to the crew~ Feel free to say hi!',
    '🦝 Yooo **{user}**! Welcome to AkihiroLabs! Byte approved ✅🦝',
  ],

  // AkihiroLabs projects list
  projects: [
    { name: 'AkiPOS', description: 'Single-file vanilla JS POS system with Burmese/English toggle', url: 'https://github.com/AkihiroLabs' },
    { name: 'Kanji Quiz', description: 'JLPT N5–N1 kanji quiz app with bilingual EN/Burmese support', url: 'https://github.com/AkihiroLabs' },
    { name: 'HiroCrew', description: 'Employee management & kiosk attendance app', url: 'https://github.com/AkihiroLabs' },
    { name: 'Kanji Flashcards', description: 'Spaced repetition flashcards with SM-2 algorithm', url: 'https://github.com/AkihiroLabs' },
    { name: 'Kanji Bridge', description: 'Browser-based furigana generator using Kuromoji', url: 'https://github.com/AkihiroLabs' },
    { name: 'NumConv', description: 'Number system converter with terminal aesthetic', url: 'https://github.com/AkihiroLabs' },
  ],
};
