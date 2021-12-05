import './styles.css';

const contactDetails = {

}

function renderContactPage() {
    let content = document.querySelector('div#content');
    let div = document.createElement('div');
    div.innerHTML = "CONTACT HERE";

    content.appendChild(div);
}

export { renderContactPage };