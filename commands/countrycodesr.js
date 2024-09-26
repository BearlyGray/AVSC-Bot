const { MessageEmbed } = require("discord.js");

module.exports = {
	name: 'countrycodes r',
	aliases: ['rcountrycodes', 'country codes r', 'country-codes r', 'r country codes', 'r countrycodes'],
	description: 'Country codes for R letter countries',
	guildOnly: false,
    permissions: '',
	args: true,
	execute(message, args) {
        const acountrycodesembed = new MessageEmbed()
            .setTitle('R Country Codes')
            .addField('[__Country__]("Countries that have participated")', ':flag_ro: Romania\n:flag_ru: Russia', inline = true)
            .addField('[__2 Letter Code__](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2 "Follow ISO 2-Letter Alpha Codes"', '`ro`\n`ru`', inline = true)
            .addField('[__3 Letter Code__]((https://en.wikipedia.org/wiki/List_of_IOC_country_codes "Follows the IOC 3 Letter Codes")', '`rou`\n`rus`', inline = true)
            .setFooter('Requested by' + message.author.username)
        message.channel.send(acountrycodesembed)
	},
};