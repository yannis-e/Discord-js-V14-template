const { Events } = require('discord.js');
const logger = require('../logger');

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		const totalUsers = client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0);
		logger.info({
			status: 'Ready',
			bot: client.user.tag,
			guilds: client.guilds.cache.size,
			users: totalUsers,
		}, `Bot started successfully`);
	},
};