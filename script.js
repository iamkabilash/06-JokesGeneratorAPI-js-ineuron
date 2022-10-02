const jokeElement = document.getElementById("joke");
const button = document.getElementById("jokeBtn");

// async function getJoke() {
//     url = "https://api.chucknorris.io/jokes/random";
//     const joke = await fetch(url).then((response) => response.json());
//     jokeElement.innerText = joke.value;
// }

function getJoke() {
    fetch("https://icanhazdadjoke.com/slack")
        .then(res => res.json())
        .then(data => jokeElement.innerText = data.attachments[0].text);
}

button.addEventListener("click", getJoke);

