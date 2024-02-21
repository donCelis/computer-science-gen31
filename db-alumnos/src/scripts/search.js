import { jedis } from "../db";
import { updateList } from "./read";
import { debounce } from "../utils/debounce";

export const handleSearch = (event) => {
  event.preventDefault();
  const valueSerch = event.target.value.toLowerCase().trim();

  const filterJedis = jedis.filter((jedi) =>
    jedi.name.toLowerCase().includes(valueSerch)
  );

  updateList(filterJedis);
};

export const debounceHandleSearch = debounce(handleSearch, 500);
