console.log("Welcome To CalcMate")

let calculation='';

document.getElementById("btn1").addEventListener("click", ()=>{
    calculation += "1"
    console.log(calculation)
})
document.getElementById("btn2").addEventListener("click", ()=>{
    calculation += "2"
    console.log(calculation)
})
document.getElementById("btn3").addEventListener("click", ()=>{
    calculation += "3"
    console.log(calculation)
})
document.getElementById("btn5").addEventListener("click", ()=>{
    calculation += "4"
    console.log(calculation)
})
document.getElementById("btn6").addEventListener("click", ()=>{
    calculation += "5"
    console.log(calculation)
})
document.getElementById("btn7").addEventListener("click", ()=>{
    calculation += "6"
    console.log(calculation)
})
document.getElementById("btn9").addEventListener("click", ()=>{
    calculation += "7"
    console.log(calculation)
})
document.getElementById("btn10").addEventListener("click", ()=>{
    calculation += "8"
    console.log(calculation)
})
document.getElementById("btn11").addEventListener("click", ()=>{
    calculation += "9"
    console.log(calculation)
})
document.getElementById("btn4").addEventListener("click", ()=>{
    calculation += " + "
    console.log(calculation)
})
document.getElementById("btn8").addEventListener("click", ()=>{
    calculation += " - "
    console.log(calculation)
})
document.getElementById("btn12").addEventListener("click", ()=>{
    calculation += " * "
    console.log(calculation)
})
document.getElementById("btn13").addEventListener("click", ()=>{
    calculation += "0 "
    console.log(calculation)
})
document.getElementById("btn14").addEventListener("click", ()=>{
    calculation += "."
    console.log(calculation)
})
document.getElementById("btn15").addEventListener("click", ()=>{
    calculation = eval(calculation)
    console.log(calculation)
})
document.getElementById("btn16").addEventListener("click", ()=>{
    calculation += " / "
    console.log(calculation)
})
document.getElementById("btn17").addEventListener("click", ()=>{
    calculation = "";
    console.log("Cleared.")
})


