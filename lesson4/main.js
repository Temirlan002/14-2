const blocks = document.getElementsByClassName("block");
// console.log(blocks)

const block3 = document.getElementById("block3")
// console.log(block3)
//
// block3.className = "changedClass"
// console.log(block3.classList)
//

// block3.classList.add("hello")
// block3.classList.remove("block")
// console.log(block3.classList)

// block3.onclick = () => {
//     block3.classList.toggle("active")
// }

// const block = document.querySelector('.block')
//
//
// console.log(block)


const button = document.getElementById("button");
const input = document.getElementById('input');

button.onclick = () =>  {
    const div = document.createElement("div");const deleteButton = document.createElement('button')
    deleteButton.innerText = "delete"
    deleteButton.onclick = (e) => {
        e.path[1].remove()
    }
    div.setAttribute('class', 'block')
    div.innerText = input.value;
    div.append(deleteButton)
    document.body.append(div)
    input.value = "";
}


// button.onclick = (event) => {
//     console.log(event)
//
// }
//
// input.onchange = (event) => {
//     console.log(event)
// }