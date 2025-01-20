// let myPromise = new Promise((resolve,reject)=>{
//     let condition = false;
//     if(condition){
//         resolve("completed");
//     }
//     else{
//         reject("failed");
//     }
// })

// myPromise
//   .then((result)=>console.log(result))
//   .catch((error)=>console.log(error));



//we can chain the promise


// let mynewpromise = new Promise((resolve,reject)=>{
//       let data ={name:"Alice"};
//       let condition = false;
//       if(!condition){
//           resolve(data);
//       }
//       else{
//           reject("failed");
//       }
// })

// mynewpromise.then((data)=>{
//     console.log(data)
//     return data.name
// })
// .then((name)=>{
//     console.log(name)
// })
// .catch((error)=>{
//     console.log(error)
// })




//promises using async and await
function fetchData(){
      return new Promise((resolve,reject)=>{
           setTimeout(()=>resolve("data fetched"),2000);
      })
}


async function handleData(){
    try{
          let data =  await fetchData();
          console.log(data);
    }
    catch(error){
         console.log(error);
    }
}

handleData();