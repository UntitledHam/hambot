module.exports = class Player{
    constructor(id) {
        this.id = id;
        this.points = 0;
    }

    isBot() {
        if (id == "bot-id") {
            return true;
        }
        return false; 
    }

}