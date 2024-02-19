import { jedis } from "../db";
import { updateList } from "./read";

// delete user
export const handleDelete = (event) => {
  const index = event.dataset.index;
  jedis.splice(index, 1);
  updateList();
};
