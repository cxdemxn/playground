// addEventListener('DOMContentLoaded', (event) => {
//     console.log('The DOM is fully loaded.');
// });

// addEventListener('load', (event) => {
//     console.log('The page is fully loaded.');
// });

const addItemBtn = document.querySelector("button");
const inputItem = document.querySelector("input");
const itemList = document.querySelector("ul");

addItemBtn.addEventListener("click", () => {
    if (inputItem.value.trim() === ''){
        inputItem.value = '';
        inputItem.focus();
        return;  
    } 
    const newItem = inputItem.value;
    inputItem.value = "";
    inputItem.focus();
    
    const listText = document.createElement("span");
    listText.textContent = newItem;

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "Delete";

    const list = document.createElement("li");
    list.appendChild(listText);
    list.appendChild(deleteBtn);

    itemList.appendChild(list);

    deleteBtn.addEventListener("mouseleave", () => {
        itemList.removeChild(list);
    });
});

const btn = document.querySelector("#btn");

btn.addEventListener("contextmenu", (e) => {
    e.preventDefault();
});

let msg = document.querySelector("#message");
btn.addEventListener("mouseup", (e) => {
    msg.style.display = "block";
    switch(e.button) {
        case 0:
            msg.textContent = "The left button was clicked";
            break;
        case 1:
            msg.textContent = "The auxilliary button was clicked";
            break;
        case 2:
            msg.textContent = "The secondary button was clicked";
            break;
        case 3:
            msg.textContent = "The fourth button was clicked";
            break;
        case 4:
            msg.textContent = "The fifth button was clicked";
            break;
    }
});

btn.addEventListener('mouseout', () => {
    msg.style.display = "none";
});