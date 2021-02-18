const { MessageEmbed } = require("discord.js");

module.exports = {
	name: 'countrycodes f',
	aliases: ['fcountrycodes', 'country codes f', 'country-codes f', 'f country codes', 'f countrycodes'],
	description: 'Country codes for F letter countries',
	guildOnly: false,
    permissions: '',
	args: true,
	execute(message, args) {
        const acountrycodesembed = new Discord.MessageEmbed()
            .setTitle('A Country Codes')
            .addField('[__Country__]("Countries that have participated")', ':flag_fo: Faroe Islands\n:flag_fi: Finland\n :flag_fr: France', inline = true)
            .addField('[__2 Letter Code__](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2 "Follow ISO 2-Letter Alpha Codes"', '`fo`\n`fi`\n`fr`', inline = true)
            .addField('[__3 Letter Code__]((https://en.wikipedia.org/wiki/List_of_IOC_country_codes "Follows the IOC 3 Letter Codes")', '`foe`\n`fin`\n`fra`', inline = true)
            .setFooter('Requested by' + message.author.username)
        message.channel.send(acountrycodesembed)
	},
};