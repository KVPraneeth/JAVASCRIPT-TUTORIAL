// {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     console.log(a); // Output: 10
//     console.log(b); // Output: 20
//     console.log(c); // Output: 30
// }

// console.log(a); // Output: 10
// //console.log(b); // ReferenceError: b is not defined
// //console.log(c); // ReferenceError: c is not defined

//---------------------------------------------------------------

// const a = 10;
// {
//     const a = 20;
//     {
//         console.log(a); // ReferenceError: cannot access 'a' before initialization
//         const a = 30;
//         console.log(a); // Output: 30
//     }
//     console.log(a); // Output: 20
// }
// console.log(a); // Output: 10

// ---------------------------------------------------------------

// let a = 10;
// {
//     let a = 20;
//     {
//         //console.log(a); // ReferenceError: Cannot access 'a' before initialization
//         let a = 30;
//         console.log(a); // Output: 30
//     }
//     console.log(a); // Output: 20
// }
// console.log(a); // Output: 10

// ---------------------------------------------------------------

// let a = 10;
// {
//     var a = 20; // SyntaxError: Identifier 'a' has already been declared
//     console.log(a); // Output: 20
// }
// console.log(a); // Output: 10

// ---------------------------------------------------------------


var a = 10;
{
    let a = 20; 
    console.log(a); // Output: 20
}
console.log(a); // Output: 10