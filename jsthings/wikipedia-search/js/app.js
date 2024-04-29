const searchTermElem = document.querySelector("#searchTerm");
const searchResultElem = document.querySelector("#searchResult");

// searchTermElem.focus();
// searchTermElem.select();

searchTermElem.addEventListener("input", (event) => {
    search(event.target.value);
});

let timeOutId;

const debounce = (fn, delay=500) => {
    let timeOutId;
    return (...args) => {
        clearTimeout(timeOutId);
        timeOutId = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    }
}

const search = debounce(async (searchTerm) => {
    try {
        const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info|extracts&inprop=url&utf8=&format=json&origin=*&srlimit=10&srsearch=${searchTerm}`;
        const response = await fetch(url);
        const searchResults = await response.json();

        console.log({
            'term': searchTerm,
            'results': searchResults.query.search
        });

    } catch (error) {
        console.log(error);
    };
});