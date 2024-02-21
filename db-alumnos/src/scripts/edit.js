import { jedis } from "../db";
import { updateList } from "./read";

export const handleEdit = (event) => {
  const index = event.dataset.index;
  const tempUser = jedis[index];

  console.log(tempUser);

  updateList();
};
