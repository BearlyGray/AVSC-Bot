const { MessageEmbed } = require("discord.js");

module.exports = {
	name: 'countrycodes l',
	aliases: ['lcountrycodes', 'country codes l', 'country-codes l', 'l country codes', 'l countrycodes'],
	description: 'Country codes for L letter countries',
	guildOnly: false,
    permissions: '',
	args: true,
	execute(message, args) {
        const acountrycodesembed = new MessageEmbed()
            .setTitle('L Country Codes')
            .addField('[__Country__]("Countries that have participated")', ':flag_ls: Lesotion\n:flag_li: Liechtenstein\n :flag_lu: Luxembourg', inline = true)
            .addField('[__2 Letter Code__](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2 "Follow ISO 2-Letter Alpha Codes"', '`ls`\n`li`\n`lu`', inline = true)
            .addField('[__3 Letter Code__]((https://en.wikipedia.org/wiki/List_of_IOC_country_codes "Follows the IOC 3 Letter Codes")', '`les`\n`lie`\n`lux`', inline = true)
            .setFooter('Requested by' + message.author.username)
        message.channel.send(acountrycodesembed)
	},
};