let createBTN = document.querySelector(`#btn`);
let overlay = document.querySelector(`.overlay`);
let cancelOverlay = document.querySelector(`.fa-xmark`);
let webNameInput = document.querySelector(`#nameOfWebsite`);
let webLinkInput = document.querySelector(`#linkOfWebsite`);
let webDesInput = document.querySelector(`#descriptionOfWebsite`);
let saveBTN = document.querySelector(`#save`);
let form = document.querySelector(`form`);
let resourceDisplay = document.querySelector(`.secondSection`);

let resourceArray = JSON.parse(localStorage.getItem(`resource`)) || [];

createBTN.addEventListener(`click`, function() {
    overlay.style.display = `block`;
});

saveBTN.addEventListener(`click`, function(event) {
    event.preventDefault();
    formCollection();
    form.reset();
    overlay.style.display = `none`;
    console.log(resourceArray);
    localStorage.setItem(`resource`, JSON.stringify(resourceArray));
    dataDisplay();
});

cancelOverlay.addEventListener(`click`, function() {
    overlay.style.display = `none`;
});

function formCollection() {
    let webName = webNameInput.value;
    let webLink = webLinkInput.value;
    let webDescription = webDesInput.value;
  
    let formEntryObj = {
        name: webName,
        link: webLink,
        description: webDescription
    };
    
    resourceArray.push(formEntryObj);
}

function dataDisplay() {
    // Clear the existing content in the display area
    resourceDisplay.innerHTML = '';

    resourceArray.forEach(function(item, index) {
        let resourceCon = document.createElement(`div`);
        let resourceheadDel = document.createElement(`div`);
        let reasourceHeader = document.createElement(`h1`);
        let DelContainer = document.createElement(`div`);
        let reaDes = document.createElement(`p`);
        let realink = document.createElement(`p`);
        let icon = document.createElement('i');  // Create a new icon for each item

        reasourceHeader.textContent = item.name;
        realink.textContent = item.link;
        reaDes.textContent = item.description;

        icon.className = "fa fa-trash";
        icon.style.cursor = 'pointer'; // Change cursor to pointer for delete icon
        DelContainer.append(icon);
        resourceheadDel.append(reasourceHeader);
        resourceheadDel.append(DelContainer);

        resourceCon.append(resourceheadDel);
        resourceCon.append(realink);
        resourceCon.append(reaDes);

        resourceCon.classList.add(`resourceCon`);
        resourceheadDel.classList.add(`resourceheadDel`);
        reasourceHeader.classList.add(`reasourceHeader`);
        DelContainer.classList.add(`DelContainer`);
        realink.classList.add(`link`);
        reaDes.classList.add(`reaDes`);

        resourceDisplay.append(resourceCon);

        // Add click event listener to the delete icon
        icon.addEventListener('click', function() {
            // Remove item from the array
            resourceArray.splice(index, 1);
            // Update the local storage
            localStorage.setItem(`resource`, JSON.stringify(resourceArray));
            // Update the display
            dataDisplay();
        });
    });
}

// Initial display of data from localStorage
dataDisplay();
