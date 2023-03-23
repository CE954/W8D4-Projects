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


console.log(sum(1, 2, 3, 4))


