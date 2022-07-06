const Discord = require('discord.js')

module.exports.run = async(member, bot, config) =>{
  let channel = bot.channels.cache.get(config)

    .setColor('#03bb85')
    .setTitle('Bem-Vindo ao Servidor ' + member.user.username)
    .setImage('https://i.pinimg.com/originals/5a/ee/68/5aee68e5b58ac3ccd56d725ab3e73aed.gif')
    .setTimestamp()
    .setAuthor(member.tag)
  await channel.send({embeds:[embed]})
}