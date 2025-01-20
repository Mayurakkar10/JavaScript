/*Pattern

*
* *
* * *
* * * *
* * * * *

*/

// let rows = 5
// let pattern="";
// for(let i= 1;i<=rows;i++){
//     for(let j=1;j<=i;j++){
//         pattern = pattern+"*";
//     }
//     pattern = pattern+"\n";
// }

// console.log(pattern);

/*Pattern 2

        *
      * *
    * * *
  * * * *
* * * * *
*/

let rows = 5;
let cols = 5;
let pattern = "";
for(let i=1;i<=rows;i++){
    for(let j=1;j<=cols;j++){
         if(j<=5-i){
           pattern = pattern+" ";
         }
         else{
            pattern = pattern+"*";
         }
    }
    pattern = pattern+"\n";
}
console.log(pattern);
/*pattern 3

* * * * *
  * * * *
    * * *
      * *
        *
*/

// let rows = 5;
// let cols = 5;
// let pattern = "";
// for(let i= 1;i<=rows;i++){
//     for(let j=1;j<=cols;j++){

//           if(j>=i){
//           pattern = pattern +"*";
//           }
//           else{
//             pattern = pattern+" ";
//           }
//     }
//     pattern = pattern+"\n";
// }

// console.log(pattern);


// let rows = 5;
// let cols = 5;
// let pattern = "";
// for(let i= 1;i<=rows;i++){
//     for(let j=1;j<=cols;j++){

//           if(j<6-i){
//           pattern = pattern +" ";
//           }
//           else{
//             pattern = pattern+"*";
//           }
//     }
//     pattern = pattern+"\n";
// }

// console.log(pattern);













/*
                 *
               * * * 
             * * * * * 
           * * * * * * * 
         * * * * * * * * *
*/
// let rows = 5;
// let cols = 9;
// let pattern = "";
// for(let i=1;i<=rows;i++){
//    for(let j = 1;j<=cols;j++){
//         if(j>=6-i&&j<=4+i){
//         pattern = pattern+"*";
//         }
//         else{
//             pattern=pattern+" ";
//         }
       
//    }
//    pattern = pattern+"\n";

// }
// console.log(pattern);