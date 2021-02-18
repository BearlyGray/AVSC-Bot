const { MessageEmbed } = require("discord.js");

module.exports = {
	name: 'countrycodes i',
	aliases: ['icountrycodes', 'country codes i', 'country-codes i', 'i country codes', 'i countrycodes'],
	description: 'Country codes for I letter countries',
	guildOnly: false,
    permissions: '',
	args: true,
	execute(message, args) {
        const acountrycodesembed = new MessageEmbed()
            .setTitle('I Country Codes')
            .addField('[__Country__]("Countries that have participated")', ':flag_is: Iceland\n:flag_id: India\n:flag_iq: Iraq\n:flag_ie: Ireland\n:flag_il: Israel\n:flag_it: Italy', inline = true)
            .addField('[__2 Letter Code__](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2 "Follow ISO 2-Letter Alpha Codes"', '`is`\n`id`\n`iq`\n`ie`\n`il`\n`it`', inline = true)
            .addField('[__3 Letter Code__]((https://en.wikipedia.org/wiki/List_of_IOC_country_codes "Follows the IOC 3 Letter Codes")', '`isl`\n`in`\n`irq`\n`irl`\n`isr`\n`ita`', inline = true)
            .setFooter('Requested by' + message.author.username)
        message.channel.send(acountrycodesembed)
	},
};