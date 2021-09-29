async function getNames() {
    let url = 'names.json';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

// ----------------------------------------------------------------------------------------------------------------------------

async function renderNames() {
    inputChar= document.getElementById("inputchar1").value
    let names = await getNames();
    let namesList=names;
    

const beginWithChar = namesList.filter((name) => name.toLowerCase().startsWith(inputChar));
const screen=document.getElementById("display");

while (screen.hasChildNodes()) {
    screen.removeChild(screen.lastChild);
  }

for (selectedName of beginWithChar){

    namenode=document.createElement("li")
    namenode.classList.add(beginWithChar.indexOf(selectedName))
    
    namenode.innerText=selectedName
    screen.appendChild(namenode)
    

}

if(inputChar==""){
    screen.innerText=""
        
}

}



//---------------------------------------------------------------------------------------------------------------------------




// deleting the searchbar value and emptying the display

let searchBar= document.getElementById("inputchar1");
let ul=document.getElementById("display");
var myli= ul.getElementsByTagName('ul');
var listElem = ul.getElementsByTagName("li");
let count=-1;


window.addEventListener("keydown", button => {
        
    searchBar.focus()
    
    
    
    if (button.key === "Escape") {
        searchBar.value = "";
        display.innerHTML=""
        }

    
    
    if(button.key ==="ArrowDown" ){
        searchBar.blur();
        count++
        
        select(listElem); 
        
        

    }

    else if (button.key == "ArrowUp") {

        searchBar.blur();
        count--;
        select(listElem);
        } 

        
    //_------------------------------------------------------------------------

    function select(selected) {
        if (!selected) return false;
        unselect(selected);
        if (count >= selected.length) count = 0;
        if (count < 0) count = (selected.length - 1);
        
        selected[count].classList.add("selected");
        }
    //---------------------------------------------------------------------------

    function unselect(selected) {
        for (var i = 0; i < selected.length; i++) {
            selected[i].classList.remove("selected");
        }
        }

});

    



   















  

  












