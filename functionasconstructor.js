let Employee=(name="Rajesh",city="Bikaner",mobile="9251435299")=>{
    this.name = name;
    this.city = city;
    this.mobile = mobile;
}
// function Employee(name="Rajesh",city="Bikaner",mobile="9251435299"){
//     this.name = name;
//     this.city = city;
//     this.mobile = mobile;
// }
// let Employee=function (name="Rajesh"){
//     this.name = name;
//     this.city = "Bikaner";
//     this.mobile = '9251435299';
// }
e1 = new Employee();
console.log(e1);
e2 = new Employee("Vikas");
console.log(e2);
e3 = new Employee("Hemant",'Jaipur','66655533');
console.log(e3);