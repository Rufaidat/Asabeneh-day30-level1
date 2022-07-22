import { countries } from "./contries.js";
let mostPopulousArray = countries.slice();
mostPopulousArray.sort((a, b) => {
  return b["population"] - a["population"];
});
mostPopulousArray = mostPopulousArray.slice(0, 10);

function chart() {
  for (let i = 0; i < mostPopulousArray.length; i++) {
    const populationDiv = document.querySelector("#population");
    const item = document.createElement("div");
    item.classList.add("item");
    const country = document.createElement("p");
    country.classList.add("country");
    const barBox = document.createElement("div");
    barBox.classList.add("bar-box");
    const bar = document.createElement("div");
    bar.classList.add("bar");
    const figure = document.createElement("p");
    figure.classList.add("figure");
    populationDiv.appendChild(item);
    item.appendChild(country);
    item.appendChild(barBox);
    item.appendChild(figure);
    barBox.appendChild(bar);
  }
}
chart();
let arr = [];
const countryList = document.querySelectorAll(".country");
console.log(countryList);
const figureList = document.querySelectorAll(".figure");
for (let i = 0; i < mostPopulousArray.length; i++) {
  countryList[i].textContent = mostPopulousArray[i]["name"];
  figureList[i].textContent = mostPopulousArray[i]["population"];
  arr.push(mostPopulousArray[i]["population"]);
}

const census = 7693165599;
for (let i = 0; i < arr.length; i++) {
  arr[i] = Math.ceil((arr[i] / census) * 100);
}
const bar = document.querySelectorAll(".bar");
for (let i = 0; i < bar.length; i++) {
  bar[i].style.width = `${arr[i]}%`;
}
