import stkpic from "./imageDir/stk_n_che.jpg";
import mtball from "./imageDir/mtball.jpeg";
import spyitl from "./imageDir/spyitl.jpg";
import trky from "./imageDir/trky.jpg";

import proBowls from "./imageDir/probowls.png";
import salads from "./imageDir/salads.jpeg";
import wraps from "./imageDir/wraps.jpg";

import chips from "./imageDir/chips.jpg";
import cookies from "./imageDir/cookie.jpg";
import drink from "./imageDir/drink.png";

let MAIN; //global[var] to save tree trevesal time

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
  MAIN = document.createElement("div");
  const title = document.createElement("h1");

  MAIN.classList.add("menu-cont");
  title.classList.add("menu-title");

  title.textContent = "Menu";

  MAIN.appendChild(title);
  //final

  //displays items
  pushSandwiches();
  miscItems();
  sideItems();
  displayData(" ", [], []);
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

function displayData(subSection, textData, imageData) {
  MAIN.appendChild(genSubHead(subSection));
  let gridCont = genGrid();
  const lim = Math.min(imageData.length, textData.length); //incase of loading failure --> website wont crash
  for (var i = 0; i < lim; i++) {
    gridCont.appendChild(createMenuCard(textData[i], imageData[i]));
  }
  MAIN.appendChild(gridCont);
}

function pushSandwiches() {
  let imgArr = [stkpic, mtball, spyitl, trky];
  let SwArr = ["Steak & Cheese", "Spherical Meat", "Spicy Italian", "Turkey"];
  displayData("Sandwiches", SwArr, imgArr);
}

function miscItems() {
  let imgArr = [proBowls, salads, wraps];
  let textArr = ["Protein Bowls", "Salads", "Wraps"];
  displayData("Miscellaneous Items", textArr, imgArr);
}

function sideItems() {
  let imgArr = [drink, chips, cookies];
  let textArr = ["Drinks", "Chips", "Cookies"];
  displayData("Sides", textArr, imgArr);
}
