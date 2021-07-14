import stkpic from "./imageDir/stk_n_che.jpg";
import mtball from "./imageDir/mtball.jpeg";
import spyitl from "./imageDir/spyitl.jpg";
import trky from "./imageDir/trky.jpg";

let imgArr = [stkpic, mtball, spyitl, trky];
let textArr = ["Steak & Cheese", "Spherical Meat", "Spicy Italian", "Turkey"];

function createMenuCard(cardText, imgRef) {
  //declare all attrs
  let itemCard, itemImage, p;
  itemCard = document.createElement("div");
  itemImage = document.createElement("div");
  p = document.createElement("p");
  p.textContent = cardText;

  itemCard.classList.add("item-card");
  itemImage.classList.add("item-image");

  const cardIMG = new Image();
  cardIMG.src = imgRef;
  cardIMG.classList.add("menu-image");
  itemImage.appendChild(cardIMG);

  itemCard.appendChild(itemImage);
  itemCard.appendChild(p);

  return itemCard;
}

export function initMenu() {
  const MAIN = document.createElement("div");
  const title = document.createElement("h1");

  MAIN.classList.add("menu-cont");
  title.classList.add("menu-title");

  title.textContent = "Menu";

  MAIN.appendChild(title);
  //final
  pushSandWich(MAIN);
  document.getElementById("content").appendChild(MAIN);
}

function genSubHead(title) {
  let sh = document.createElement("div");
  sh.classList.add("menu-subheading");
  sh.textContent = title;
  return sh;
}

function genGrid() {
  let d = document.createElement("div");
  d.classList.add("display-menu-grid");
  return d;
}

function pushSandWich(MAIN) {
  MAIN.appendChild(genSubHead("Sandwiches"));
  let gridCont = genGrid();
  for (var i = 0; i < imgArr.length; i++) {
    gridCont.appendChild(createMenuCard(textArr[i], imgArr[i]));
  }
  MAIN.appendChild(gridCont);
}
