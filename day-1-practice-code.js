const prices = [100, 200, 300, 400];

const newPrices = prices.map(price => price + price/10);
console.log(newPrices); // Output: [110, 220, 330, 440]
// ----------------------------------------------------------------
const numbers = [10, 15, 20, 25, 30, 35];

const numebersGreaterThan20 = numbers.filter(number => number > 20);
console.log(numebersGreaterThan20);

// ----------------------------------------------------------------

const expenses = [500, 1200, 300, 800];
const totalExpenses = expenses.reduce((acc, curr) => {
    acc += curr;
    return acc;
}, 0);

console.log(totalExpenses);

// ----------------------------------------------------------------
const users = [
    { name: "A", age: 20 },
    { name: "B", age: 25 },
    { name: "C", age: 30 },
    { name: "D", age: 18 }
];
const userNames = users.filter(user => user.age >= 25);
console.log(userNames);
const userNames2 = userNames.map(user => user.name);
console.log(userNames2);
// In single chain
const finalUserNames = users.filter(user => user.age >= 25).map(user => user.name);
console.log(finalUserNames);

//----------------------------------------------------------------

const employees = [
    { name: "A", department: "IT" },
    { name: "B", department: "HR" },
    { name: "C", department: "IT" },
    { name: "D", department: "Finance" },
    { name: "E", department: "HR" }
];

const departmentEmployees = employees.reduce((acc, curr) =>{
    if(!acc[curr.department]){
        acc[curr.department] = [];
    }
    acc[curr.department].push(curr.name);
    return acc;
},{});

console.log(departmentEmployees);

// ----------------------------------------------------------------

const duplicateUsers = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 1, name: "Alice" },
    { id: 3, name: "Charlie" },
    { id: 2, name: "Bob" }
];// Remove duplicates based on the 'id' property

const uniqueUsers = users.filter(
    (user, index, arr) =>
        index === arr.findIndex(u => u.id === user.id)
);

console.log(uniqueUsers);

// Working - 
// For every user, we find the first position where that user's id appears:
// arr.findIndex(u => u.id === user.id)
// Then we keep the user only if its current index is that first occurrence:
// index === arr.findIndex(...)
// O(n^2) time complexity, but works fine for small arrays.

// Optimized solution using a Set to track seen ids:
const seenIds = new Set();

const uniqueUsers2 = users.filter(user => {
    if (seenIds.has(user.id)) {
        return false;
    }

    seenIds.add(user.id);
    return true;
});
console.log(uniqueUsers2);
