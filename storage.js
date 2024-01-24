const form = document.querySelector("#product-form");
const title = document.querySelector("h1");
const item  = document.querySelector("#item");
const all = document.querySelector("#all");

let dataStorage = JSON.parse(localStorage?.formulario || null);

window.addEventListener("DOMContentLoaded", () => {
  title.textContent = dataStorage?.name || "No hay datos";

  item.addEventListener("click", () => {
    localStorage.removeItem("formulario");
    location.reload();
  });

  all.addEventListener("click", () => {
    localStorage.clear();
    location.reload();
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);

  const values = Object.fromEntries(data);

  localStorage.formulario = JSON.stringify(values);
  title.textContent = values.name;
});
