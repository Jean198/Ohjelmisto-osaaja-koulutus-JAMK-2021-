//alert ("connected")
function display_suggestion(char) {
  if (char.length == 0) {
    document.getElementById("display").innerHTML = "";
    return;
  } 
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {

        names=this.responseText.split("\t");
        console.log(names)
        for(i=0; i<names.length;i++){
          document.getElementById("display").innerHTML+=names[i]+"<br>";
        }
      }

    }

    xmlhttp.open("GET", "ajax-suggest.php?q="+char, true);
    xmlhttp.send();
  
}



