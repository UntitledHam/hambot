const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('make_account')
        .setDescription('Makes a bank account.'),
    async execute (interaction) {
        await interaction.reply({ content: `${await interaction.user}`, ephemeral: true });
    }
}