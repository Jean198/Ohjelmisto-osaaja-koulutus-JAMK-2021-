
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
    console.log(houses);

    let housesdiv=document.getElementById("houses");

    houses.forEach(house=>{
          var housediv = document.createElement("div"); 
          housediv.className="houseContainer";

          let image=document.createElement("img");
          image.className="houseImage";

          



          let osoite=document.createElement("h3");
              osoite.className="title";

          let size=document.createElement("p");
          
         
          let hinta=document.createElement("p");
              

          let description=document.createElement("p");
              description.className="p.description"

          var osoitetext= document.createTextNode(house.address);
          image.src=house.image;
          var sizetext=document.createTextNode(house.size);
          var hintatext= document.createTextNode(house.price);
          var sizetext=document.createTextNode(house.size);
          var descriptiontext=document.createTextNode(house.description);

          osoite.appendChild(osoitetext);
          size.appendChild(sizetext);
          hinta.appendChild(hintatext);
          description.append(descriptiontext);


          
          
          housediv.appendChild(image)
          housediv.appendChild(osoite)
          housediv.appendChild(size)
          housediv.appendChild(hinta)
          housediv.appendChild(description)

          housesdiv.appendChild(housediv)
    })
   
}
renderHouses();