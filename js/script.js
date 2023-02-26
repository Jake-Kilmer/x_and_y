function graphIt() {

  function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires;
  }
  // set getCookie

  function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  // get getCookie

  var currentcookies = document.cookie;
//   console.log(currentcookies);

  // x and y select inputs
  var selectXTotal = document.getElementById('inputXTotal');
  var selectYTotal = document.getElementById('inputYTotal');

  for (var p = 1; p < 31; p++) {
    // creat x option list
    var optionX = document.createElement('option');
    var optionXName = document.createAttribute('name');
    optionXName.value = p;
    var optionXValue = document.createAttribute('value');
    optionXValue.value = p;
    var optionXText = document.createTextNode(p);

    optionX.appendChild(optionXText);
    optionX.setAttributeNode(optionXName);
    optionX.setAttributeNode(optionXValue);
    selectXTotal.appendChild(optionX);

    // create y option list
    var optionY = document.createElement('option');
    var optionYName = document.createAttribute('name');
    optionYName.value = p;
    var optionYValue = document.createAttribute('value');
    optionYValue.value = p;
    var optionYText = document.createTextNode(p);

    optionY.appendChild(optionYText);
    optionY.setAttributeNode(optionYName);
    optionY.setAttributeNode(optionYValue);
    selectYTotal.appendChild(optionY);
  }

  function myFunction(e){

    e.preventDefault();

    var xUnitsName = document.getElementById('inputXUnits').value;
    var yUnitsName = document.getElementById('inputYUnits').value;
    var xUnitsTotal = document.getElementById('inputXTotal').value;
    var yUnitsToal = document.getElementById('inputYTotal').value;

    setCookie("xUnitsName", xUnitsName);
    setCookie("xUnitsTotal", xUnitsTotal);
    setCookie("yUnitsName", yUnitsName);
    setCookie("yUnitsTotal", yUnitsToal);
    
    
    setTimeout(function(){
      window.location = ("./setUp.html");
    }, 200);
  }

  document.getElementById("submitData").addEventListener("click", myFunction);

}//graphIt

window.addEventListener("load", graphIt);
