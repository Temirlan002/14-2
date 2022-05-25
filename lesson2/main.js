const array = [
    {
        username: "Jack",
        full_name: "Jack Barbaro"
    },
    {
        username: "Jack",
        full_name: "Jack Barbaro"
    },
    {
        username: "Jack",
        full_name: "Jack Barbaro"
    },
    {
        username: "Jack",
        full_name: "Jack Barbaro"
    },
    {
        username: "Jack",
        full_name: "Jack Barbaro"
    }
]
// for(let i = 0; i < array.length; i++){
//     if(i === 2){
//         break;
//     } else {
//         console.log(array[i])
//     }
// } // индексы

// for(let user of array){
//     console.log(user)
// }

// const obj = {
//     key1: 'b1',
//     key2: 'b2',
//     key3: 'b3',
//     key4: 'b4',
//     key5: 'b5',
//     key6: 'b6',
//     key7: 'b7',
//     key8: 'b8',
//     key9: 'b9',
//     key10: 'b10',
// }
// for(let key in obj){
//     console.log(obj)
// }


// let i = 0;
//
// while(i < 5){
//     console.log("hello")
//     i++
// }

const users = [
    {
        username: "jack",
        salary: 5000
    },
    {
        username: "john",
        salary: 500
    },
    {
        username: "joe",
        salary: 10000
    },
]

const filteredUsers = users.filter(user => user.salary > 500)
console.log(filteredUsers)

// for(let user of users){
//     if(user.salary > 500){
//         console.log(user)
//     }
// }