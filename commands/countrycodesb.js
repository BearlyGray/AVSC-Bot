const { MessageEmbed } = require("discord.js");

module.exports = {
	name: 'countrycodes b',
	aliases: ['bcountrycodes', 'country codes b', 'country-codes b', 'b country codes', 'b countrycodes'],
	description: 'Country codes for B letter countries',
	guildOnly: false,
    permissions: '',
	args: true,
	execute(message, args) {
        const acountrycodesembed = new Discord.MessageEmbed()
            .setTitle('B Country Codes')
            .addField('[__Country__]("Countries that have participated at least once")', ':flag_bd: Bangladesh\n :flag_by: Belarus\n :flag_be: Belgium\n :flag_bz: Belize\n :flag_ba: Bosnia and Herzegovina\n :flag_bw: Botswana\n :flag_br: Brazil\n :flag_bf: Burkina Faso', inline = true)
            .addField('[__2 Letter Code__](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2 "Follow ISO 2-Letter Alpha Codes"', '`by`\n `be`\n `bz`\n `ba`\n `bw`\n `br`\n `bf`', inline = true)
            .addField('[__3 Letter Code__]((https://en.wikipedia.org/wiki/List_of_IOC_country_codes "Follows the IOC 3 Letter Codes")', '`ban`\n `blr`\n `bel`\n `biz`\n `bih`\n `bot`\n `bra`\n `bur`', inline = true)
            .setFooter('Requested by' + message.author.username)
        message.channel.send(acountrycodesembed)
	},
};