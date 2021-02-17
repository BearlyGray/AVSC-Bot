const fs = require('fs');
const {Client, MessageEmbed} = require('discord.js');
const Discord = require('discord.js');
const prefix = '?'
const token = ''
const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

const cooldowns = new Discord.Collection();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

	const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;

	if (command.guildOnly && message.channel.type === 'dm') {
		return message.reply('I can\'t execute that command inside DMs!');
	}

	if (command.permissions) {
		const authorPerms = message.channel.permissionsFor(message.author);
		if (!authorPerms || !authorPerms.has(command.permissions)) {
			return message.reply('You can not do this!');
		}
	}

	if (command.args && !args.length) {
		let reply = `You didn't provide any arguments, ${message.author}!`;

		if (command.usage) {
			reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
		}

		return message.channel.send(reply);
	}

	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Discord.Collection());
	}

	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 3) * 1000;

	if (timestamps.has(message.author.id)) {
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000;
			return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
		}
	}

	timestamps.set(message.author.id, now);
	setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

	try {
		command.execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}

	const {Client, MessageEmbed} = require('discord.js');
	const PREFIX = '?';
	const GUILD = '654482539922063360'
	const bottestingchannel = '654512471205478410';
	const botcomchannel = '654510138170015764';
	const Edition = require('../variables.js');
	const CurrentColor = require('../botvars');
	const AvscPink = require('../botvars');
	const BasicLogoPink = require('../botvars');
	const CurrentLogo = require('/botvars');
	const Phase = require('../botvars');
	const Version = require('../botvars');
	const PatchDate = require('../botvars');
	const PatchNote = require('../botvars');
	const LastPatchDate = require('../botvars');
	const LastPatchNote = require('../botvars');
	const LastVers = require('../botvars');
	
	const AfghanFlag = require('../botvars');
	const AfghanColor = require('../botvars');
	const AlandFlag = require('../botvars');
	const AlandColor = require('../botvars');
	const variables = require('../variables.js')
});

client.login(token);
