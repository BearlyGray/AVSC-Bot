const { MessageEmbed } = require("discord.js");

module.exports = {
	name: 'countrycodes u',
	aliases: ['ucountrycodes', 'country codes u', 'country-codes u', 'u country codes', 'u countrycodes'],
	description: 'Country codes for U letter countries',
	guildOnly: false,
    permissions: '',
	args: true,
	execute(message, args) {
        const acountrycodesembed = new MessageEmbed()
            .setTitle('U Country Codes')
            .addField('[__Country__]("Countries that have participated")', ':flag_ug: Uganda\n:flag_gb: United Kingdom\n:flag_ua: Ukraine\n:flag_us: United States', inline = true)
            .addField('[__2 Letter Code__](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2 "Follow ISO 2-Letter Alpha Codes"', '`ug`\n`gb/uk`\n`ua`\n`us`', inline = true)
            .addField('[__3 Letter Code__]((https://en.wikipedia.org/wiki/List_of_IOC_country_codes "Follows the IOC 3 Letter Codes")', '`uga`\n`gbi`\n`ukr`\n`usa`', inline = true)
            .setFooter('Requested by' + message.author.username)
        message.channel.send(acountrycodesembed)
	},
};