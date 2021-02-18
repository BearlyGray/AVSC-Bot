module.exports = {
	name: 'country-list',
    description: 'List of countries with completed code',
    guildOnly: true,
	execute(message, args) {
		const listembed = new Discord.MessageEmbed()
                .setTitle('List of Countries with Statistics Released')
                .addField('A Countries', 'Afghanistan;')
                .addField('B Countries', '')
                .setDescription('For most of the countries, the statistics are being developed. Check back most days at 4:00 PM CST.')
                .setColor(0xff33f9)
                .setFooter('Available countries | Requested by ' + message.author.username)
            message.channel.send(listembed)
	},
};