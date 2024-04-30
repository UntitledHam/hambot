const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('get_id')
        .setDescription('Returns your user ID'),
    async execute (interaction) {
        let user_id = await interaction.user.id;
        await interaction.reply({ content: user_id, ephemeral: true });
    }
}