const People = [
  {
    name: "Aang",
    age: "12",
    status: "Bender",
  },
  {
    name: "Katara",
    age: "16",
    status: "Bender",
  },
  {
    name: "Zuko",
    age: "16",
    status: "Bender",
  },
];

// console.log(People[1]["name"]);

const double = (x) => x * 2;
const triple = (x) => x * 3;
const Demo = (x, callbackFn) => {
  // x = 5;
  x = callbackFn(x);
  return x;
};

console.log(Demo(5, triple));
