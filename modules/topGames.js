import { gameList } from "./gameList.js";

export function topGames(title, list, parentElement) {
  const topgames = document.createElement('div');
  topgames.innerHTML = 
  `
  <div class="gamelists_heading">
    <h5>${title}</h5>
    <button>VIEW MORE</button>
  </div>
  `
  const gamelists_games = document.createElement('span');
  gamelists_games.className="gamelists_games";
  gameList(list,gamelists_games, 0);
  topgames.className="gamelists_container"
  topgames.appendChild(gamelists_games)
  parentElement.appendChild(topgames)
}