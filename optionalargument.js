function sum() {
    let sum = 0;
    for (let index in arguments) {
        sum += arguments[index];
    }
    console.log(sum);
    
}
sum(3, 2, 3, 4, 5, 6, 7, 23);
/* 
function fun-name(a=10,b=20) //using set default  value
function fun-name(...args) //using rest operator
function fun-name(){
    arguments // this local variable is object type which automatically contain all arguments passed when function call 
}
*/