let data = [10, 20, 30, 40];
let specialChar = '*';  

let result = "";  

for (let i = 0; i < data.length; i++) {
    result += data[i];  
    if (i < data.length - 1) { 
        result += specialChar;
    }
}

console.log(result);
