// let some:unknown;
// some = 'Text';
// let str: string;
// str = some;

let some: unknown;
some = "Text";
let str: string;

if (typeof some === "string") {
  str = some;
} else {
  console.log("Type err");
}

export {};
