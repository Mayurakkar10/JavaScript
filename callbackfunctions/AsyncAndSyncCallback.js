
//Synchronous Callback
// function greet(name,callback){
//      console.log("hello "+name);
//      callback();
// }
// function message(){
//     console.log("Good Morning");
// }
// greet("ganesh",message);


//asynchronous callback
console.log("start");
function foo(){
   setTimeout(function(){
       console.log("hello");
   },1000);
}
console.log("End");

foo();





