function graphIt() {

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

  function removeCookies() {
     var res = document.cookie;
     var multiple = res.split(";");
     for(var i = 0; i < multiple.length; i++) {
        var key = multiple[i].split("=");
        document.cookie = key[0]+" =; expires = Thu, 01 Jan 1970 00:00:00 UTC";
     }
  }

  var currentcookies = document.cookie;
  console.log(currentcookies);

  var xList = document.getElementsByClassName('xList')[0];
  var xAxisName = getCookie("xUnitsName");
  var xAxisTotal = getCookie("xUnitsTotal");
  var yList = document.getElementsByClassName('yList')[0];
  var yAxisName = getCookie("yUnitsName");
  var yAxisTotal = getCookie("yUnitsTotal");

  // x axis units
  var xAxisNameEl = document.getElementById('xListName');
  var xAxisTextNode = document.createTextNode(xAxisName);
  xAxisNameEl.appendChild(xAxisTextNode);

  //y axis units
  var yAxisNameEl = document.getElementById('yListName');
  var yAxisTextNode = document.createTextNode(yAxisName);
  yAxisNameEl.appendChild(yAxisTextNode);

  for (var s = 1; s < (xAxisTotal - (-1)); s++) {
    //x axis
    var xAxisBox = document.createElement("li");
    var xAxisBoxAtt = document.createAttribute("class");
    xAxisBoxAtt.value = "xListItem" + s + " xListItem";
    var xAxisTxt = document.createElement("span");
    var xAxisTxtNode = document.createTextNode((xAxisTotal - (s - 1)));
    xAxisTxt.appendChild(xAxisTxtNode);
    xAxisBox.setAttributeNode(xAxisBoxAtt);
    xAxisBox.appendChild(xAxisTxt);
    xList.appendChild(xAxisBox);
  }

  for (var t = 1; t < (yAxisTotal - (-1)); t++) {
    //y axis
    var yAxisBox = document.createElement("li");
    var yAxisBoxAtt = document.createAttribute("class");
    var yAxisTxt = document.createElement("span");
    var yAxisTxtNode = document.createTextNode(t);
    var yAxisAmount = document.createElement("span");
    var yAxixAmountNode = document.createTextNode(getCookie("xUnit" + t));
    var yAxisAmountAtt = document.createAttribute("class");
    yAxisTxt.appendChild(yAxisTxtNode);
    yAxisAmount.appendChild(yAxixAmountNode);
    yAxisAmountAtt.value = "amount";
    yAxisAmount.setAttributeNode(yAxisAmountAtt);
    yAxisBoxAtt.value = "yListItem" + t + " yListItem";
    yAxisBox.setAttributeNode(yAxisBoxAtt);
    yAxisBox.appendChild(yAxisAmount);
    yAxisBox.appendChild(yAxisTxt);
    yList.appendChild(yAxisBox);
  }

  var xListHeight = document.getElementsByClassName("xList")[0].offsetHeight;

  // create x units height
  for (var m = 1; m < (xAxisTotal - (-1)); m++) {
    var xNewHeight = Math.round(xListHeight/xAxisTotal);
    document.getElementsByClassName("xListItem" + m)[0].style.height = (100/xAxisTotal) + "%";
  }

  var xListIHeight = document.getElementsByClassName("xListItem")[0].offsetHeight;

  // create y units width and height
  console.log(xListHeight + " " + xAxisTotal);
  for (var n = 1; n < (yAxisTotal - (-1)); n++) {
    var newHeight = Math.round(getCookie("xUnit" + n) * (xListHeight/xAxisTotal));
    document.getElementsByClassName("yListItem" + n)[0].style.height = newHeight + "px";
    document.getElementsByClassName("yListItem" + n)[0].style.width = (100/yAxisTotal) + "%";
  }

  var backButton = document.getElementsByClassName("back")[0];
  backButton.addEventListener("click", removeCookies);

}//graphIt

window.addEventListener("load", graphIt);
