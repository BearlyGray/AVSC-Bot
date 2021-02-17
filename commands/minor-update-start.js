module.exports = {
	name: 'minor start',
	aliases: ['', ''],
	description: 'Sends an embed to announce a minor update',
	guildOnly: true,
    permissions: 'MANAGE_GUILD',
	execute(message, args) {
		message.channel.send('Minor update started! Sending embed now...')
		break;
        const betasendembed = new MessageEmbed()
            .setTitle('AVSC Bot | Minor Update Starting')
            .addField('Version being installed')
            .addField('Please do not use the bot right now!')
            .setThumbnail(avsclogobasic)
            .setFooter('[Click here]<https://discord.gg/KNKSBqqkXU> to join beta testing')
        message.channel.send(betasendembed)
	},
};