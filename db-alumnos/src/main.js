import { thC, titles } from "./components/th";
import "./styles/app.css";

// DOM
const $tableContainer = document.querySelector("#table-container");
const $thMain = $tableContainer.querySelector("thead tr");

window.addEventListener("DOMContentLoaded", (e) => {
  titles.forEach((title) => {
    $thMain.innerHTML += thC({ title });
  });
});
