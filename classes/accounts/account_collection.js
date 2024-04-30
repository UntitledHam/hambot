module.exports = class AccountCollection{
    constructor() {
        this.users = {};
    }

    addUser(user) {
        this.users[user.id] = user;
    }

    getAccount(user_id) {
        return this.users[user_id];
    }
}