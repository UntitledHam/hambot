const { channel } = require('diagnostics_channel');
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('hello_world')
        .setDescription('Says Hello World!'),
    async execute (interaction) {
        interaction.deferReply();
        interaction.deleteReply();
        await interaction.channel.send('Hello World!')
    }
}