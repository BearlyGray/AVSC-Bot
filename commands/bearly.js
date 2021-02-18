const { MessageEmbed } = require("discord.js");

module.exports = {
	name: 'bearly',
	description: 'Message about Bearly',
	execute(message, args) {
        message.channel.send('Ah yes, the best admin.')
	},
};