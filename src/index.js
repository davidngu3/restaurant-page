let content = document.querySelector('div#content');

let img = document.createElement("img");
img.src="../src/bg.jpg";
img.alt="restaurant background";

let title = document.createElement("h1");
title.textContent = "Klondike Eatery";

let description = document.createElement("p");
description.textContent = "The award-winning American-French fusion restaurant \
was established in 1995 out of the desire to transform the humble American cuisine \
using the culinary elegance borrowed from French cuisine. Serving vegetarian, vegan \
and gluten-free options, Klondike Eatery is the \perfect family, date, casual or formal \
one-stop shop for a superb dining experience";

content.appendChild(img);
content.appendChild(title);
content.appendChild(description);

