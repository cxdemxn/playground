function createUser(name) {
    const discordName = `@${name}`;

    let reputation = 0;
    const getReputation = () => reputation;
    const giveReputation = () => reputation++;

    return {name, discordName, getReputation, giveReputation};
}

createUser.prototype.mehh = function() {
    console.log(`${this.name} called meh`);
}

const user = createUser("bari");
user.giveReputation();
user.giveReputation();
user.giveReputation();

user.mehh();

console.log({
    discordName: user.discordName,
    reputation: user.getReputation()
});

function createPlayer(name, level=0) {
    const {getReputation, giveReputation} = createUser(name);

    const getLevel = () => level;
    const increaseLevel = () => level++;

    return {name, getLevel, increaseLevel, getReputation, giveReputation};
}

const player = createPlayer('jock',53);


console.log({
    name: player.name,
    level: player.getLevel(),
    reputation: player.getReputation(),
});