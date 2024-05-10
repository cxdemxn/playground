function otherFile() {
    
}

function addListOverlay() {
    // focusPromptInput();
    toggleSaveBtn('#saveInput', '#userInput');

    const form = document.querySelector('#promptBox');
    form.addEventListener('submit', event => {
        event.preventDefault();

        const name = saveListName()

        addListItem(name);
    });

    const radio = document.querySelector('#radio');
    radio


    // document.querySelector('#saveInput').addEventListener('click', (e) => {
    //     const name = saveListName()

    //     addListItem(name);
    // });

    document.querySelector('#cancelInput').addEventListener('click', closePromptBox);
}

function overviewSearchInput() {
    const searchInput = document.querySelector("#searchParent input");

    searchInput.addEventListener("focus", () => {
        const searchParent = searchInput.parentElement;
        
        searchParent.classList.add("searchFocus");
        searchParent.id = '';
        
    });

    searchInput.addEventListener("input", () => {
        const searchParent = searchInput.parentElement;

        if (searchInput.value)
            searchParent.classList.add("searchInput");
        else
            searchParent.classList.remove("searchInput");
        
    });

    searchInput.addEventListener("blur", () => {
    const searchParent = searchInput.parentElement;

        if (!searchInput.value) {
            searchParent.classList.remove("searchFocus");
            searchParent.id = "searchParent"
        }
    });

    searchInput.addEventListener("keydown", (event) => {
        if (event.key === 'Escape')
            searchInput.blur();
    });
}