const calculate=(a,b,operation)=>{
    return operation(a,b);
};
const addition =calculate(3,4,function(num1,num2){
    return num1+num2;
});
const substraction=(a,b)=>a-b;
const subs=calculate(4,3,substraction);
    
console.log(addition);
console.log(subs);
