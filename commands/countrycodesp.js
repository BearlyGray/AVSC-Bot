const { MessageEmbed } = require("discord.js");

module.exports = {
	name: 'countrycodes p',
	aliases: ['pcountrycodes', 'country codes p', 'country-codes p', 'p country codes', 'p countrycodes'],
	description: 'Country codes for P letter countries',
	guildOnly: false,
    permissions: '',
	args: true,
	execute(message, args) {
        const acountrycodesembed = new MessageEmbed()
            .setTitle('P Country Codes')
            .addField('[__Country__]("Countries that have participated")', ':flag_pk: Pakistan\n:flag_pg: Papua New Guinea\n:flag_py: Paraguay\n:flag_pn: Pitcairn Islands', inline = true)
            .addField('[__2 Letter Code__](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2 "Follow ISO 2-Letter Alpha Codes"', '`pk`\n`pg`\n`py`\n`pn`', inline = true)
            .addField('[__3 Letter Code__]((https://en.wikipedia.org/wiki/List_of_IOC_country_codes "Follows the IOC 3 Letter Codes")', '`pak`\n`png`\n`par`\n`pit`', inline = true)
            .setFooter('Requested by' + message.author.username)
        message.channel.send(acountrycodesembed)
	},
};