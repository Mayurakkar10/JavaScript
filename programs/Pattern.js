// let n = 17
// let newArr=[];
// for(let i=1;i<=n;i++){
//     i<=5?newArr.push(i):newArr.push("*");
// }

// console.log(newArr);
function generatePattern(n) {
    let numRows = Math.floor(n / 6);  // Determine how many rows we will have (6 items per row: 5 numbers and 1 star)
    let count = 1;  // Start the counting from 1

    // Loop to generate the pattern
    for (let i = 0; i < numRows; i++) {
        let numbers = [];
        let stars = [];
        
        // Push numbers for the current row
        for (let j = 0; j < 5; j++) {
            numbers.push(count++);
        }

        // Push stars for the current row
        for (let j = 0; j < 2 * i + 2; j++) {
            stars.push('*');
        }

        // Join the numbers and stars with a space and print the row
        console.log(numbers.join(' ') + ' ' + stars.join(' '));
    }
}

generatePattern(7);
console.log('---');
generatePattern(17);
console.log('---');
generatePattern(27);

