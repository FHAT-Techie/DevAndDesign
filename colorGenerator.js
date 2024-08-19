
let btn = document.querySelector(`#button`)
let firstBox = document.querySelector(`#firstBox`)
let firstP = document.querySelector(`#firstP`)
let secondBox = document.querySelector(`.secondColorBox`)
let secondP = document.querySelector(`#secondP`)
let thirdBox = document.querySelector(`.thirdColorBox`)
let thirdP = document.querySelector(`#thirdP`)

let colorCode = [
    0,1,2,3,4,5,6,7,8,`A`,`B`,`C`,`D`,`E`,`F`,`G`
]

function colorCodePicker(){
    let num = Math.floor(Math.random() * colorCode.length)
    return num
}

function colorCodePickerSec(){
    let num = Math.floor(Math.random() * colorCode.length)
    return num
}
function colorCodePickerThird(){
    let num = Math.floor(Math.random() * colorCode.length)
    return num
}

btn.addEventListener(`click`, function(event){
    let colorCodeGen = `#`
    for (let firstLoop = 0; firstLoop < 6; firstLoop++) {
    colorCodeGen += colorCode[colorCodePicker()]
    }
    firstBox.style.backgroundColor = colorCodeGen
    firstP.textContent = colorCodeGen
     
    let colorCodeGenSec = `#`
    for (let secondLoop = 0; secondLoop < 6; secondLoop++) {
    colorCodeGenSec += colorCode[colorCodePickerSec()]
    }
    secondBox.style.backgroundColor = colorCodeGenSec
    secondP.textContent = colorCodeGenSec

    let colorCodeGenThird = `#`
    for (let thirdLoop = 0; thirdLoop < 6; thirdLoop++) {
    colorCodeGenThird += colorCode[colorCodePickerThird()]
    }
    thirdBox.style.backgroundColor = colorCodeGenThird
    thirdP.textContent = colorCodeGenThird


})