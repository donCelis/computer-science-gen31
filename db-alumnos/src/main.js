import "./styles/app.css";
import { formC } from "./components/form";
import { thC } from "./components/th";
import { titles } from "./db";
import { handleSubmit } from "./scripts/create";
import { updateList } from "./scripts/read";
import { debounceHandleSearch } from "./scripts/search";

//TODO: crear la funcionalidad para la modal -> ok
//TODO: agregar usuarios -> ok
//TODO: editar usuarios -> ok
//TODO: borrar usuarios -> ok
//TODO: buscar usuarios -> ok (agregar un debounce)
//TODO: ordenar usuarios

// DOM
const $tableContainer = document.querySelector("#table-container");
const $thMain = $tableContainer.querySelector("#tr");
export const $tbody = $tableContainer.querySelector("tbody");

export const $modal = document.querySelector("#modal");
export const $modalContainer = $modal.querySelector("#modal-container");
const $openModal = document.querySelector("#open-modal");
const $closeModal = document.querySelector("#close-modal");

function renderTableTitles() {
  const titlesHTML = titles.map((title) => thC({ title })).join("");
  $thMain.innerHTML = titlesHTML;
}

window.addEventListener("DOMContentLoaded", (e) => {
  // modal
  $openModal.addEventListener("click", () => $modal.classList.remove("hidden"));
  $closeModal.addEventListener("click", () => {
    $modalContainer.querySelector("form").reset();
    $modal.classList.add("hidden");
  });
  $modalContainer.innerHTML = formC({ id: "create-user" });

  // titles table
  renderTableTitles();

  // render list users
  updateList();

  // create user
  const $form = document.querySelector("#create-user");
  $form.addEventListener("submit", handleSubmit);

  // search user
  const $searchForm = document.querySelector("#search");
  const $searchInput = $searchForm.querySelector("input");

  $searchForm.addEventListener("submit", (e) => e.preventDefault());
  $searchInput.addEventListener("input", debounceHandleSearch);
});
