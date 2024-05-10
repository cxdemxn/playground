function closePromptBox() {
    document.querySelector('.overlay').style.display = 'none';
    document.querySelector('#userInput').value = '';
}

function focusPromptInput() {
    const input = document.querySelector('#userInput');
    input.focus();

    input.addEventListener('input', () => {
        
    });

}

function saveListName() {
    const userInput = document.querySelector('#userInput');

    const listName = userInput.value.trim();
    userInput.value = ''
    closePromptBox();
    return listName
}

function addListItem(listName) {
    const listBody = document.querySelector('.list-body');
    const listItem = document.createElement('li');
    listItem.classList.add('list-item');

    listItem.innerHTML = `
    <div class="list-item-head">
        <div class="list-item-icon">
            <i class="fa-solid fa-thumbtack"></i>
        </div>
        <div class="list-item-name">
            ${listName}
        </div>
    </div>
    <div class="list-item-count">
        6 
    </div>
    `;

    listBody.appendChild(listItem);
}

function toggleSaveBtn(btnId, inputId) {

    const button = document.querySelector(btnId);
    const input = document.querySelector(inputId);

    if ((typeof btnId  != 'string') ||( typeof inputId != 'string')) {
        console.error('Save button ID is not a string');
        return null;
    }

    button.setAttribute('disabled', 'true');
    button.classList.add('n-a');

    input.addEventListener('input', (e) => {
        if (e.target.value === '') {
            button.setAttribute('disabled', 'true');
            button.classList.add('n-a');
        }
        else {
            button.removeAttribute('disabled');
            button.classList.remove('n-a');
        }
    });
}