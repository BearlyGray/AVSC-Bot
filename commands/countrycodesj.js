const { MessageEmbed } = require("discord.js");

module.exports = {
	name: 'countrycodes j',
	aliases: ['jcountrycodes', 'country codes j', 'country-codes j', 'j country codes', 'j countrycodes'],
	description: 'Country codes for J letter countries',
	guildOnly: false,
    permissions: '',
	args: true,
	execute(message, args) {
        const acountrycodesembed = new MessageEmbed()
            .setTitle('J Country Codes')
            .addField('[__Country__]("Countries that have participated")', ':flag_jm: Jamaica\n:flag_jp: Japan', inline = true)
            .addField('[__2 Letter Code__](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2 "Follow ISO 2-Letter Alpha Codes"', '`jm`\n`ja`', inline = true)
            .addField('[__3 Letter Code__]((https://en.wikipedia.org/wiki/List_of_IOC_country_codes "Follows the IOC 3 Letter Codes")', '`jam`\n`jpn`', inline = true)
            .setFooter('Requested by' + message.author.username)
        message.channel.send(acountrycodesembed)
	},
};