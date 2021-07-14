import "./style.css";
import "./reset.css";

import { genHome } from "./home.js";
import { initMenu } from "./menu.js";

const generatorHash = {
  Home: genHome,
  Menu: initMenu, //() => console.log("Menu"),
  "Contact Me": () => console.log("Contact Me"),
};
console.log("Fart");

function showSelected() {
  const anchorList = document.querySelectorAll(".main-flex-link");
  for (let a = 0; a < anchorList.length; a++) {
    if (anchorList[a].textContent == (this.option ?? "Home")) {
      //con2 to prevent sopam
      anchorList[a].classList.add("menu-selected");
      resetPage();
      generatorHash[this.option]();
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

generatorHash["Home"]();
