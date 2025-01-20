// let a = ['a','b','c','d','a','b'];
// let visited=[];
// let count;
// for(let i=0;i<a.length;i++){
//     count = 1;
//     if(visited[i]){
//         continue;
//       }
//     for(let j=i+1;j<a.length;j++){
          
        
//           if(a[i] == a[j]){
//              count++;
//              visited[j] = true;
//           }
//     }
//     console.log(a[i]+" "+count);  
// }


function outer() {
    var b = 2;
    function inner() {
        b++;
        console.log(b);
    }
    inner();
}

outer();