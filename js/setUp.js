function graphIt() {

  function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires;
  }

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

  var currentcookies = document.cookie;

  var xAxisName = getCookie("xUnitsName");
  var yAxisName = getCookie("yUnitsName");
  var yAxisTotal = getCookie("yUnitsTotal");
  var xNodeName = document.getElementById("xName");
  var yNodeName = document.getElementById("yName");
  var yNodeTotal = document.getElementById("yTotal");
  var xNameText = document.createTextNode(xAxisName);
  var yNameText = document.createTextNode(yAxisName);
  var yTotalText = document.createTextNode(yAxisTotal);


  xNodeName.appendChild(xNameText);
  yNodeName.appendChild(yNameText);
  yNodeTotal.appendChild(yTotalText);

  for (var q = 1; q < (yAxisTotal - (-1)); q++) {
    var iBox = document.createElement("div");
    var iBoxClass = document.createAttribute("class");
    iBoxClass.value = "inputBox";
    iBox.setAttributeNode(iBoxClass);
    document.getElementById('gfInner').appendChild(iBox);

    var iLabel = document.createElement("label");
    var iLabelText = document.createTextNode(q);
    iLabel.appendChild(iLabelText);

    iBox.appendChild(iLabel);

    var iBoxInput = document.createElement("input");
    var iBoxInputId = document.createAttribute("id");
    iBoxInputId.value = "input" + q;
    iBoxInput.setAttributeNode(iBoxInputId);
    iBox.appendChild(iBoxInput);
  }

  function myFunction(e){

    e.preventDefault();

    for (var v = 1; v < (yAxisTotal - (-1)); v++) {
      var xUnit = document.getElementById("input" + v).value;
      var xUnit
      setCookie("xUnit" + v, xUnit);
    }

    setTimeout(function(){
      window.location = ("http://localhost/Remlik_Apps/x_and_y/results.html");
    }, 200);
  }

  document.getElementById("submitData").addEventListener("click", myFunction);

}//graphIt

window.addEventListener("load", graphIt);
