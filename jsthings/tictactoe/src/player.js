// export default function player() {
//     let name;
//     let mark;

//     const setName = (pName, id) => { name = prompt(`Player ${id} name:`); }
//     const getName = () => name;

//     const setMark = (pMark, id) => { mark = prompt(`Player ${id} mark:`); }
//     const getMark = () => mark;

//     return { setName, getName, setMark, getMark };
// }

export default function Player(id) {
    this.id = id;
    this.name = prompt(`Player ${this.id} name:`);
    this.mark = prompt(`Player ${this.id} mark:`);
    this.win = 0;
    this.loss = 0;
}

Player.prototype.getId = function() {
    return this.id;
}

Player.prototype.setName = function() {
    this.name = prompt(`Player ${this.id} name:`);
}

Player.prototype.getName = function() {
    return this.name;
}

Player.prototype.setMark = function() {
    this.mark = prompt(`Player ${this.id} mark:`);
}

Player.prototype.getMark = function() {
    return this.mark;
}

Player.prototype.giveWin = function() {
    this.win++;
}

Player.prototype.getWin = function() {
    return this.win;
}

Player.prototype.giveLoss = function() {
    this.loss++;
}

Player.prototype.getLoss = function() {
    return this.loss;
}