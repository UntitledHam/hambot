const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('get_user')
        .setDescription('Returns yourself.'),
    async execute (interaction) {
        await interaction.reply({ content: `${await interaction.user}`, ephemeral: true });
    }
}