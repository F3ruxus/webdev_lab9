function init(){
//add your javascrip between these two lines of code
  var button = document.getElementById("entrybutton");
  var usrInput = document.getelementById("entryinput");
  var output = document.getElementById("textoutput");

  function handleClick() {
    var usrText = usrInput.value;
    
    alert("Juan Garcia: " + usrText);

    output.textContent = usrText;
  }
  button.addEventListener("click", handleClick);




}
window.addEventListener('load', init);
