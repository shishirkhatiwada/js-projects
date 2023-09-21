const input = document.querySelector("form input")
 counter = document.querySelector("form .count")
 maxlength = input.getAttribute("maxlength")


 input.onkeyup = ()=>{
    counter.innerText = maxlength - input.value.length;
 }