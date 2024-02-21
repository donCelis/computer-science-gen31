import { trC } from "../components/tr";
import { jedis } from "../db";
import { $tbody } from "../main";
import { handleDelete } from "./delete";
import { handleEdit } from "./edit";

export const updateList = (array = jedis) => {
  $tbody.innerHTML = "";

  array.forEach((element, index) => {
    $tbody.innerHTML += trC({ ...element, index });
  });

  const $editButtons = $tbody.querySelectorAll("[data-action='edit']");
  $editButtons.forEach(($button) => {
    $button.addEventListener("click", () => handleEdit($button));
  });

  const $deleteButtons = $tbody.querySelectorAll("[data-action='delete']");
  $deleteButtons.forEach(($button) => {
    $button.addEventListener("click", () => handleDelete($button));
  });
};
