// var string1="this is a string"
// console.log(string1)
// let employee={
//     name:"harry",
//     age:37,
//     channel:"cwh"

// 


// }
// console.log(employee);
// console.log(employee.name.length);
// names=employee.name.sort;

// console.log(names)
// let i=5
// do{
//     console.log("hello");
//     i--;


// }while(i>0);

    
// for in loop  []

// let animal ={
//     name:"jay",
//     age:19,
    


// };
// for(let key in animal){
// console.log(key,animal[key])
// }
// console.log(animal.name)
// console.log(animal.age )

// let names=["rahul","jay","ishita","hello"]
// for(let index in names){
//     console.log(index,names[index])
// }
// // for of loop
// for(let name of names){
//     console.log(name)
// }

// let value=true;
// switch(typeof value){
//    case "number":
//     console.log("heloo")
//     break;
//    case "string":
//     console.log("string")
//     break;
// default:
//     console.log("jay");
// }
// let day=3;
// switch(day){
//     case 3:
//         console.log("sunday");
//         break;
//     default:
//         console.log("monday")
    
    
// }
// function jay(hand,mouth,leg){
// let jay1=hand +" hand " + mouth + " mouth "  + leg + " leg ";
// return jay1;

// }
// let c=jay(2,3,4);
// console.log(c)


// let a=5;
// let b='5';
// if(a==b){
//     console.log("true");
// }
// if(a===b){
//     console.log("===")
// }

// use of map 
// const a = ["Hydrogen", "Helium", "Lithium", "Beryllium"];
 
// const a2 = a.map(function (i) {
//     return i.length;
// });
 
// console.log("Normal way ", a2); // [8, 6, 7, 9]
 
// const a3 = a.map((s) => s.length);
 
// console.log("Using Arrow Function ", a3)

// arrow function
// let greet =()=>{
//     console.log("hello")
// }
// greet()

// setTimeout(() => {
//     console.log("we are coders");
// }, 1000);

// let sum2=(a,b)=>{
//     return a+b;
// }
// let c=sum2(3,5)
// console.log(c);
// let obj1={
//     greeting:"good mornign",
//     names:["harry","rohan","jay","ishita"],
//     speak(){
//         this.names.forEach((studet)=>{
//             console.log( this.greeting + "hello "+ studet );
//         })
//     }

// }
// obj1.speak();

// let arr=[4,6,3,6,9,1]
// let c=arr.sort()
// console.log(c)

// let array=[2,4,6,3,2,6,8];
// let c=array.reverse()
// array.push(0)
// array.pop()
// array.unshift(20)
// array.shift()
// console.log(array);
// console.log(array.includes(4));
// console.log(array.indexOf(8))
// console.log("A ",array);
// console.log(array.slice(0,4));
// // array not changed 
// console.log(array);
// console.log(array.splice(1,4))
// // array will be changed 
// console.log(array);


// objects literals
// const mysym=Symbol("key1")
// const jsuser={
//     name:"hitesh",
//     [mysym]:"$",
//     age :49,
//     location:"Helo",
//     email:"eu",
//     islogged:false,
// }
// console.log(jsuser.email);
// console.log(jsuser[mysym]);
// console.log(typeof mysym)
// jsuser.email="jay@gmail.com"
// console.log(jsuser)
// Object.freeze(jsuser)
// // no changing now
// jsuser.email="jay4@gmail.com"
// console.log(jsuser)
// jsuser.greeting=function(){
//     console.log(`hello ${this.name}`);
// }
// console.log(jsuser.greeting());
// const ti=new Object()
// console.log(ti);
// const tin ={}
// tin.id="123jgfnj"
// tin.name="jay"
// console.log(Object.keys(tin));
// console.log(Object.values(tin))
// console.log(tin.hasOwnProperty('name'))
//  const reg ={
//     email:"jay@gmail.com",
//     fullname:{
//         user:{
//             fn:"jay",
//             ln:"gupta"
//         }
//     }
//  }
//  console.log(reg.fullname?.user.fn)
// const obj1={ 1:"a",2:"b"}
// const obj2={ 3:"a",4:"b"}
// // const obj3={ obj1,obj2}
// // const obj3= Object.assign(obj1,obj2)
// // object assing for concatinate 
// const obj3={...obj1,...obj2}
// console.log(obj3);

// const users=[
//     {
//         id:1,
//         email:"jay@gmail.com"
//     },
//     {
//         id:2,
//         email:"jay2@gmail.com"
//     },
//     {
//         id:3,
//         email:"ja3@gmail.com"
//     },
//     {
//         id:4,
//         email:"jay4@gmail.com"
//     },
//     {
//         id:5,
//         email:"jay5@gmail.com"
//     },
// ]
// console.log(users[0].id)

// Object structure and JSON API

// const course ={
//     coursename: "js in hindi",
//     price:"999",
//     courseIn:"hitesh"
// }
// // console.log(course.courseIn)
// const {coursename:c}=course
// // destructure of object
// console.log(c);

// const coding=["js","ruby","hello"]
// const value=coding.forEach((item)=>{
//     console.log(item + "s");


// })

// const number =[1,2,5,3,5,6,7,8,9]
//  //const newnum=number.filter( (num)=>num>=5 )
// const newnum=number.filter( (num)=>{
//     return num>=5 })
//  console.log(newnum);
// const numb=[]
// number.forEach((num)=>{
//     if(num>4){
//         numb.push(num)
//     }
// });
// console.log(numb)

// console.log(numb)
// let userbooks =books.filter((bk)=>bk.publish>=1995 && bk.genre ==="history")

// const num=[1,2,3,4,5,6,7,8,9]
// // let newnum=num.map((n)=>n<6)
// let newnum=num.map((n)=>n*10).map((n)=>n+1).filter((n)=>n>40)
// console.log(newnum)
// const mynums=[1,2,3,4]
// let mytotal=mynums.reduce((acc,curr)=> acc+curr,0)
// let mytotal=mynums.reduce(function(acc,currval){
//     console.log(`acc:${acc} and currval:${currval}`)
//     return acc+currval
// },0)
// console.log(mytotal);
// const shoppingcart=[
//     {
//         itemname:"js",
//         price:5999
//     },
//     {
//         itemname:"py",
//         price:999
//     },
//     {
//         itemname:"mo",
//         price:599
//     },

//     {
//         itemname:"ds",
//         price:59
//     },

// ]
// let priceto=shoppingcart.reduce((acc,item)=>(acc+item.price),0)
// console.log(priceto);

//    for( var i=0;i<3;i++){
//     setTimeout(() =>{
//         console.log(i);

//     },100);
//    }

// class car{
//     constructor(name,year){
//         this.name=name
//         this.year=year;
//         console.log(year)
//     }
//     age(x){
//         return x  ;

//     }
// }
// const date=new Date()
// let year=date.getFullYear();
// const mycar1=new car("jay",20)

// console.log(mycar1.name)

// console.log(mycar1.age(year))

// NEW keyword
// function createuser(username ,score){
//     this.username=username;
//     this.score=score;

// }
// createuser.prototype.increment = function(){
//     this.score;

// }
// createuser.prototype.printme=function(){
//     console.log(`price is ${this.score}`);
// }
// const jay = new createuser("jaygupta",10);
// const gupta = new createuser("surajgupta",20);
// jay.printme();
// gupta.printme();
// console.log(jay===gupta);


// prototype
// let myhero=["spidy","thor"]
// let heropower={
//     thor:"hammer",
//     spidy:"sling",
//     getspidypower:function(){
//         console.log(`spidy power is ${this.spidy}`);
//     }
// }   
// Object.prototype.hitesh=function(){
//     console.log(`hitesh is present is all objects`);
// } 
// Array.prototype.heyjay=function(){
//     console.log(`hitesh says hello`);
// }
// heropower.hitesh();
// // heropower.heyjay(); this is a array type but heropower is a object type
// myhero.hitesh();
// myhero.heyjay();
// heropower. getspidypower();
// // let username="jaygupta    "
// String.prototype.truelength=function(){
//     console.log(`${this}`);
//     console.log(`truelength is ${this.trim().length}`);
// }
// username.truelength()
// "jaguptahjhkjh    ".truelength()

// let name="jaygupta   ";
// console.log(name.trim().length)
// const User = {
//     name: "chai",
//     email: "chai@google.com"
// }

// const Teacher = {
//     makeVideo: true
// }

// const TeachingSupport = {
//     isAvailable: false
// }

// const TASupport = {
//     makeAssignment: 'JS assignment',
//     fullTime: true,
    
// }



// // // modern syntax
// Object.setPrototypeOf(TeachingSupport, Teacher)
// console.log(TeachingSupport);


// caLL KEYWORD 
// function setuser(username){
//     this.username=username;
//     console.log("called");
// } 
// function createuser(username,email,password){
//     setuser.call(this,username);
//     this.email=email;
//     this.password=password;
// } 
// const chai=new createuser('chai',"chai@google.com","123")
// console.log(chai)

// let promise = new Promise(function (resolve, reject) {
//     const x = "geeksforgeeks";
//     const y = "hgeeksforgeeks"
//     if (x === y) {
//         resolve();
//     } else {
//         reject();
//     }
// });
 
// promise.
//     then(function () {
//         console.log('Success, You are a GEEK');
//     }).
//     catch(function () {
//         console.log('Some error has occurred');
//     });