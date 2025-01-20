let a = [1,2,3,4,5,6];

let max = a[0];
let secondHighest = a[0];
for (let i=0;i<a.length;i++){
    if(a[i]>max){
        secondHighest = max;
        max = a[i];
    }
    else if(secondHighest>a[i] && secondHighest<max){
        secondHighest = a[i];
    }
}
console.log("max is:"+max);
console.log("second highest is: "+secondHighest)