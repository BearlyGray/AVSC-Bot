const { version } = require("discord.js");

module.exports = {
	name: 'minor end',
	aliases: ['minorend', ''],
	description: 'Sends an embed to announce a minor update',
	guildOnly: true,
    permissions: 'MANAGE_GUILD',
	execute(message, args) {
		message.channel.send('Minor update ended. Sending embed...')
		break;
        const upd8end = new MessageEmbed()
            .setTitle('AVSC Bot | Minor Update Completed')
            .addField('Version', Version)
            .addField('You can use the bot now!')
            .setThumbnail(avsclogobasic)
            .setFooter('Use ?patch-notes to learn about the update')
        message.channel.send(upd8end)
	},
};