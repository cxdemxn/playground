import _ from 'lodash';
import myName from './myName';
import printMe from './print.js';

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    // Lodash, currently included via a script, is needed to make this line work
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    btn.innerHTML = 'Click me and check the console';
    btn.onclick = printMe;

    element.appendChild(btn);


    return element;
}

function nuComponent() {
    const element = document.createElement('h1');

    element.textContent = myName('Bari');

    return element;
}


document.body.appendChild(component());
document.body.appendChild(nuComponent());