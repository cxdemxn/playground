let createElem = function(elemType) {
    return document.createElement(elemType);
}

let createAndAppend = function(parent, child, content, qnty) {
    for (let i = 0; i < qnty; i++) {
        const newNode = document.createElement(child);
        if (content)
            newNode.textContent = content + ` ${i+1}`;
        parent.appendChild(newNode);
    }

    return parent;
}

const container = document.querySelector(".container");

const content = createElem("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const firstPara = createElem("p");
firstPara.textContent = "Hey i'm red";
firstPara.style.color = "red";
container.appendChild(firstPara);

const headerThree = createElem("h3");
headerThree.textContent = "I'm a blue h3!";
headerThree.style.color = "blue";
container.appendChild(headerThree);

const secondDiv = createElem("div");
secondDiv.style.border = "1px solid black";
secondDiv.style.backgroundColor = "pink";
secondDiv.style.color = "white";

const headerOne = createElem("h1");
headerOne.textContent = "I'm in a div";
secondDiv.appendChild(headerOne);

const secondPara = createElem("p");
secondPara.textContent = "ME TOO!";
secondDiv.appendChild(secondPara);

container.appendChild(secondDiv);

const btnContainer = document.querySelector(".btn-container");

createAndAppend(btnContainer, "button", "button" , 4);
const btns = document.querySelectorAll("button");

btnOne = btns[0];
btnOne.textContent = "show div";
btnTwo = btns[1];
btnTwo.textContent = "hide div";
btnThree = btns[2];
btnFour = btns[3];


let generateRandomColor = function () {
    const red = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);

    const randomColor = "rgb(" + red + "," + green + "," + blue + ")";

    return randomColor;
};

btns.forEach((btn) => {
    btn.addEventListener("mouseover", () => {
        secondDiv.style.backgroundColor = generateRandomColor();
    });
})

btnOne.addEventListener("click", () => {
    container.appendChild(secondDiv);
});

btnTwo.addEventListener("click", (e) => {
    container.removeChild(secondDiv);
});