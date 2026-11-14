/**
Create a function called createBankAccount() that creates and returns a bank account object.
The account should allow users to:
- Deposit money.
- Withdraw money.
- Check the current balance.
The balance must remain private. It should not be directly accessible or modifiable from outside the function.

Your implementation should support the following:
const account = createBankAccount(1000);

// Deposit
account.deposit(500);
console.log(account.getBalance()); // 1500

// Withdraw
account.withdraw(200);
console.log(account.getBalance()); // 1300

// Check balance
console.log(account.getBalance()); // 1300

// Try accessing private balance
console.log(account.balance); // undefined

3. Functional requirements
Method	Requirement - 
- deposit(amount)	Add the specified amount to the balance
- withdraw(amount)	Subtract the specified amount from the balance
- getBalance()	Return the current balance

Validation requirements
Implement these additional rules:
1. Initial balance must not be negative.
2. Deposit amount must be greater than zero.
3. Withdrawal amount must be greater than zero.
4. Withdrawal must not be allowed if the requested amount exceeds the available balance.
5. Invalid operations should not modify the balance.
For invalid operations, you can use console.log() to display an appropriate message.
 */

function createBankAccount(val){
    if(val < 0 || Number.isFinite(val) === false){
        console.log("Negative balance or Invalid argument not allowed");
        return;
    }
    let balance = val;
    return {
        deposit : function(amount){
            if(amount <= 0 || Number.isFinite(amount) === false){
                console.log("Cannot deposit negative, zero amount or invalid amount");
            }
            else{
                balance += amount;
            }
        },
        withdraw : function(amount){
            if(Number.isFinite(amount) === false || amount <= 0 || balance < amount){
                console.log("Invalid Operation!");
            }
            else{
                balance -= amount;
            }
        },
        getBalance: function(){
            return balance;
        },
    }
}