// let animal = {
//     eats: true,
// };

// let rabbit = {
//     jumps: true,
//     __proto__: animal,
// };

// console.log(rabbit.eats); // true
// console.log(rabbit.jumps); // true


// ------------------------------------------------------------------------------//

// let animal = {
//   jumps: null
// };
// let rabbit = {
//   __proto__: animal,
//   jumps: true
// };

// console.log( rabbit.jumps ); // ? (1)

// delete rabbit.jumps;

// console.log( rabbit.jumps ); // ? (2)

// delete animal.jumps;

// console.log( rabbit.jumps ); // ? (3)

//--------------------------------------------------------------------------------//

let head = {
  glasses: 1
};

let table = {
  pen: 3,
  __proto__: head,
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table,
};

let pockets = {
  money: 2000,
  __proto__: bed,
};

//------------------------------------------------------------------------------------//

let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  }
};

let speedy = {
  __proto__: hamster
};

let lazy = {
  __proto__: hamster
};

// This one found the food
speedy.eat("apple");
console.log( speedy.stomach ); // apple

console.log( hamster.stomach ); // apple

// This one also has it, why? fix please.
//console.log( lazy.stomach ); // apple