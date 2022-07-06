const Discord = require('discord.js')

module.exports.run = async(member, bot) =>{
  let channel = bot
  let embed = new Discord.MessageEmbed()
    .setColor('#03bb85')
    .setTitle('Adeus ' + member.user.username)
    .setImage('https://data.whicdn.com/images/308033999/original.gif')
    .setTimestamp()
    .setAuthor({ name: `${member.tag}`})
  await channel.send({embeds:[embed]})
}