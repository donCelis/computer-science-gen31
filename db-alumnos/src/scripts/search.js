import { jedis } from "../db";
import { updateList } from "./read";

export const handleSearch = (event) => {
  event.preventDefault();
  const valueSerch = event.target.value.toLowerCase().trim();

  const filterJedis = jedis.filter((jedi) =>
    jedi.name.toLowerCase().includes(valueSerch)
  );

  updateList(filterJedis);
};
