function allowDrop(event) {
    event.preventDefault();
    
  }

function drop(event) {
    event.preventDefault();

    var files = event.dataTransfer.files;

    for( var file of files){
        var fileReader = new FileReader();
        if (!file.type.match('image.*')){
            alert("Please drop only images");
        }else{
            fileReader.onload = function(e) {
                var img = document.createElement("img")
                img.src=e.target.result
                img.setAttribute("class","thumbnail" );
                event.target.appendChild(img);
            }
        }
        fileReader.readAsDataURL(file)

    }
}

 