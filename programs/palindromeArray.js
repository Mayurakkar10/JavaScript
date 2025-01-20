
let a = [1,2,3,2,1];

let flag  = false;
    let start = 0;
    let end = a.length-1;
    while(start<end){
        if(a[start]!== a[end]){
            flag = true;
            break;
        }
        start++;
        end--;
    }

if(flag){
    console.log("not a palidrome");
}
else{
    console.log("palindrome")
}