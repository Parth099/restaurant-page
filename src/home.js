import bkimg1 from "./bkimg1.jpg";
import bkimg2 from "./bkimg2.jpg";

const textToRender = [
  "Subway has a variety of choices. These choices can be seen in the Menu tab.",
  "Subway is focused on environmental sustainability and personal nutrition. This is reflected by the food offered at the subway which is reduced in sugars, sodium, while containing more whole grains and vegetables.",
];
const titleTextToRender = ["Variety", "Eat Fresh"];
const bkimg = [bkimg1, bkimg2];
function createHomeCard(titleText, infotext, x) {
  //vars
  let bkGrnd, contentTitleCont, contentTitle, cardText;
  //create elements
  bkGrnd = document.createElement("div");
  contentTitleCont = document.createElement("div");
  contentTitle = document.createElement("h1");
  cardText = document.createElement("p");

  //styling
  bkGrnd.classList.add("content-background");
  contentTitleCont.classList.add("content-title-cont");
  contentTitle.classList.add("content-title");
  cardText.classList.add("home-page-text");

  //tree creation [basic] [reverse] --> 4 elements --> 4 - 1 appends
  contentTitleCont.appendChild(contentTitle);
  bkGrnd.appendChild(contentTitleCont);
  bkGrnd.appendChild(cardText);

  //text insertion
  contentTitle.textContent = titleText;
  cardText.textContent = infotext;

  //bkimg
  bkGrnd.classList.add(`content-background-${x + 1}`);
  return bkGrnd;
}

export function genHome() {
  let appendPoint = document.getElementById("content");
  for (let x = 0; x < textToRender.length; x++) {
    appendPoint.appendChild(
      createHomeCard(titleTextToRender[x], textToRender[x], x)
    );
  }
}
