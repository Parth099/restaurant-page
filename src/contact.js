import gitPic from "./imageDir/github.png";

export function createContactCard() {
  //declare all vars
  let container, flexLeft, flexRight, formTitle, titleRight;
  let nameLabel, nameInput;
  let emailLabel, emailInput;
  let subjectLabel, subjectTextArea;
  let smtbtn;
  let anchorCont, anchor, gitIcon;

  container = document.createElement("div");
  container.classList.add("contact-cont");

  flexLeft = document.createElement("div");
  flexLeft.classList.add("contact-left");

  formTitle = document.createElement("h1");
  formTitle.classList.add("contact-title");
  formTitle.textContent = "Contact Me";

  flexLeft.appendChild(formTitle);
  //flexLeft is complete

  flexRight = document.createElement("div");
  flexRight.classList.add("contact-right");

  titleRight = document.createElement("h1");
  titleRight.classList.add("contact-form-title");
  titleRight.textContent = "Contact Form";

  flexRight.appendChild(titleRight);

  nameLabel = createCusElement({ for: "name" }, "label", ["cf-label"], "Name:");
  nameInput = createCusElement(
    { type: "text", id: "name", name: "name", placeholder: "Name..." },
    "input",
    ["cf-input"],
    ""
  );
  flexRight.appendChild(nameLabel);
  flexRight.appendChild(nameInput);

  emailLabel = createCusElement(
    { for: "email" },
    "label",
    ["cf-label"],
    "Name:"
  );
  emailInput = createCusElement(
    { type: "text", id: "email", name: "email", placeholder: "email@org.ext" },
    "input",
    ["cf-input"],
    ""
  );
  flexRight.appendChild(emailLabel);
  flexRight.appendChild(emailInput);

  subjectLabel = createCusElement(
    { for: "subject" },
    "label",
    ["cf-label"],
    "Subject:"
  );
  subjectTextArea = createCusElement(
    { id: "subject", name: "subject", placeholder: "Write your message here" },
    "textarea",
    ["cf-input"],
    ""
  );
  flexRight.appendChild(subjectLabel);
  flexRight.appendChild(subjectTextArea);

  container.appendChild(flexLeft);
  container.appendChild(flexRight);

  smtbtn = createCusElement(
    { id: "submitBtnContactForm" },
    "button",
    ["cf-submit"],
    "Submit Form"
  );
  flexRight.appendChild(smtbtn);

  anchorCont = createCusElement({}, "div", ["img-cont"], "");
  anchor = createCusElement(
    { href: "https://github.com/Parth099", target: "_blank" },
    "a",
    ["cf-link"],
    ""
  );
  //git img
  gitIcon = new Image();
  gitIcon.src = gitPic;
  gitIcon.classList.add("gitImg");
  anchor.appendChild(gitIcon);
  anchorCont.appendChild(anchor);
  flexLeft.append(anchorCont);

  document.getElementById("content").appendChild(container);
}

function createCusElement(DataObject, element, classInfo, textData) {
  const ele = document.createElement(element);
  ele.textContent = textData;
  //set up classes
  classInfo.forEach((c) => ele.classList.toggle(c));
  //attr
  const keys = Object.keys(DataObject); //array
  keys.forEach((key) => {
    ele.setAttribute(key, DataObject[key]);
  });

  return ele;
}
