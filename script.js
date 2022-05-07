// let colorArr = ["#ACDDDE",'#CAF1DE','#E1F8DC', '#FEF8DD','#F7D8BA'];
let colorArr=["white","black","greenyellow","red","blue"]
const body = document.querySelector("body");
const colorCode = document.getElementById("color");

let colorGenerate = ()=>{
    let number = Math.floor(Math.random()*10);
     number >=5? number=9-number:number;
    body.style.backgroundColor=`${colorArr[number]}`;
    colorCode.innerHTML = `${colorArr[number]}`
    if(number===1){
    body.style.color="white";
    }else{
        body.style.color="black";
    }
}

body.addEventListener('click',colorGenerate)
colorGenerate()

