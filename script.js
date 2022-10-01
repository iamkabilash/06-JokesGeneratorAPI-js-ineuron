const jokeElement = document.getElementById("joke");
const button = document.getElementById("jokeBtn");

async function getJoke() {
    url = "https://api.chucknorris.io/jokes/random";
    const joke = await fetch(url).then((response) => response.json());
    jokeElement.innerText = joke.value;
}

button.addEventListener("click", getJoke);