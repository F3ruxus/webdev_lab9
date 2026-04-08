function init(){
//add your javascrip between these two lines of code
  var button = document.getElementById('entrybutton');

  function handleClick() {
    var usrInput = document.getElementById('entryinput');
    document.getElementById('textoutput').innerHTML = usrInput.value;
    
    alert("Juan Garcia: " + usrInput.value);
  }
  button.addEventListener("click", handleClick);




}
window.addEventListener('load', init);
