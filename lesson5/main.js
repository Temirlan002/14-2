//
// const a = "hello";
// let b;
// console.log(b)
//
//
//
// var c = 5 // глобальная облась видимости очень низка
// console.log(c)
// c = "hello"


// string expression - интерполяция строк

// const first_name = "Jack";
// const last_name = "Barbaro";
//
// console.log(first_name + " " + last_name);
//
// console.log(`First Name: ${first_name} ${last_name}`);

// const getFullName = (user) => {
//     // return "First Name: " + user.first_name + "\n" + "Last Name: " + user.last_name;
//     return `First Name: ${user.first_name}\nLast Name: ${user.last_name}`
// }
//
// const user = {
//     first_name: 'Emir',
//     last_name: 'Shegol'
// }
//
// console.log(getFullName(user));

//spread operator

const mass = [1,2,3,4,5]
const mass2 = [...mass];

// for(let i = 0; i < mass.length; i++){
//     mass2.push(mass[i])
// }
// console.log(mass2)
//
// const obj = {
//     username: 'Emir',
//     age: 16,
//     last_name: "Zhumanov",
//     full_name: 'Emir Zhumanov'
// }
//
// const obj2 = [{...obj}]
// console.log(obj2)

// деструктуризация

const props = {
    onSubmit: () => {
        console.log("Submit")
    },
    data: [
        {
            key: 'value'
        },
        {
            key2: 'value2'
        },
        {
            key3: 'value3'
        },
    ]
}

const {data, onSubmit} = props //  из ключей создаем переменную

console.log(data)

onSubmit()
