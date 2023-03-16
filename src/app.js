/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {};
document.querySelector("#btn").addEventListener("click", () => {
  domainNameGenerator().forEach((element, index) => {
    const elem = (sel, par) => (par || document).querySelector(sel);
    const newElem = (tag, prop) =>
      Object.assign(document.createElement(tag), prop);
    const elemParent = elem("#newDomain");
    elemParent.append(
      newElem("p", { textContent: index + 1 + " -  " + element })
    );
  });
});

let result = [];

let domainNameGenerator = () => {
  let pronoun = ["A", "The", "Our"];
  let adjective = ["great", "amazing", "wild", "big", "rabbit"];
  let noun = ["jogger", "cat", "services", "car", "keys"];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adjective.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        console.log(pronoun[i] + adjective[j] + noun[k] + ".com");
        result.push(pronoun[i] + adjective[j] + noun[k] + ".com");
      }
    }
  }
  return result;
};
