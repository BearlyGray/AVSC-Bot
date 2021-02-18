module.exports = {
	name: 'edition',
	description: 'Ping!',
	guildOnly: true,
	execute(message, args) {
		message.channel.send(Edition);
	},
};