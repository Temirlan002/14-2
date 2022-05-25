// //es5 es6
// console.log(a)
// const a = 10;
//
// let b = "hello";
//
//
// //es5
// console.log(c)
// var c = 20


//string expression - интерполяция строк

const first_name = "jack";
const last_name = "Barbaro";

// console.log("Full Name: " + first_name + ' ' + last_name) //es5
// console.log(`Full Name: ${first_name} ${last_name}`) //es6

// const getFullName = (user) => {
//     // return "First Name: " + user.first_name + "\n" + "Last Name: " + " " + user.last_name
//     return `First Name: ${user.first_name}\nLast Name: ${user.last_name}`
// }
//
// const user = {
//     first_name: 'John',
//     last_name: 'Barbaro'
// }
// console.log(getFullName(user))

//spread operator

const mass = [1,2,3,4,5]
const mass2 = [...mass]

// for(let i = 0; i < mass.length; i++){
//     mass2.push(mass[i])
// }

console.log(mass2)

const obj = {
    username: "Beka",
    age: 20,
    last_name: "ALiev",
    full_name: "Beka Aliev"
}
const obj2 = {...obj}
console.log(obj2)

// деструктуризация

const props = {
    onSubmit: () => {
        console.log("submit")
    },
    data: [
        {
            key: "value"
        },
        {
            key2: "value2"
        },
        {
            key3: "value3"
        }
    ],
    data2: '20'
}

const {data, onSubmit, data2} = props

console.log(data[2].key3)
console.log(data2)

onSubmit();

console.log(props.data[2].key3) // es5


