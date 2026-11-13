/**
 * Question -
 * Create - 
 * const counter = createCounter(); 
 * 
 * It should support:
 * counter.increment();
 * counter.decrement();
 * counter.reset();
 * counter.getValue();
 * 
 * 
 * Example:
 * counter.increment();
 * counter.increment();
 * counter.getValue(); // 2
 * counter.decrement();
 * counter.getValue(); // 1
 * counter.reset();
 * counter.getValue(); // 0
 * 
 * Important requirement - The actual counter value should not be directly accessible.
 * 
 * Dont do this - counter.value = 100;
 *  */ 

// Solutions - 

/** Solution 1 - 
function createCounter(){
    let value = 0;
    function innerCreateCounter(){
        return {
            increment: function(){
                value++;
            },
            decrement: function(){
                value--;
            },
            reset: function(){
                value = 0;
            },
            getValue: function(){
                return value;
            }
        }
    }
    return innerCreateCounter();
}

const counter = createCounter();
counter.increment();
counter.increment();
let a = counter.getValue(); // 2
console.log(a);
counter.decrement();
let b = counter.getValue(); // 1
console.log(b);
counter.reset();
counter.getValue(); // 0

*/

// ---------------------------------------------------------------------------------------------------//

function createCounter(){
    let value = 0;
    
        return {
            increment: function(){
                value++;
            },
            decrement: function(){
                value--;
            },
            reset: function(){
                value = 0;
            },
            getValue: function(){
                return value;
            }
        }
}

const counter = createCounter();
counter.increment();
counter.increment();
let a = counter.getValue(); // 2
console.log(a);
counter.decrement();
let b = counter.getValue(); // 1
console.log(b);
counter.reset();
counter.getValue(); // 0