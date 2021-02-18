module.exports = {
    name: 'afghanistan general',
    aliases: ['afg general', 'afg gen', 'afghanistan gen', 'af general', 'af gen'],
    description: 'Afghanistan - general information',
    guildOnly: true,
    args: true,
	execute(message, args) {
        const afghangen = new Discord.MessageEmbed()
                    .setTitle('Afghanistan in AVSC')
                    .addField('Participations', '2')
                    .addField('First Appearance', 'Edition 6', inline = true)
                    .addField('Last Appearance', 'Edition 9', inline = true)
                    .addField('Total Appearances', '2\nEditions 6, 9', inline = true)
                    .addField('Players', 'Babrie in edition 6\nBlade in edition 9', inline = true)
                    .addField('Best Placement', 'Edition 9\n17th (Final)\n17th overall\n23 points', inline = true)
                    .addField('Worst Placement', 'Edition 6\n8th (Semi Final 1)\n18th overall\n30 points', inline = true)
                    .addField('Qualifications', '0 of 1', inline = true)
                    .addField('Qualification Percentage', '0%', inline = true)
                    .setFooter('General Information | Afghanistan | Requested by ' + message.author.username)
                    .setThumbnail(AfghanFlag)
                    .setColor(AfghanColor)
                message.channel.send(afghangen);
                message.channel.send('**Want to know more about Afghanistan in AVSC?**\n_Aliases for Afghanistan are: ?afghanistan, ?afg, and ?af._\n\nIn order to learn more, use ?afghanistan ed[edition] or ?afghanistan gen.')
	},
};