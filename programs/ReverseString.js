let str = "hello world welcome";
function reverseString(str){
     return str.split(" ").reverse().join(" ");
}
let newStr = reverseString(str);
console.log(newStr);