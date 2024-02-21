import { trC } from "../components/tr";
import { jedis, titles } from "../db";
import { $tbody } from "../main";
import { handleDelete } from "./delete";
import { handleEdit } from "./edit";

export const updateList = (array = jedis) => {
  $tbody.innerHTML = "";

  if (!array.length) {
    $tbody.innerHTML = `
      <tr>
        <td colspan="${titles.length}"><p class="text-center py-2">No hay usuarios <p/></td>
      </tr>
    `;
    return;
  }

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
