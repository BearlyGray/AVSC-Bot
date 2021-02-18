const { MessageEmbed } = require("discord.js");

module.exports = {
	name: 'beta end',
	aliases: ['betaend'],
	description: 'Sends an embed to announce the end of beta testing',
	guildOnly: true,
    permissions: 'MANAGE_GUILD',
	execute(message, args) {
        message.channel.send('Beta testing ending... Sending embed now!')
        break;
        const betasendembed = new Discord.MessageEmbed()
            .setTitle('AVSC Bot | Beta Testing Ended')
            .addField('Version being tested', '1.0')
            .addField('You can use the bot now!')
            .setThumbnail(avsclogobasic)
            .setFooter('[Click here]<https://discord.gg/KNKSBqqkXU> to join beta testing')
        message.channel.send(betasendembed)
	},
};