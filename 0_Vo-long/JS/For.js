
// for (i =0; i<10; i++) {
//     if(i%2 ==0) {
//         console.log(i)
//     }
// }

// // Giong voi 

// for (i =0; i<10; i+=2) {
//         console.log(i)
// }

// // -========

// for (; ;) {
//     if (i>8) {
//         break;
//     }
//     i+=2;
// }

// // ========

// for (i =0; i<10; i++) {
//     if (i%2 ==0) {
//         continue;
//     }
//     console.log (i);
// }

// // ========


// for (; true ;) {
//     let number = Number(prompt('Enter a number:  '));
//     document.write(number);
//     if (number == 0) {
//         break;
//     }
// }

// // Similar

// number = number(prompt('Enter a number: '))

// for (; number != 0; ) {
//     number = number(prompt('Enter a number: '))
// }


// // ========

let total = 0;

for (i=0; i<10; i++) {
    if (total <6){
        break;
    }
    total+=i 
}

// // Similar

for (let i = 0, total = 0; i<10 && total <= 6; i++, total +=i) {
    console.log(i);

}