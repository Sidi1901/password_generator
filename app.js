const upperset ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerset="abcdefghijklmnopqrstuvwxyz"
const numbers="1234567890";
const symbols="$%^&*()@";

const psddisplay=document.getElementById("psddisplay");
const length=document.getElementById("len");
const upperCaseChkd= document.getElementById("upper");
const lowerCaseChkd=document.getElementById("lower");
const numbersChkd=document.getElementById("num");
const symbolsChkd=document.getElementById("sym");


// generate colours of background

function getColor(){
    const randColor=Math.floor(Math.random()*16777215);
    const hexColor="#" + randColor.toString(16);
    document.getElementsByClassName("container")[0].style.backgroundColor=hexColor;
}

// random password

const getElement=(dataset)=>{
    return dataset[Math.floor(Math.random()*dataset.length)];
}

var stringpwd="";
function generatePwd(){

    if(upperCaseChkd.checked){
        stringpwd+=getElement(upperset);
        console.log(stringpwd);
    }

    if(lowerCaseChkd.checked ){
        stringpwd+=getElement(lowerset);
        console.log(stringpwd);
    }

    if(numbersChkd.checked ){
        stringpwd+=getElement(numbers);
        console.log(stringpwd);
    }

    if(symbolsChkd.checked ){
        stringpwd+=getElement(symbols);
        console.log(stringpwd);
    }
    console.log(stringpwd.length);

    if(stringpwd.length<length.value){
        return generatePwd();
    }

    if(stringpwd.length>length.value){
        psddisplay.value=stringpwd.substring(0, length.value);
    }
    else{
        psddisplay.value=stringpwd;
    }
    console.log(psddisplay.value);

}

clearstring=()=>{
    stringpwd="";
}

document.getElementById("btn").addEventListener("click",generatePwd);
document.getElementById("btn").addEventListener("click",getColor);
document.getElementById("btn").addEventListener("click",clearstring);
