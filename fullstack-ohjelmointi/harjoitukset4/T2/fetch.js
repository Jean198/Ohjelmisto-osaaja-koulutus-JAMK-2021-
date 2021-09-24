
async function getHouses() {
    let url = 'talotiedot.json';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderHouses() {
    let houses = await getHouses();

    let housesdiv=document.getElementById("houses");

   

    houses.forEach(house=>{

          let  housediv = document.createElement("div"); // Creating the visibble house box in grey!
          housediv.className="houseContainer";

          if(house.size>=200){  // adding a class to divs with house size of under 200m2
            
            housediv.classList.add("yli200");

            }

          if(house.price>= 1000000){
              housediv.classList.add("yli1000000")
          }
          

          let image=document.createElement("img");  // creating the image tag
          image.className="houseImage";
          image.src=house.image; 
          housediv.appendChild(image)


          let osoite=document.createElement("h3"); // creating the address 
          let  osoiteNode= document.createTextNode(house.address);
          osoite.appendChild(osoiteNode);
          housediv.appendChild(osoite)

              

          let size=document.createElement("p"); // creating the house size
          let  sizeNode=document.createTextNode(house.size);
          size.appendChild(sizeNode);
          housediv.appendChild(size)
          
         
          let price=document.createElement("p");  // creating the house price
          let  priceNode= document.createTextNode(house.price);
          price.appendChild(priceNode);
          housediv.appendChild(price)
              

          let description=document.createElement("p");  // creating the house description
              description.className="p.description"
          let  descriptionNode=document.createTextNode(house.description);
          description.append(descriptionNode);
          housediv.appendChild(description)


          housesdiv.appendChild(housediv)  // adding the ready house to the document        
          
    })


}

renderHouses();




function showAlle200(){
    let  housesYli200= document.getElementsByClassName("yli200")
    let  checkBox = document.getElementById("size");

    let  housesYli1000000= document.getElementsByClassName("yli1000000");
    let  checkBox1 = document.getElementById("squaremeters");

    

    if ((checkBox.checked == true)&&(checkBox1.checked == false)){  //Showing only houses under 200m2
        for (house of housesYli200){
            house.style.display="none";
        }

    }else {  // when you uncheck, show all houses

        for (house of housesYli200){
            house.style.display="block";
        }

    }


    
    
    
    if((checkBox.checked == false)&&(checkBox1.checked == true)){  //Showing only houses under 1000,000 eur

        for (house of housesYli1000000){
            house.style.display="none";
        }
        
    }else {           // When you uncheck  show all houses and hide houses under over 200 m2

        for (house of housesYli200){
            house.style.display="block";
        }

        for (house of housesYli1000000){
            house.style.display="block";
        }

        for (house of housesYli200){
            house.style.display="none";
        }

}

    

if((checkBox.checked == true)&&(checkBox1.checked == true)){  // show houses under 200 m2 and under 1000,000 eur

        for (house of housesYli200){
            house.style.display="none";
        }

        for (house of housesYli1000000){
            house.style.display="none";
        }
    }

if((checkBox.checked == false)&&(checkBox1.checked == false)){  // show all houses under 200 m2 and under 1000,000 eur

        for (house of housesYli200){
            house.style.display="block";
        }

        for (house of housesYli1000000){
            house.style.display="block";
        }

    }


    

        

    }
    

    
    








    








    




