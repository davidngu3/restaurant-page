import { renderContactPage } from "./contact";
import { renderHomePage } from "./homepage";
import { renderMenuPage } from "./menu";

function clearContent() {
    let content = document.querySelector('div#content');
    content.innerHTML = "";
}

let homeButton = document.querySelector('button#homeBtn');
let menuButton = document.querySelector('button#menuBtn');
let contactButton = document.querySelector('button#contactBtn');

homeButton.addEventListener('click', () => {
    clearContent();
    renderHomePage();
});

menuButton.addEventListener('click', () => {
    clearContent();
    renderMenuPage();
});

contactButton.addEventListener('click', () => {
    clearContent();
    renderContactPage();
});

renderHomePage();