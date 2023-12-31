// ES6

// class User {
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }

// }

// const chai = new User("chai", "chai@gmail.com", "123")

// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());

// behind the scene

// function User(username, email, password){
//     this.username = username;
//     this.email = email;
//     this.password = password;
// }

// User.prototype.encryptPassword = function(){
//     return `${this.password}abc`
// }
// User.prototype.changeUsername = function(){
//     return `${this.username.toUpperCase()}`
// }


// const tea = new User("tea", "tea@gmail.com", "123")

// console.log(tea.encryptPassword());
// console.log(tea.changeUsername());

// super keyword
// class user{
//     constructor(username){
//         this.username=username;
//     }
//     logme(){
//         console.log(`username is ${this.username}`);
//     }
// }
// class teacher extends user{
//     constructor(username,email,password){
//         super(username);
//         this.email=email;
//         this.password=password;

//     }
//     adcourse(){
//         console.log(`a new course was added in this ${this.username}`)
//     }
// }
// const chai=new teacher("chai","c@gmail.com","123");
// chai.logme();
// chai.adcourse()

// class User {
//     constructor(username){
//         this.username = username
//     }

//     logMe(){
//         console.log(`Username: ${this.username}`);
//     }

//     static createId(){
//         return `123`
//     }
// }

// const hitesh = new User("hitesh")
// console.log(hitesh.createId())

// class Teacher extends User {
//     constructor(username, email){
//         super(username)
//         this.email = email
//     }
// }

// const iphone = new Teacher("iphone", "i@phone.com")
// console.log(iphone.createId());

// let pi = Math.PI
// console.log(pi);
// Math.PI=5
// console.log(Math.PI)
// const descripter=Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(descripter);
const chai={
    name:'ginger chai',
    price:350,
    isavailable:true,
    orderchai: function(){
        console.log("hello world");
    }
}
console.log(Object.getOwnPropertyDescriptor(chai,"name"));
Object.defineProperty(chai,'name',{
    writable:false,
    enumerable:false,
}
)
console.log(Object.getOwnPropertyDescriptor(chai,"name"));
for(let [key,value] of Object.entries(chai)){
    if(typeof value!=='function'){
        console.log(`${key} : ${value}`);
    }
}