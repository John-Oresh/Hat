console.log("Hello world !!!");

const variable = document.getElementById("cart");
const inputText = document.getElementById("inputText")
const first = document.getElementById("first")
const second = document.getElementById("second")
const third = document.getElementById("third")
const signup = document.getElementById("gitHub")

// variable.addEventListener('click', () => {
//     return alert("Cart is clicked");
// })

const myValue = 0;

first.addEventListener('click', () => {
    const firstValue = first.innerHTML

    inputText.value = Number(inputText.value) + Number(firstValue)
})

second.addEventListener('click', () => {
    const firstValue = second.innerHTML

    inputText.value = Number(inputText.value) + Number(firstValue)
})

third.addEventListener('click', () => {
    const firstValue = third.innerHTML

    inputText.value = Number(inputText.value) + Number(firstValue)
})

signup.addEventListener('click', (event) => {
    const modal = document.getElementById("modal");
    modal.classList.toggle("mystyle");
})



// variable.addEventListener('keypress', (event) => {
//     if (event.key === "Enter") {
//         // Cancel the default action, if needed
//         event.preventDefault();
//         variable.innerHTML = "Loading ..."

//         const firstValue = first.innerHTML

//         inputText.value = Number(inputText.value) + Number(firstValue)

//         // Trigger the button element with a click
//         // document.getElementById("myBtn").click();
//         // return alert("Cart is clicked");
//       } 
// })


