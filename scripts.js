import { genreFilter } from "./modules/gameCard.js";
import { gameList } from "./modules/gameList.js";
import { gameSlider } from "./modules/gameSlider.js";
import { topGames } from "./modules/topGames.js";
import { genreList, games } from "./data.js";


const topSale = [
  {name: "GTA5", img: "./img/gta.jpg", genre: ["action", "adventure"]},
  {name: "Subnautica", img: "./img/SUB.jpg", genre: ["action", "adventure"]},
  {name: "Dark Soul III", img: "./img/DSIII.jpg", genre: ["action"]},
  {name: "Borderland 2", img: "./img/BDL2.jpg", genre: ["action", "FPS"]},
  {name: "God Of War", img: "./img/GOW.jpg", genre: ["action", "adventure"]},
]
const mostView = [
  {name: "HADES", img: "./img/HADES.jpg", genre: ["action", "RPG"]},
  {name: "Subnautica", img: "./img/SUB.jpg", genre: ["action", "adventure"]},
  {name: "Persona 5", img: "./img/P5R.jpg", genre: ["action", "RPG"]},
  {name: "Path Of Exile", img: "./img/POE.jpg", genre: ["action", "RPG"]},
  {name: "God Of War", img: "./img/GOW.jpg", genre: ["action", "adventure"]},
]
const mostPlayed = [
  {name: "Final Fantasy VII", img: "./img/FF7.jpg", genre: ["RPG"]},
  {name: "ARK: Survival Evolved", img: "./img/ARK.jpg", genre: ["survival"]},
  {name: "Dark Soul III", img: "./img/DSIII.jpg", genre: ["action"]},
  {name: "Red Dead Redemption", img: "./img/RDR.jpg", genre: ["action", "adventure"]},
  {name: "God Of War", img: "./img/GOW.jpg", genre: ["action", "adventure"]},
]
const onSale = [
  {name: "GTA5", img: "./img/gta.jpg", genre: ["action", "adventure"]},
  {name: "Subnautica", img: "./img/SUB.jpg", genre: ["action", "adventure"]},
  {name: "Dark Soul III", img: "./img/DSIII.jpg", genre: ["action"]},
  {name: "Borderland 2", img: "./img/BDL2.jpg", genre: ["action", "FPS"]},
  {name: "God Of War", img: "./img/GOW.jpg", genre: ["action", "adventure"]},
  {name: "Red Dead Redemption", img: "./img/RDR.jpg", genre: ["action", "adventure"]},
]

/*Side menu */
const sidemenu = document.getElementById("sidemenu");

genreList.forEach(item => {
  const genre = document.createElement('a');
  genre.href=`genrePage.html?genre=${item}`;
  genre.innerHTML=`<li>${item}</li>`;
  sidemenu.appendChild(genre);
})

/*Small Screen */
const smallscreen = document.getElementById("smallscreen");
gameList(topSale,smallscreen);

/* Game On Sale */
const gameonsales = document.getElementById("gameonsales") 
gameSlider({title: "Game On Sales",list: onSale, parentElement: gameonsales} )
// gameSlider("Game On Sales", topSale, gameonsales)


/* Top Games Section */
const topGamesSection = document.getElementById('topgamessection');
topGames("Top Sale",topSale,topGamesSection);
topGames("Most View",mostView,topGamesSection);
topGames("Most Played",mostPlayed,topGamesSection);

