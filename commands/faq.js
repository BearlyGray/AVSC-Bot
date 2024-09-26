const PREFIX = '?';
const GUILD = '654482539922063360';
const bottestingchannel = '654512471205478410';
const botcomchannel = '654510138170015764';
const joinchannel = '745025268137197691'
var Edition = 12;
var BasicLogoPink = 'https://media.discordapp.net/attachments/654678177771290645/784143996548546633/avsclogobasic.jpg';
var CurrentLogo = 'https://media.discordapp.net/attachments/654678177771290645/784144214028058664/image0.png';
var Phase = 'final voting phase';
var Version = '0.26.1';
var PatchDate = '9:15 PM (CST), January 5, 2021';
var PatchNote = 'Updated editions, changed current edition embed, added alternate commands to ?ongoing and ?patchnotes.'
var LastPatchDate = '10:40 AM (CST), June 5, 2020';
var LastPatchNote = 'Added Belize and Bosnia + Herzegovina.'
var LastVers = '0.26.0'
var CurrentEditionColor = '0xCC092f'

module.exports = {
	name: 'faq',
	description: 'Ongoing edition of AVSC',
	execute(message, args) {
		const faqembed = new MessageEmbed()
                .setTitle('AlyVision Bot - Frequently Asked Questions')
                .addField('Why is my country not up?', 'The bot devs have busy schedules and do not get much time to work on country codes, thus many countries are not fully developed. Do "country-list" to see which countries are available.')
                .addField('When will all the countries be up?', 'Unknown. Currently they are all being developed and will be released as a big 1.0 update.')
                .addField('What about the players, editions, rankings, and others?', 'The other ways of finding out about entries are going to be developed after the countries.')
                .addField('Why does the help menu appear with all prefixes?', 'The devs have not figured out the prefix system to give it only one prefix. This will hopefully be released with the countries in the 1.0 update.')
                .addField('How often do bug updates come out?', 'Usually within a few hours of the discovery of the bugs.')
                .setDescription('Some of the Frequently Asked Questions about the bot.')
                .setColor(0xff33f9)
                .setFooter('Frequently Asked Questions | Requested by ' + message.author.username)
            message.channel.send(faqembed)
	},
};