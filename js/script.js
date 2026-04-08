function init(){
//add your javascrip between these two lines of code
  var button = document.getElementById("entrybutton");
  var usrInput = document.getelementById("entryinput");
  var output = document.getElementById("textoutput");

  button.addEventListener("click", function() {
    var usrText= usrInput.value;
    alert("Juan Garcia: " + usrText);
    output.textContent = usrText;
  });




}
window.addEventListener('load', init);
