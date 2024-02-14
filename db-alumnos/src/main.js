import { thC, titles } from "./components/th";
import { trC } from "./components/tr";
import { jedis } from "./db";
import "./styles/app.css";

// DOM
const $tableContainer = document.querySelector("#table-container");
const $thMain = $tableContainer.querySelector("thead tr");
const $tbody = $tableContainer.querySelector("tbody");

const updateList = (array = jedis) => {
  $tbody.innerHTML = "";

  array.forEach((element) => {
    $tbody.innerHTML += trC({ ...element });
  });
}

window.addEventListener("DOMContentLoaded", (e) => {
  titles.forEach((title) => {
    $thMain.innerHTML += thC({ title });
  });

  updateList();
});
