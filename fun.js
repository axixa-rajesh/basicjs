function fun1() {
    return "Named function";
}
const fun2 = function () {
    console.log("Anonymous");
      
};
// console.log(typeof fun2);

const fun3 = () => "it's a arrow function and it's default return type!";
const fun4 = () => {
    return "arrow function with body!";
};
const fun5 = name => "hello " + name;
//calling
console.log(fun1());
fun2();
console.log(fun3());
console.log(fun4());
console.log(fun5("Rajesh"));
//IIFE
(function () {
    console.log("anonymous IIFE");
    
})();
console.log((()=>"anonymous arrow IIFE")());