// many task excute at a time is called concurrancy
// CALLBACK(when call then initial function call)
// function doSomething(callback){
//     callback();
// }
// function sayHi(){
//     console.log("Hi!");
// }
// function judge(grade){
//     switch(true){
//         case grade === "A":
//             console.log("Excellent!");
//             break;
//         case grade === "B":
//             console.log("Good job!");
//             break;
//         case grade === "C":
//             console.log("Well done!");
//             break;
//         case grade === "D":
//             console.log("You passed!");
            // break;
//         case grade === "F":
//             console.log("Better luck next time!");
//             break;
//         default:
//             console.log("Invalid grade.");
//     }
// }
// function getGrade(score,callback){
//     let grade;
//     switch(true){
//         case score>=90:
//             grade="A";
//             break;
//         case score>=80:
//             grade="B";
//             break;
//         case score>=70:
//             grade="C";
//             break;
//         case score>=60:
//             grade="D";
//             break;
//         case score<60:
//             grade="F";
//             break;
//         default:
//             console.log("Invalid score.");
//     }
//     callback(grade);
// }
// getGrade(85,judge);
//   PROMISES (this need to two paarameter both the parameter is callback first is rsolve and reject)
// when resolve is called the promises is persumed to be succesfull and whatever is between the arrows  is return and used as input for then method on the promis object if reject is called  


// let promise = new Promise (function (resolve, reject){
//     let x = 10;
//     if(x>10){
//         resolve(x);

//     }
//     else{
//         reject("Too low");
//     }
// });
// promise.then(
//     function(value) {
//         console.log("success:", value);
//     },
//     function(error){
//         console.log("Error:", error);
//     }
// );

// const promise = new Promise((resolve, reject) => {
//     // resolve("succes!");
//     reject("unseccuss")
// })
// .then(value =>{
//     console.log(value);
//     return "we";
// })
// .then(value =>{
//     console.log(value);
//     return "can";
// })
// .then(value =>{
//     console.log(value);
//     return "chain";
// })
// .then(value =>{
//     console.log(value);
//     return "promise";
// })
// .then(value =>{
//     console.log(value);
// })
// .catch(value => {
//     console.log(value);
// })

// ASYNCS AND AWAIT(aysnc means promises either resolve or reject)
function say(x){
    return new Promise(resolve => {
        setTimeout(() =>{
            resolve("something" + x);
        }, 2000);
    });
}
async function talk(x) {
    const words = await say(x);
    console.log(words);
}
talk(2);
talk(4);
talk(8);