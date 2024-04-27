const { ActionRowBuilder } = require('@discordjs/builders');
const { SlashCommandBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const { send } = require('process');
const { compileFunction } = require('vm');


async function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

async function runGame() {
    let player_score = 0
    let op_score = 0

    await draw(player_score)
}
async function draw(score) {
    // Gets a card between 2 and 11.
    card_value = await getRandomInt(2,11)
    score += card_value;
    // If value is 11 that means it is an ace so it can be equal to 1 instead.
    if (score > 21 && card_value == 11){
        score -= 10;
    }

    return score;

}


module.exports = {
    data: new SlashCommandBuilder()
        .setName('blackjack')
        .setDescription("It's just blackjack stupid"),
    async execute(interaction) {
        const draw = new ButtonBuilder()
            .setCustomId('hit')
            .setLabel('Hit')
            .setStyle(ButtonStyle.Primary);

        const stand = new ButtonBuilder()
            .setCustomId('stand')
            .setLabel('Stand')
            .setStyle(ButtonStyle.Secondary)

        const row = new ActionRowBuilder()
            .addComponents(stand,draw);

            const response = await interaction.reply({
                content: `Blackjack WIP`,
                components: [row],
            });
            
            const collectorFilter = i => i.user.id === interaction.user.id;
        
            try { 
                const confirmation = await response.awaitMessageComponent({ filter: collectorFilter, time: 60_000 });       
                if (confirmation.customId === 'stand') {
                    await confirmation.update({
                        content: "Standing here I realize I was just like you :3", 
                        components: [row] 
                    });
                } else if (confirmation.customId === 'hit') {
                    await confirmation.update({
                        content: 'Hit :3', 
                        components: [row] });
                }
            } catch (e) {
                await interaction.editReply({ content: 'Confirmation not received within 1 minute, cancelling', components: [] });
            }
    
    }
}