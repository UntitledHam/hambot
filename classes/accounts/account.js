modules.export = class Account {
    constructor(user) {
        this.user = user;
        this.money = 0;
    
    }

    getMoney() {
        return this.money;
    }
}