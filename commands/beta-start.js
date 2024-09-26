module.exports = {
	name: 'beta start',
	aliases: ['', ''],
	description: 'Sends an embed to announce a minor update',
	guildOnly: true,
    permissions: 'MANAGE_GUILD',
	execute(message, args) {
		message.channel.send('Minor update starting')
	},
};