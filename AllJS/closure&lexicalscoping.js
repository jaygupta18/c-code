// lexical scoping- a function inside a function called lexical scoping
function outer(){
    let username="hitesh ";
    function inner(){
        let secret="12345"
        console.log("inner ",username);
        console.log(secret)
    }
    function innertwo(){
        console.log("innertwo ",username)
        // console.log(secret);
    }
    inner();
    innertwo();
    console.log(username);
}
outer();
// console.log(" to outer",username);

// closure =