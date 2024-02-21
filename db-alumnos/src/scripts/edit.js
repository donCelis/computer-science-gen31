import { jedis, roleOptions, teamOptions } from "../db";
import { updateList } from "./read";
import { $modal, $modalContainer } from "../main";
import { formC } from "../components/form";
import { getFormValues } from "../utils/getFormValues";
import { findIndex } from "../utils/findIndex";

const handleSubmitEdit = (e, index) => {
  e.preventDefault();

  const data = getFormValues(e.target);

  jedis[index] = {
    name: data.name,
    age: data.age,
    role: roleOptions[data.role],
    team: teamOptions[data.team],
  };

  updateList();
  e.target.reset();
  $modal.classList.add("hidden");
};

export const handleEdit = (event) => {
  const index = event.dataset.index;
  const tempUser = jedis[index];

  $modal.classList.remove("hidden");
  $modalContainer.innerHTML = formC({ id: "edit-user" });

  const $form = document.querySelector("#edit-user");

  $form.name.value = tempUser.name;
  $form.age.value = tempUser.age;

  $form.role.value = findIndex({
    array: roleOptions,
    searchString: tempUser.role,
  });
  $form.team.value = findIndex({
    array: teamOptions,
    searchString: tempUser.team,
  });

  $form.addEventListener("submit", (e) => handleSubmitEdit(e, index));
};
