(()=>{"use strict";function t(t){this.id=t,this.name=prompt(`Player ${this.id} name:`),this.mark=prompt(`Player ${this.id} mark:`),this.win=0,this.loss=0}t.prototype.getId=function(){return this.id},t.prototype.setName=function(){this.name=prompt(`Player ${this.id} name:`)},t.prototype.getName=function(){return this.name},t.prototype.setMark=function(){this.mark=prompt(`Player ${this.id} mark:`)},t.prototype.getMark=function(){return this.mark},t.prototype.giveWin=function(){this.win++},t.prototype.getWin=function(){return this.win},t.prototype.giveLoss=function(){this.loss++},t.prototype.getLoss=function(){return this.loss},new class{constructor(){this.players=[new t(1),new t(2)],this.board=function(){let t,r,e;return{setDimensions:()=>{t=Number(prompt("Enter number of rows","3")),r=Number(prompt("Enter number of columns","3")),(()=>{e=new Array(t);for(let i=0;i<t;i++)e[i]=new Array(r).fill(".")})()},getBoard:()=>e,printBoard:()=>{let t="";for(let r=0;r<e.length;r++){for(let i=0;i<e[r].length;i++)t+=`${e[r][i]} `;t+="\n"}console.log(t)},placeMark:(t,r,i)=>((t,r)=>"."==e[t][r])(t,r)?(e[t][r]=i,1):0,hasEmptyCells:()=>e.flat().includes(".")}}(),this.board.setDimensions(),this.tie=0,this.currentPlayer=Math.random()<.5?0:1,this.row,this.col,this.startGame()}startGame(){for(;;){if(!this.board.hasEmptyCells()){console.log("It is a tie"),this.tie++;break}this.setPlayerMark(),this.board.printBoard()}}setPlayerMark(){for(;[this.row,this.col]=prompt(`Player ${this.players[this.currentPlayer].getId()} enter mark position:`).split(",").map(Number),!this.board.placeMark(this.row,this.col,this.players[this.currentPlayer].getMark());)alert(`${this.row},${this.col} is not empty.\n try again!`);this.currentPlayer=1==this.currentPlayer?0:1}}})();