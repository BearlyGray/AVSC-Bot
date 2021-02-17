module.exports = {
    name: 'aland islands general',
    aliases: ['ala general', 'aland general', 'ala gen', 'aland islands gen', 'aland gen', 'ax general', 'ax gen'],
    description: 'Åland Islands - general information',
    guildOnly: true,
    args: true,
	execute(message, args) {
        const alandgen = new Discord.MessageEmbed()
                    .setTitle('Åland Islands in AVSC')
                    .addField('Participations', '1')
                    .addField('First Appearance', 'Edition 6', inline = true)
                    .addField('Last Appearance', 'Edition 6', inline = true)
                    .addField('Total Appearances', '1\nEdition 6', inline = true)
                    .addField('Players', 'Ashley in edition 6', inline = true)
                    .addField('Best Placement', 'Edition 6\n10th (Semi Final 1)\n22nd (overall)\n22 points', inline = true)
                    .addField('Worst Placement', 'Edition 6\n10th (Semi Final 1)\n22nd (overall)\n22 points', inline = true)
                    .addField('Qualifications', '0 of 1', inline = true)
                    .addField('Qualification Percentage', '0%', inline = true)
                    .setFooter('General Information | Åland Islands | Requested by ' + message.author.username)
                    .setThumbnail(AlandFlag)
                    .setColor(AlandColor)
                message.channel.send(alandgen);
                message.channel.send('**Want to know more about Aland Islands in AVSC?**\n_Aliases for Aland Islands are: ?aland islands, ?aland, ?ala, and ?ax._\n\nIn order to learn more, use ?aland ed[edition] or ?aland gen.')
	},
};