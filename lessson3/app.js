// function sayHello() {
//     console.log("Hello")
// }
//
// sayHello();

// function getFullName(user, age) {
//     if(age < 18){
//         console.log("CLOSE!")
//     }else {
//         console.log(blabla.first_name + " " + "OPEN!")
//     }
// }
//
// const blabla = {
//     first_name: "John",
//     last_name: "Barbaro"
// }
//
// getFullName(blabla, 34);

// function numbers(number1, number2) {
//     if(number1 > number2){
//         console.log("Первое больше")
//     }else if(number1 < number2){
//         console.log("Второе больше")
//     } else{
//         console.log("Они равны")
//     }
// }
//
//
// const number1 = 13
// const number2 = 11
//
// numbers(343, 343)

function twoMass(arr1, arr2) {
    console.log(arr1, arr2)
    if(arr1.length > arr2.length){
        console.log("arr > arr2")
    } else if(arr1.length < arr2.length){
        console.log("arr < arr2")
    } else {
        console.log("arr === arr2")
    }

}


const arr1 = [132, 4, 1, 43]
const arr2 = [243, 554, 5643, 343, 343]

// twoMass(arr1, arr2);

function f() {
    for(let n=1; n < 100; n++){
        if(n % 15 === 0 ){
            console.log("FizzBuzz")
        }else if(n % 5 === 0){
            console.log("Buzz")
        }else if(n % 3 === 0){
            console.log("Fizz")
        } else {
            console.log(n)
        }
    }
}
f();