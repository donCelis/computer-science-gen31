import { jedis, roleOptions, teamOptions } from "../db";
import { updateList } from "./read";
import { $modal, $modalContainer } from "../main";
import { formC } from "../components/form";

const handleSubmitEdit = (e, index, tempUser) => {
  e.preventDefault();

  const $form = e.target;

  jedis[index] = {
    ...tempUser,
    name: $form.name.value,
    age: $form.age.value,
    role: roleOptions[$form.role.value],
    team: teamOptions[$form.team.value],
  };

  updateList();
  $modal.classList.add("hidden");
  e.target.reset();
};

export const handleEdit = (event) => {
  const index = event.dataset.index;
  const tempUser = jedis[index];

  $modal.classList.remove("hidden");
  $modalContainer.innerHTML = formC({ id: "edit-user" });

  const $form = document.querySelector("#edit-user");

  $form.name.value = tempUser.name;
  $form.age.value = tempUser.age;

  $form.addEventListener("submit", (e) => handleSubmitEdit(e, index, tempUser));
};
