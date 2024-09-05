// Function to print even and odd numbers from 1 to 20
function printEvenOdd() {
    console.log("Even numbers:");
    for (let i = 1; i <= 10; i++) {
        if (i % 2 === 0) {
            console.log(i);  
        }
    }

    console.log("Odd numbers:");
    for (let i = 1; i <= 10; i++) {
        if (i % 2 !== 0) {
            console.log(i);  
        }
    }
}
printEvenOdd();
