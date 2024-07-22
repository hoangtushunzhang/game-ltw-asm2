export class gameCard{
  constructor({name, img, genre, price}){
    this.name=name;
    this.img=img;
    this.genre=genre;
    this.price=price;
  }
}

export function displayGameCard(card, parentElement, form) {
  const gameInfo = document.createElement('a');
  gameInfo.href = "gameInfo.html";
  
  // Tạo một phần tử container để chứa nội dung gamecard
  const gameCardContainer = document.createElement('div');
  gameCardContainer.className = form === 1 ? "gamecard-col" : "gamecard-row";

  gameCardContainer.innerHTML = `
    <img src=${card.img}>
    <p>${card.name}</p>
  `;
  
  gameInfo.appendChild(gameCardContainer);
  parentElement.appendChild(gameInfo);
}

export function genreFilter(genre, list, parentElement) {
  list.forEach(game => {
    console.log(game.genre);
    if(game.genre.includes(genre)){
      displayGameCard(game, parentElement, 1);
    }
  });
}