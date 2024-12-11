const x = () => {
    console.log(arguments);
    
};
const y = function(){
    console.log(arguments);
    
};
x(12, 3, 45, 76);
y(12, 3, 45, 76);