let createElem = function(elemType) {
    return document.createElement(elemType);
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

const headerOne = createElem("h1");
headerOne.textContent = "I'm in a div";
secondDiv.appendChild(headerOne);

const secondPara = createElem("p");
secondPara.textContent = "ME TOO!";
secondDiv.appendChild(secondPara);

container.appendChild(secondDiv);

const btns = document.querySelectorAll("button");
btns.forEach(btn) => {

}