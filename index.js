const Discord = require('discord.js');
const bot = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.GUILD_MESSAGE_TYPING,
        Discord.Intents.FLAGS.DIRECT_MESSAGES,
        Discord.Intents.FLAGS.GUILD_MEMBERS,
        Discord.Intents.FLAGS.GUILD_PRESENCES
    ]
});
const config = require('./dados/pro.json')

const token = config.token;



bot.on('guildMemberAdd', member =>{
  let el = require('./eventos/welcome.js')
  return el.run(member, bot, config)
})
bot.on('guildMemberRemove', async(member) =>{
  let le = require('./eventos/leave.js')
  return le.run(member, bot, config)
})

console.log(bot.channels.cache.flatMap())

bot.on('messageCreate', async(msg) =>{
  let com = msg.content.split(' ').slice(config.keyword.length)[1]
  let dado = msg.content.split(' ').slice(config.keyword.length)[2]
if(msg.content.startsWith(config.keyword)){ 
    try {
      await require(`./comandos/${com}`)?.run(bot, msg, config)
    } catch(err) {
      msg.channel.send('Comando não encontrado!!!')
    }
}})

bot.on('ready', () =>{
  console.log('pronto')
  console.log('')
})
bot.login(token)