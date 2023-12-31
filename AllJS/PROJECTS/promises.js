// const promiseone=new Promise(function(resolve,reject){
//     setTimeout(function()  {
//         console.log("async task is completed");
//         resolve();
//     },1000 );
// })
// promiseone.then(function(){
//     console.log("promise consumed");

// const { response } = require("express");

// })


// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("async task 2");
//        resolve();
//     },3000)
// }).then(function(){
//     console.log("async 2 resolved");
// })

// const promisethree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({name:"chai",email:"chai@gmail.com"})
//         console.log("hello ")
//     },1000)
// })

// promisethree.then(function(user){
//     console.log(user);
//     console.log(user.email);
//     console.log(user.name);
    

// })
// const promisefour=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = false;
//         if(!error){
//             resolve({username:"jay",password:"123"})
//         }
//         else{
//             reject('ERROR:Something went wrong:')
//         }
//     },1000)
// })
// promisefour
// .then((user) =>{
//     console.log(user);
//     return user.username;
// })
// .then((username)=>{
//     console.log(username);
// })
// .catch(function(error){
//     console.log(error);
// })
// .finally(()=> console.log("the promise has been resolved "))


const promisefive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username:"jay1232",password:"123"})
        }
        else{
            reject('ERROR:JS went wrong:')
        }
    },1000);

});
async function consumepromisefive(){
    try{
   const response= await promisefive
   console.log(response);}
   catch (error){
    console.log(error);
   }
     
}
consumepromisefive()

async function getAllUsers(){
    try {
        const response = await  fetch('https://api.github.com/users/hiteshchoudhary')
        const data =await response.json()
        console.log(data);

        
    } catch (error) {
        console.log(error);
        
    }
}

getAllUsers()

// it is best for requesting


// fetch('https://api.github.com/users/hiteshchoudhary')
// .then((response)=>{
//     return response.json()
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch((error)=>
//  console.log(error));
