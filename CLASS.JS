// CLASSES AND OBJECT
// class ClassName {
//     Constructor(prop1, prop2) {
//         this.prop1 = prop1;
//         this.prop2 = prop2;
//     }
// }
// let obj = new ClassName("agr1", "arg2");
// console.log(obj.prop1, obj.prop2);

// class Dog {
//     constructor(dogName, weight, color, breed){
//         this.dogName = dogName;
//         this.weight = weight;
//         this.color = color;
//         this.breed = breed;
//     }

// }
// let dog  = new Dog("JavaScript", 2.4, "brown", "chihuahua");
// console.log(dog.dogName, "is a", dog.breed, "and weight", dog.weight, "kg.");


// Classes
// only one constructor(one time initialisation ) is used in a class
// class Person{
//     constructor(firstname, lastname = "Doe"){
//         this.firstname = firstname;
//         this.lastname = lastname;
//         console.log("Hi", p.firstname, p.lastname);

//     }
// }

// METHODS(functiojn on a class are called methods when defining these methods)....... methos is a user defined
// class Person {
//     constructor(firstname, lastname){
//         this.firstname  = firstname;
//         this.lastname = lastname;

//     } 
//     greet(){
//         console.log("Hi there! I am", this.firstname);
//     }
// }
// let p = new Person("make", "van");
// p.greet();

// class Person{
// constructor(firstname, lastname){
//             this.firstname  = firstname;
//             this.lastname = lastname;
    
//         } 
//         greet(){
//             console.log("Hi there! I am", this.firstname);
//         }

//         compliment(name, object) {
//             return "that is a wonderfull" + object + " ," + name;
//         }
//      let compliment = p.compliment("aman", "ht");
//      console.log(compliment);

// PROPERTIES
// class Person{
//     constructor(firstname, lastname){
//                 this.firstname  = firstname;
//                 this.lastname = lastname;
        
//             } 
//         }
//         let p = new Person("aman", "van");
//         console.log("Hi", p.firstname);


// class Person {
//     #firstname;
    // #lastname;
    // constructor(firstname, lastname){
//         this.#firstname = firstname;
//         this.#lastname = lastname;
//     }
// }
// let p = new Person("MOM", "Dad");

// constructor(firstname, lastname){
//     if(firstname.startsWith("M")){
//         this.#firstname = firstname;
//     }
//     else{
//         this.#firstname = "M" +  firstname;
//     }
//     this.#lastname = lastname;
// }
// let p = new Person("Ket", "mom")


// GETTER AND SHETTER METHOD
// class Person {
//     #f;
//     #l;
//     constructor(f, l){
//         this.#f = f;
//         this.#l = l;
//     }

//     get f(){
//         return this.#f;
//     }
//     set f(f){
//         this.#f = f;
//     }
//     get l(){
//         return this.#l;
//     }
//     set l(l){
//         this.#l;
//     }
// }
// let p = new Person("Ket", "mom")
// console.log(p.f);

// Inheritance(resuability) thee types (1) single label  (2) multi lable (3) multiple lable (4) hairarcally label
// class Vehicle {
//     constructor(color, currentSpeed, maxSpeed){
//         this.color = color;
//         this.currentSpeed = currentSpeed;
//         this.maxSpeed = maxSpeed;
        
//     }
//     move(){
//         console.log("Moving at", this.currentSpeed);
//     }
//     accelerate(amount){
//         this.currentSpeed += amount;
//     }
// }

// class Motorcycle extends Vehicle{
//     constructor(color, currentSpeed, maxSpeed,fuel){
//         super(color, currentSpeed, maxSpeed);
//         this.fuel = fuel;
//     }
//     doWheelie(){
//         console.log("Driving");
//     }
// }

// let motor = new Motorcycle("Black",0, 249, "Gas");
// console.log(motor.color);
// motor.accelerate(50);
// motor.move();

// PROTOTYPE(external attribute and method)