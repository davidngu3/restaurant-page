import './styles.css';

function renderMenuPage() {
    let content = document.querySelector('div#content');
    let div = document.createElement('div');
    div.innerHTML = "MENU HERE";

    content.appendChild(div);

}

export { renderMenuPage };