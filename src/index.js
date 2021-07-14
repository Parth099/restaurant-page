import "./style.css";
import "./reset.css";

import { genHome } from "./home.js";
import { initMenu } from "./menu.js";
import { createContactCard } from "./contact.js";

var lastLoaded = "Home";
const generatorHash = {
  Home: genHome,
  Menu: initMenu, //() => console.log("Menu"),
  "Contact Me": createContactCard,
};
generatorHash[lastLoaded](); //landing page is 'Home'
console.log("Fart");

//exploits js dynamic 'this'
function showSelected() {
  const anchorList = document.querySelectorAll(".main-flex-link");
  for (let a = 0; a < anchorList.length; a++) {
    if (anchorList[a].textContent == (this.option ?? "Home")) {
      //con2 to prevent spam [ex: hitting menu over and over and forcing un-ness comps]
      if (lastLoaded != this.option) {
        anchorList[a].classList.add("menu-selected");
        resetPage();
        lastLoaded = this.option;
        generatorHash[this.option]();
      }
    } else {
      anchorList[a].classList.remove("menu-selected");
    }
  }
}

(function addEvents() {
  const anchorList = document.querySelectorAll(".main-flex-link");
  for (let a = 0; a < anchorList.length; a++) {
    anchorList[a].addEventListener(
      "click",
      showSelected.bind({ option: anchorList[a].textContent })
    );
  }
})();

function resetPage() {
  document.getElementById("content").remove();
  let div = document.createElement("div");
  div.setAttribute("id", "content");
  document.body.appendChild(div);
}
