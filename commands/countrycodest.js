const { MessageEmbed } = require("discord.js");

module.exports = {
	name: 'countrycodes t',
	aliases: ['tcountrycodes', 'country codes t', 'country-codes t', 't country codes', 't countrycodes'],
	description: 'Country codes for T letter countries',
	guildOnly: false,
    permissions: '',
	args: true,
	execute(message, args) {
        const acountrycodesembed = new MessageEmbed()
            .setTitle('T Country Codes')
            .addField('[__Country__]("Countries that have participated")', ':flag_tw: Taiwan\n:flag_tk: Tokelau\n:flag_tm: Turkmenistan\n:flag_tv: Tuvalu', inline = true)
            .addField('[__2 Letter Code__](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2 "Follow ISO 2-Letter Alpha Codes"', '`tw`\n`tk`\n`tm`\n`tv`', inline = true)
            .addField('[__3 Letter Code__]((https://en.wikipedia.org/wiki/List_of_IOC_country_codes "Follows the IOC 3 Letter Codes")', '`tpe`\n`tok`\n`tkm`\n`tuv`', inline = true)
            .setFooter('Requested by' + message.author.username)
        message.channel.send(acountrycodesembed)
	},
};