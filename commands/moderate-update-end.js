module.exports = {
	name: 'moderate end',
	aliases: ['', ''],
	description: 'Sends an embed to announce a minor update',
	guildOnly: true,
    permissions: 'MANAGE_GUILD',
	execute(message, args) {
		message.channel.send('Minor update ended. Sending embed now...')
		break;
        const betasendembed = new MessageEmbed()
            .setTitle('AVSC Bot | Moderate Update Completed')
            .addField('Version', Version)
            .addField('You can use the bot now!')
            .setThumbnail(avsclogobasic)
            .setFooter('Use ?patchnotes to learn more about the update')
        message.channel.send(betasendembed)
	},
};