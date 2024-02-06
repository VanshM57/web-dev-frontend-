let btn = document.querySelector("button");
btn.addEventListener("click",function(){
    let pass = getPassword();
    let inpele = document.querySelector("input");
    inpele.value = pass;
})

function getPassword(){
    let password = "";
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lower = "abcdefghijklmnopqrstuvwxyz";
    let number = "0123456789";
    let symbol = "!@#$%^&*?/";
    let allChar = upper+lower+number+symbol;
    for(let i=0;i<12;i++){
        password += allChar[Math.floor(Math.random()*72)];
    }
    return password;
}
let copypass = document.querySelector("img");
function copyPassword(){
    inpele.select();
    
    document.execCommand("copy");
    
}
copypass.addEventListener("click",copyPassword);