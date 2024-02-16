import { thC } from "./components/th";
import { trC } from "./components/tr";
import { jedis, titles } from "./db";
import "./styles/app.css";

//TODO: crear la funcionalidad para la modal
//TODO: agregar usuarios
//TODO: editar usuarios
//TODO: borrar usuarios
//TODO: buscar usuarios
//TODO: ordenar usuarios

// DOM
const $tableContainer = document.querySelector("#table-container");
const $thMain = $tableContainer.querySelector("#tr");
const $tbody = $tableContainer.querySelector("tbody");

const $modal = document.querySelector("#modal");
const $openModal = document.querySelector("#open-modal");
const $closeModal = document.querySelector("#close-modal");

const updateList = (array = jedis) => {
  $tbody.innerHTML = "";

  array.forEach((element) => {
    $tbody.innerHTML += trC({ ...element });
  });
};

window.addEventListener("DOMContentLoaded", (e) => {
  $openModal.addEventListener("click", () => $modal.classList.remove("hidden"));
  $closeModal.addEventListener("click", () => $modal.classList.add("hidden"));

  titles.forEach((title) => {
    $thMain.innerHTML += thC({ title });
  });

  updateList();
});
