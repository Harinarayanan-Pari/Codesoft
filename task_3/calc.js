let buttons = document.querySelectorAll("button");
let output = document.getElementById("output");

output.innerHTML = "" 

function display(num){
    output.innerHTML += num;
}

function calculate(){
    try{
        output.innerHTML = eval(output.innerHTML)
    }
    catch{
        alert("Enter a valid operation")
    }
}

function clr(){
    output.innerHTML = "";
}

function del(){
    output.innerHTML = output.innerHTML.slice(0,-1)
}


