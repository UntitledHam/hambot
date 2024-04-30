const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('get_user')
        .setDescription('Returns yourself.'),
    async execute (interaction) {
        let user = await interaction.user;
        await interaction.reply({ content: `${user}`, ephemeral: true });
    }
}