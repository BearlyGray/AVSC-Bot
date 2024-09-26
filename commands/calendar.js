const { MessageEmbed } = require("discord.js");
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
	name: 'calendar',
	description: 'AVSC Calendar',
	execute(message, args) {
        const calendarembed = new Discord.MessageEmbed()
			.setTitle('AVSC | Calendar')
			.addField('Edition - ' + Edition)
			.addField('Current Phase', Phase)
			.addField('Claiming', 'January 12-18')
			.addField('Song sending', 'January 12-18')
			.addField('Song reveal', 'January 19')
			.addField('Voting', 'January 19-25')
			.addField('Results', 'January 26 or 27')
			.setFooter('Calendar | Edition ' + Edition + (' | Requested by ' + message.author.username))
			.setThumbnail(CurrentLogo)
			.setColor(CurrentEditionColor)
		message.channel.send(calendarembed)
	},
};

