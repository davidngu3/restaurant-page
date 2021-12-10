import './styles.css';

function renderHomePage() {
    let content = document.querySelector('div#content');

    let homePageWrapper = document.createElement('div');
    homePageWrapper.classList.add("banner");
    
    let title = document.createElement("h1");
    title.textContent = "Klondike Eatery";
    title.classList.add("title");
    
    let description = document.createElement("p");
    description.classList.add("description");
    description.textContent = "This award-winning Australian-French fusion restaurant \
    was established in 1995 out of the desire to transform the Australian modern cuisine \
    using elements borrowed from the critically acclaimed French cooking style. Serving vegetarian, vegan \
    and gluten-free options, Klondike Eatery is the perfect family, date, casual or formal \
    venue for a superb dining experience";
    
    homePageWrapper.appendChild(title);
    homePageWrapper.appendChild(description);
    content.appendChild(homePageWrapper);
}

export { renderHomePage };