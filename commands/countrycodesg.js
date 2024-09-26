const { MessageEmbed } = require("discord.js");

module.exports = {
	name: 'countrycodes g',
	aliases: ['gcountrycodes', 'country codes g', 'country-codes g', 'g country codes', 'g countrycodes'],
	description: 'Country codes for G letter countries',
	guildOnly: false,
    permissions: '',
	args: true,
	execute(message, args) {
        const acountrycodesembed = new MessageEmbed()
            .setTitle('G Country Codes')
            .addField('[__Country__]("Countries that have participated")', ':flag_ge: Georgia\n:flag_de: Germany\n:flag_gr: Greece\n:flag_gl: Greenland\n:flag_gd: Grenada\n:flag_gp: Guadaloupe\n:flag_gw: Guinea Bissau', inline = true)
            .addField('[__2 Letter Code__](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2 "Follow ISO 2-Letter Alpha Codes"', '`ge`\n`de`\n`gr`\n`gl`\n`gd`\n`gp`\n`gw`', inline = true)
            .addField('[__3 Letter Code__]((https://en.wikipedia.org/wiki/List_of_IOC_country_codes "Follows the IOC 3 Letter Codes")', '`geo`\n`ger`\n`gre`\n`gla`\n`grn`\n`gdl`\n`gps`', inline = true)
            .setFooter('Requested by' + message.author.username)
        message.channel.send(acountrycodesembed)
	},
};