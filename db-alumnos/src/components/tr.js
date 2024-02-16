import { avatarC } from "./avatar";
import { photoC } from "./photo";

export const trC = ({ name, age, team, role, photo }) => {
  return `
  <tr class="hover:bg-gray-50">
    <th class="flex items-center gap-3 px-6 py-4 font-normal text-gray-900">
      <div class="relative h-10 w-10">
        ${photo ? photoC({ name, photo }) : avatarC({ name })}
        <span
          class="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"
        ></span>
      </div>
      <div class="text-sm">
        <div class="font-medium text-gray-700">${name}</div>
      </div>
    </th>
    <td class="px-6 py-4">
      <span
        class="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600"
      >
        <span class="h-1.5 w-1.5 rounded-full bg-green-600"></span>
        ${age}
      </span>
    </td>
    <td class="px-6 py-4">${role}</td>
    <td class="px-6 py-4">
      <div class="flex gap-2">
        <span
          class="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600"
        >
          ${team}
        </span>
        <span
          class="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600"
        >
          Product
        </span>
        <span
          class="inline-flex items-center gap-1 rounded-full bg-violet-50 px-2 py-1 text-xs font-semibold text-violet-600"
        >
          Develop
        </span>
      </div>
    </td>
    <td class="px-6 py-4">
      <div class="flex justify-end gap-4">
        <a class="h-6 w-6" x-data="{ tooltip: 'Edite' }" href="#">
          <img src="./edit.svg" alt="icon-edit">
        </a>
        <a class="h-6 w-6" x-data="{ tooltip: 'Delete' }" href="#">
          <img src="./delete.svg" alt="icon-delete">
        </a>
      </div>
    </td>
  </tr>`;
};
