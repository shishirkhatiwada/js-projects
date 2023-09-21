const celcius = document.querySelector("#celcius")
const farenheit = document.querySelector("#farenheit")


console.log(celcius,farenheit);
window.addEventListener("load", ()=>{
    celcius.focus()
})
celcius.addEventListener("input",()=>{
    farenheit.value = ((celcius.value *9 )/5 + 32 ).toFixed(2)

    if(!celcius.value) farenheit.value=""
})

farenheit.addEventListener("input",()=>{
    celcius.value = ((farenheit.value - 32 )*5 / 9 ).toFixed(2)

   if(!farenheit.value) celcius.value=""
})