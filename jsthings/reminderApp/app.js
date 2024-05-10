

document.addEventListener("DOMContentLoaded", () => {

    overviewSearchInput();


    const overviewLinks = document.querySelectorAll(".main-content");
    overviewLinks.forEach(link => {
        link.addEventListener("click", () => {
            const contentId = link.id;
            showContent(contentId);
        });
    });


    const addListBtn = document.querySelector("#overlay");
    addListBtn.addEventListener('click', () => {
        const contentId = addListBtn.id;
        showOverlay(contentId);
    });
    // showContent("camping-trip");
    showOverlay('overlay')
});

function showContent(contentId) {
    var mainContent = document.querySelector(".main-container");
    
    fetch("main-content/" + contentId + ".html") 
        .then(response => {
            if(!response.ok) {
                throw new Error("Network response was not okay");
            }
            return response.text();
        })
        .then(html => {
            mainContent.innerHTML = html;
            otherFile();
        })
        .catch(error => {
            console.error("There was a problem with your fetch operation, " + error);
        });
}

function showOverlay(overlayId) {
    let viewPort = document.querySelector('.overlay-container');

    fetch('main-content/' + overlayId + '.html')
        .then(response => {
            if (!response.ok) {
                throw new Error("Overlay could not be fetched");
            }
            return response.text();
        })
        .then(overlay => {
            viewPort.innerHTML = overlay;
            addListOverlay();
            // console.log(overlay);
        })
        .catch(error => {
            console.error('There was a problem with your fetch operation, ' + error);
        });
}




