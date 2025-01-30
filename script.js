console.log("Welcome To CalcMate")

let calculation=localStorage.getItem("calculation") || "";

const updateCalculation=(value)=>{
    calculation+=value
    localStorage.setItem('calculation',calculation)
    console.log(calculation)
}

document.getElementById("btn1").addEventListener("click", ()=>{
    updateCalculation("1")
})
document.getElementById("btn2").addEventListener("click", ()=>{
    updateCalculation("2")
})
document.getElementById("btn3").addEventListener("click", ()=>{
    updateCalculation("3")
})
document.getElementById("btn5").addEventListener("click", ()=>{
    updateCalculation("4")
})
document.getElementById("btn6").addEventListener("click", ()=>{
    updateCalculation("5")
})
document.getElementById("btn7").addEventListener("click", ()=>{
    updateCalculation("6")
})
document.getElementById("btn9").addEventListener("click", ()=>{
    updateCalculation("7")
})
document.getElementById("btn10").addEventListener("click", ()=>{
    updateCalculation("8")
})
document.getElementById("btn11").addEventListener("click", ()=>{
    updateCalculation("9")
})
document.getElementById("btn4").addEventListener("click", ()=>{
    updateCalculation(" + ")
})
document.getElementById("btn8").addEventListener("click", ()=>{
    updateCalculation(" - ")
})
document.getElementById("btn12").addEventListener("click", ()=>{
    updateCalculation(" * ")
})
document.getElementById("btn13").addEventListener("click", ()=>{
    updateCalculation("0")
})
document.getElementById("btn14").addEventListener("click", ()=>{
    updateCalculation(".")
})
document.getElementById("btn15").addEventListener("click", ()=>{
    calculation = eval(calculation)
    localStorage.setItem('calculation',calculation)
    console.log(calculation)
})
document.getElementById("btn16").addEventListener("click", ()=>{
    updateCalculation(" / ")
})
document.getElementById("btn17").addEventListener("click", ()=>{
    calculation = "";
    localStorage.setItem('calculation',calculation)
    console.log("Cleared.")
})


