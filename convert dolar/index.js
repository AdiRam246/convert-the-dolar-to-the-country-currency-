
document.querySelectorAll("button")[0].addEventListener("click",function(){
  var a = document.querySelectorAll("input")[0].value;
  var b = document.getElementById("country").value;
  m (a, b);
});
function m (a, b){
  switch(b)
    {
      case "INDIANRUPEE":
        return document.querySelector("h1").innerHTML= "₹ " + 79.83*a;
        break;
      case "CHINESEYUAN":
       return document.querySelector("h1").innerHTML= "￥ " + 6.94*a;
        break;
      case "RUSSIARUBEL":
        return document.querySelector("h1").innerHTML= " ₽ " + 61.01*a;
        break;
      default:
        alert("warning");
    }
}
document.querySelectorAll("button")[1].addEventListener("click",function()
{   
  document.querySelectorAll("input")[0].value = "";
  document.querySelector("h1").innerHTML="";
});

