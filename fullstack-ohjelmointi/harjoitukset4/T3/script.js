async function getNames() {
    let url = 'names.json';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}



async function renderNames() {
    inputChar= document.getElementById("inputchar1").value
    let names = await getNames();
    let namesList=names;
    

const startsWithN = namesList.filter((name) => name.toLowerCase().startsWith(inputChar));
const screen=document.getElementById("display");

while (screen.hasChildNodes()) {
    screen.removeChild(screen.lastChild);
  }

for (selectedName of startsWithN){
    namenode=document.createElement("option")
    
    namenode.innerText=selectedName
    screen.appendChild(namenode)
    

}

if(inputChar==""){
    screen.innerText=""
        
}


var keyUp = 38;
var keyDown = 40;





}

document.onkeydown=function (event) {

    displaydiv= document.getElementById("display");

    if (event.keyCode==40){
        console.log("yes")
        displaydiv.style.display=="none"
    }
    
}













