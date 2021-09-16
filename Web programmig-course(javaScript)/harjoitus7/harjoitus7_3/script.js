

function drawchart(){

    //alert("connected")
    const canvas=document.getElementById("mycanvas");
    const ctx=canvas.getContext("2d");
    canvas.height = canvas.width;
    var carchart=new Chart(ctx,{
        type:"bar",
        data:{
            labels:["Ford","Opel","Toyota"],
            datasets:[{
                backgroundColor:["red","blue","green"],
                data:[ford,opel,toyota]
            }]
        },
        options:{
            title:"Car Calculator",
        },
    })
}

//-----------------------------------------------------------------------------------------

var ford=0
var opel=0
var toyota=0
function carcounter(car){
    var brand=car.value;
    if (brand=='ford'){
        ford+=0.1;
        
    }
    else if (brand=='opel'){
        opel+=0.1;
    }
    else if (brand=='toyota'){
        toyota+=0.1;
    }

    else{
        ford=0;
        opel=0;
        toyota=0;
    }
    drawchart();

}


//-----------------------------------------------------------------------------------------

function reset(){
    window.location.reload();
}