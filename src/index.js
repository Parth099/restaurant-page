import "./style.css";
import "./reset.css";
console.log("Fart");

function showSelected() {
  const anchorList = document.querySelectorAll(".main-flex-link");
  for (let a = 0; a < anchorList.length; a++) {
    if (anchorList[a].textContent == this.option) {
      anchorList[a].classList.add("menu-selected");
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
