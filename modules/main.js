import { countries } from "./contries.js";
const main = document.querySelector("main");

function create() {
  for (let i = 0; i < countries.length; i++) {
    // create card
    const card = document.createElement("div");
    // img
    const img = document.createElement("img");
    img.src = countries[i]["flag"];
    img.classList.add("img");
    card.appendChild(img);
    // country
    const h5 = document.createElement("h5");
    card.appendChild(h5);
    card.classList.add("card");
    h5.textContent = countries[i]["name"].toUpperCase();
    main.appendChild(card);
    // capital
    const capital = document.createElement("p");
    capital.classList.add("capital");
    capital.textContent = `Capital: `;
    card.appendChild(capital);
    // capital span
    const capitalSpan = document.createElement("span");
    capital.appendChild(capitalSpan);
    capitalSpan.textContent = `${countries[i]["capital"]}`;
    capitalSpan.classList.add("capitalSpan");
    // languages
    const languages = document.createElement("p");
    languages.classList.add("languages");
    languages.textContent = `Languages: `;
    card.appendChild(languages);
    // languages span
    const languagesSpan = document.createElement("span");
    languages.appendChild(languagesSpan);
    languagesSpan.textContent = `${countries[i]["languages"]}`;
    languagesSpan.classList.add("languagesSpan");
    // population
    const population = document.createElement("p");
    population.classList.add("population");
    population.textContent = `Population: ${countries[i]["population"]}`;
    card.appendChild(population);
    // const region = document.createElement("p");
    // region.classList.add("region");
    // region.textContent = `region: ${countries[i]["region"]}`;
    // card.appendChild(region);
    // const area = document.createElement("p");
    // area.classList.add("area");
    // area.textContent = `area: ${countries[i]["area"]}`;
    // card.appendChild(area);
  }
}
create();
// chart for countries that meet the match
function chart() {
  for (let i = 0; i < countries.length; i++) {
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
const spanList = document.querySelectorAll(".capitalSpan");
const h5List = document.querySelectorAll("h5");
const cardList = document.querySelectorAll(".card");
const input = document.querySelector("input");
const itemList = document.querySelectorAll(".item");
// key up function
function searchByCapital() {
  let count = 0;
  const searchResult = document.getElementById("search");
  for (let i = 0; i < spanList.length; i++) {
    if (
      !spanList[i].textContent
        .toLowerCase()
        .startsWith(input.value.toLowerCase()) &&
      !h5List[i].textContent.toLowerCase().startsWith(input.value.toLowerCase())
    ) {
      cardList[i].style.display = "none";
      itemList[i].style.display = "none";
    } else {
      cardList[i].style.display = "block";
      itemList[i].style.display = "flex";
      count++;
    }
  }
  searchResult.textContent = `${count} countries satisfied the search criteria`;
}
input.addEventListener("keyup", searchByCapital);

let arr = [];

const countryList = document.querySelectorAll(".country");
const figureList = document.querySelectorAll(".figure");
for (let i = 0; i < countries.length; i++) {
  countryList[i].textContent = countries[i]["name"];
  figureList[i].textContent = countries[i]["population"];
  arr.push(countries[i]["population"]);
}

const census = 7693165599;
for (let i = 0; i < arr.length; i++) {
  arr[i] = Math.ceil((arr[i] / census) * 100);
}
const bar = document.querySelectorAll(".bar");
for (let i = 0; i < bar.length; i++) {
  bar[i].style.width = `${arr[i]}%`;
}
