const { MessageEmbed } = require("discord.js");

module.exports = {
	name: 'countrycodes o',
	aliases: ['ocountrycodes', 'country codes o', 'country-codes o', 'o country codes', 'o countrycodes'],
	description: 'Country codes for A letter countries',
	guildOnly: false,
    permissions: '',
	args: true,
	execute(message, args) {
        const acountrycodesembed = new MessageEmbed()
            .setTitle('A Country Codes')
            .addField('[__Country__]("Countries that have participated")', 'Oman', inline = true)
            .addField('[__2 Letter Code__](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2 "Follow ISO 2-Letter Alpha Codes"', '`om`', inline = true)
            .addField('[__3 Letter Code__]((https://en.wikipedia.org/wiki/List_of_IOC_country_codes "Follows the IOC 3 Letter Codes")', '`oma`', inline = true)
            .setFooter('Requested by' + message.author.username)
        message.channel.send(acountrycodesembed)
	},
};