module.exports = {
	name: 'ongoing',
	description: 'Ongoing edition of AVSC',
	execute(message, args) {
		const ongoingembed = new MessageEmbed()
                .setTitle('**Ongoing edition of AVSC**')
                .addField('Current Edition', Edition)
                .addField('Host', 'Moscow, Russia')
                .addField('Current Contest Phase', Phase)
                .setColor(0x0033A0)
                .setThumbnail(CurrentLogo)
                .setFooter('Current Edition | AVSC | Requested by ' + message.author.username)
            message.channel.send(ongoingembed);
	},
};