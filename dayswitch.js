function printDay(day) {
    switch(day) {
        case 1:
            console.log("Monday - Weekday");
            break;
        case 2:
            console.log("Tuesday - Weekday");
            break;
        case 3:
            console.log("Wednesday - Weekday");
            break;
        case 4:
            console.log("Thursday - Weekday");
            break;
        case 5:
            console.log("Friday - Weekday");
            break;
        case 6:
            console.log("Saturday - Weekend");
            break;
        case 7:
            console.log("Sunday - Weekend");
            break;
        default:
            console.log("Invalid input. Please enter a number between 1 and 7.");
    }
}

// Example usage: Enter a number from 1 to 7
let input = 7; 
printDay(input);
