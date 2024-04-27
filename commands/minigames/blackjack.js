const { SlashCommandBuilder } = require('discord.js');


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
        await interaction.reply(await runGame())
    }
}