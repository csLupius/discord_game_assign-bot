console.log(process.env.FIREBASE_PRIVATE_KEY)
console.log(process.env.FIREBASE_PRIVATE_KEY_ID)

const Discord = require("discord.js");
const Firebase = require('./Server/Controller/FirebaseController');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});



client.login(process.env.BOT_TOKEN);

Firebase.TEST();
