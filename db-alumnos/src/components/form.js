import { roleOptions, teamOptions } from "../db";
import { inputC } from "./input";
import { selectC } from "./select";

export const formC = ({ id }) => {
  const inputs = [
    {
      name: "name",
      type: "text",
      placeholder: "James",
      required: true,
    },
    {
      name: "age",
      type: "number",
      placeholder: "45",
      required: true,
    },
  ];

  const selects = [
    {
      name: "role",
      required: true,
      options: roleOptions,
    },
    {
      name: "team",
      required: true,
      options: teamOptions,
    },
  ];

  return `
  <form class="grid gap-4" id="${id}">
    ${inputs.map((input) => inputC({ ...input })).join("")}
    ${selects.map((select) => selectC({ ...select })).join("")}
    <button
      class="mt-3 w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600"
    >
      Save
    </button>
  </form>
  `;
};
