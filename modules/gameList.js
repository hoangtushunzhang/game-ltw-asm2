import { displayGameCard, gameCard } from "./gameCard.js";

export function gameList(list, parentElement, form){
  list.forEach(item => {
    const gameInfo = new gameCard({name: item.name, img: item.img});
    displayGameCard(gameInfo, parentElement, form);
  });
}