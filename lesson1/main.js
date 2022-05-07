const a = "a" //string

const b = 20 // number

const bool = true; // boolean
const bool2 = false;

// console.log(typeof bool)

const obj = {
    key: "value",
    username: "Alex",
    data: {
        first_name: "Jack",
        last_name: "Barbaro"
    }
}

// console.log(obj.data.first_name)
// console.log(obj.data)

const arr = []

// console.log(arr[1])

const arr2 = [
    {
        key: "value"
    },
    {
        key: "value"
    },
    {
        key: "value3"
    }
]
// console.log(arr2[2].key)

// const name = alert("Вам запрещено")
// console.log("Hello " + name)

const first_number = prompt("Введите число");
const last_number = prompt("Введите второе число");

if(first_number > last_number){
    console.log(first_number + ">" + last_number)
} else if(first_number < last_number){
    console.log(first_number + "<" + last_number)
} else {
    console.log(first_number + "=" + last_number)
}