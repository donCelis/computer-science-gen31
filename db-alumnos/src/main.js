import { formC } from "./components/form";
import { thC } from "./components/th";
import { trC } from "./components/tr";
import { jedis, roleOptions, teamOptions, titles } from "./db";
import "./styles/app.css";
import { getFormValues } from "./utils/getFormValues";

//TODO: crear la funcionalidad para la modal -> ok
//TODO: agregar usuarios -> ok
//TODO: editar usuarios
//TODO: borrar usuarios -> ok
//TODO: buscar usuarios
//TODO: ordenar usuarios

// DOM
const $tableContainer = document.querySelector("#table-container");
const $thMain = $tableContainer.querySelector("#tr");
const $tbody = $tableContainer.querySelector("tbody");

const $modal = document.querySelector("#modal");
const $modalContainer = $modal.querySelector("#modal-container");
const $openModal = document.querySelector("#open-modal");
const $closeModal = document.querySelector("#close-modal");

const updateList = (array = jedis) => {
  $tbody.innerHTML = "";

  array.forEach((element, index) => {
    $tbody.innerHTML += trC({ ...element, index });
  });

  const $deleteButtons = $tbody.querySelectorAll("[data-action='delete']");
  $deleteButtons.forEach(($button) => {
    $button.addEventListener("click", () => handleDelete($button));
  });
};

window.addEventListener("DOMContentLoaded", (e) => {
  // modal
  $openModal.addEventListener("click", () => $modal.classList.remove("hidden"));
  $closeModal.addEventListener("click", () => $modal.classList.add("hidden"));
  $modalContainer.innerHTML += formC({ id: "create-user" });

  // titles table
  titles.forEach((title) => {
    $thMain.innerHTML += thC({ title });
  });

  // render list users
  updateList();

  // create user
  const $form = document.querySelector("#create-user");
  $form.addEventListener("submit", handleSubmit);
});

// create user
const handleSubmit = (e) => {
  e.preventDefault();

  const tmpUser = getFormValues(e.target);
  const newUser = {
    ...tmpUser,
    role: roleOptions[tmpUser.role],
    team: teamOptions[tmpUser.team],
  };

  jedis.push(newUser);
  updateList();

  e.target.reset();
  $modal.classList.add("hidden");
};

// delete user
export const handleDelete = (event) => {
  const index = event.dataset.index;
  jedis.splice(index, 1);
  updateList();
};
