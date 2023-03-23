// function sum () {
//     let total = 0;
//     for (i = 0; i < arguments.length; i++) {
//         total += arguments[i];
//     }
//     return total
// }

function sum (...args) {
    let total = 0;
    args.forEach(arg => {
        total += arg;
    })
    return total;
}


// console.log(sum(1, 2, 3, 4))

Function.prototype.myBind = function (ctx, ...args1) {
    // let args2 = Array.from(arguments).slice(1);
    // console.log(args2)
    let that = this; 
    return function(...args2) {
        // let args = Array.from(arguments)
        that.apply(ctx, [...args1, ...args2]);
    }
}

class Cat {
    constructor(name) {
        this.name = name;
    }

    says(sound, person) {
        console.log(`${this.name} says ${sound} to ${person}!`);
        return true;
    }
}

class Dog {
    constructor(name) {
        this.name = name;
    }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

markov.says.myBind(pavlov, "meow")("Markov");
// Pavlov says meow to Markov!
// true