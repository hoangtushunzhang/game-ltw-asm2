import { genreFilter } from "./modules/gameCard.js";
import { genreList, games } from "./data.js";

/*Side menu */
const sidemenu = document.getElementById("sidemenu");
genreList.forEach(item => {
  const genre = document.createElement('a');
  genre.href=`genrePage.html?genre=${item}`;
  genre.innerHTML=`<li>${item}</li>`;
  sidemenu.appendChild(genre);
})

const urlParams = new URLSearchParams(window.location.search);
const genre = urlParams.get("genre");
const genreSection = document.getElementById('genresection');
genreSection.innerHTML=`<h1>Category: ${genre}</h1>`;
const genreContainer = document.createElement('div');
genreFilter(genre, games, genreContainer);
genreSection.appendChild(genreContainer);


