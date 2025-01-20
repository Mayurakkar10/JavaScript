let str = "aba";

let start = 0;
let end = str.length - 1;
let flag = false;
while (start < end) {
  if (str.charAt(start) != str.charAt(end)) {
    flag = true;
    break;
  }
  start++;
  end--;
}

if (flag) {
  console.log("not a palindrome string");
} else {
  console.log("palindrome string");
}
