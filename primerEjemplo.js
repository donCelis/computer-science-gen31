// import { cualquierCosa } from "./cualquierArchivo.js"; // ecmascript modules
// const createUser = require("./functions"); // commonjs modules

import createUser, { DEFAULT_USER_NAME } from "./src/functions.js";

const users = [
  {
    name: "Juan",
    age: 25,
    country: "Colombia",
    profession: "Developer",
  },
  {
    name: "Pedro",
    age: 25,
    country: "Colombia",
    profession: "Developer",
  },
  {
    name: "Maria",
    age: 25,
    country: "Colombia",
    profession: "Developer",
  },
  {
    name: "Luisa",
    age: 25,
    country: "Colombia",
    profession: "Developer",
  },
];

function suma() {
  return 1 + 1;
}

const suma1 = (n) => {
  return n * 2;
};

const suma2 = (n1, n2) => n1 + n2;

const example1 = () => 1;
const example2 = () => "";
const example3 = () => true;
const example4 = () => [];
const example5 = () => ({ ...users[0], name: "Juanito" });

const suma3 = (n) => n * 2;

const singleUser = users[0];

const singleUserValues = Object.values(singleUser);
console.log(singleUserValues);

const keysSingleUser = Object.keys(singleUser);
console.log(keysSingleUser);

const entriesSingleUser = Object.entries(singleUser);
console.log(entriesSingleUser);

// Object.freeze(singleUser);
// singleUserCopy.name = "Pedrito";

singleUser.age = 10000;

console.log(Object.getOwnPropertyDescriptors(singleUser));

const objectExample = {
  name: "Juan",
  age: 25,
  country: "Colombia",
  profession: null,
  /* account: "", */
};


createUser(users[3], DEFAULT_USER_NAME);
createUser(users[3], objectExample.profession ?? DEFAULT_USER_NAME);
createUser(users[3], objectExample?.account || 1000);

const { profession, age, country, name } = singleUser;

const fruits = ["Manzana", "Pera", "Banano", "Mango"];
const cloneFruits = [...fruits]; // tipica forma de clonar un arreglo
const [mango, manzana, pera, banano] = fruits;

singleUser.name;
singleUser.age;
singleUser.country;
singleUser.profession;

/* console.log(
  "Bienvenido usuario " +
    singleUser.name +
    " a la clase de JS, tu edad es " +
    singleUser.age +
    " años"
); */
/* console.log(
  `Bienvenido usuario ${name} a la clase de JS, tu edad es ${age} años`
); */

// create template string to html
const template = `
  <div>
    <h1>${singleUser.name}</h1>
    <p>${singleUser.age}</p>
    <p>${singleUser.country}</p>
    <p>${singleUser.profession}</p>
  </div>
`;

// ecmascript modules -> versiones recientes de nodejs
// commonjs modules -> versiones anteriores de nodejs

const cualquierCosa = 'aksjdnaksdjnasd';
const cualquierCosa2 = Symbol('aksjdnaksdjnasd');

const setValue = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);


setValue.add(11);
setValue.delete(1);