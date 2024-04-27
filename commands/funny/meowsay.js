const { SlashCommandBuilder} = require('discord.js');

async function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled +1) + minCeiled);
}

async function getRandomExpression() {
    const expressions = [" meow", " nya", "~", " meoww", " :3", " ≧◡≦", " (▰˘◡˘▰)", " (●´ω｀●)", " (づ｡◕‿‿◕｡)づ", " X3", " meow", " owo", " uwu"];
    return expressions[await getRandomInt(0, expressions.length -1)];
}

async function addMeows(message){
    let split_message = message.split(" ");
    let output_string = "";
    for (let i = 0; i < split_message.length; i++) {
        let random_num = await getRandomInt(1,10)
        let random_expression = await getRandomExpression();
        if (random_num == 1 ){
            if (split_message[i].charAt(split_message[i].length - 1) == '.'){
                output_string += `${split_message[i].substring(0,split_message[i].length - 1)}${random_expression}.`;
            }
            else{
                output_string += `${split_message[i]}${random_expression} `;
            }
        }
        else {
            output_string += `${split_message[i]} `;
        }
    }

    return output_string;
}

async function convertToMeowSpeak(message) {
    // Replace Rs with Ws
    message = await message.replaceAll("r","w");
    message = await message.replaceAll("R", "W");

    // Sometimes add meows in where spaces are.
    message = await addMeows(message);

    return message;
}

module.exports = {
    data: new SlashCommandBuilder()
        .setName('meowsay')
        .setDescription('Says your message but as a cat :3')
        .addStringOption(option =>
            option.setName('message')
                .setDescription('The message to speak as a cat.')
                .setRequired(true)),
    async execute(interaction) {
        if (!interaction.isChatInputCommand()) return;
        let message = await interaction.options.getString('message');
        await interaction.reply(await convertToMeowSpeak(message));
    }
}



