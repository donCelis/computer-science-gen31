import { jedis, roleOptions, teamOptions } from "../db";
import { updateList } from "./read";
import { $modal, $modalContainer } from "../main";
import { formC } from "../components/form";
import { getFormValues } from "../utils/getFormValues";

const handleSubmitEdit = (e, index, tempUser) => {
  e.preventDefault();

  const data = getFormValues(e.target);

  jedis[index] = {
    ...tempUser,
    name: data.name,
    age: data.age,
    role: roleOptions[data.role],
    team: teamOptions[data.team],
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
