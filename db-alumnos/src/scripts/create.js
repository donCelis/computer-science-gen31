import { jedis, roleOptions, teamOptions } from "../db";
import { $modal } from "../main";
import { getFormValues } from "../utils/getFormValues";
import { updateList } from "./read";

// create user
export const handleSubmit = (e) => {
  e.preventDefault();

  const tmpUser = getFormValues(e.target);
  const newUser = {
    ...tmpUser,
    role: roleOptions[tmpUser.role],
    team: teamOptions[tmpUser.team],
  };

  const tempJejis = [...jedis, newUser];

  updateList(tempJejis);

  e.target.reset();
  $modal.classList.add("hidden");
};
