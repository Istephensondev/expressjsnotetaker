// Create your HTML Page via DOM Methods here!

var body = document.body;

// TODO: Add a centered h1

var helloworld = document.createElement("h1")
helloworld.textContent= "Welcome to My Page"
body.appendChild(helloworld);

helloworld.setAttribute("style", "text-align: center");

// TODO: Add a centered h2

var kittens = document.createElement("h2")
kittens.textContent= "I love kittens they are so amazing"
body.appendChild(kittens);

kittens.setAttribute("style", "text-align: center");

// TODO: Add a centered image with a centered caption under it

// TODO: Add a list of your favorite foods (or other favorites)
