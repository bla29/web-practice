// index.js
import { greeting } from "./greeting.js";
import yesPhoto from "./yesCoverPhoto.png"
import noPhoto from "./noCoverPhoto.png"
import noPhoto2 from "./noCoverPhoto2.png"
import "./styles.css"

let yesButton = document.querySelector('.yes-button');
let noButton = document.querySelector('.no-button');
let headerText = document.querySelector('#header-text');
let oldPhoto = document.querySelector('#cover-photo');
yesButton.addEventListener('click', () => {
    oldPhoto.src = yesPhoto;

    headerText.textContent = 'I love you <3'

    yesButton.remove();
    noButton.remove();
});

let noPhotoSelector = true;
noButton.addEventListener('click', () => {
    if (noPhotoSelector) {
        oldPhoto.src = noPhoto;
        noPhotoSelector = !noPhotoSelector;
    }
    else {
        oldPhoto.src = noPhoto2;
        noPhotoSelector = !noPhotoSelector;
    }

    headerText.textContent = 'Why do you hate me...</3'

    yesButton.textContent = 'No, I still want to be your valentines!';
    noButton.textContent = 'Confirm </3'

    const currentWidth = yesButton.getBoundingClientRect().width;
    const currentHeight = yesButton.getBoundingClientRect().height;

    // 4. Define the increase amount
    const increaseAmount = 10; // Increase by 10 pixels each time

    // 5. Calculate the new dimensions
    const newWidth = currentWidth + increaseAmount;
    const newHeight = currentHeight + increaseAmount;

    // Optional: Increase font size gradually as well
    const currentFontSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    const newFontSize = currentFontSize + 1; // Increase font size by 1px

    yesButton.style.width = newWidth + 'px';
    yesButton.style.height = newHeight + 'px';
    yesButton.style.fontSize = newFontSize + 'px';
})
