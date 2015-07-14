var req = new XMLHttpRequest();

req.open("get", "http://localhost:4567/api/assignments");

req.addEventListener("load", function(){
  for (i=0; i < req.response.length; i++) {
    var tab = document.createElement("button")
    tab.setAttribute("class", "tab")
    tab.setAttribute("id", "tab" + i)
    tab.innerHTML = req.response[i].general_info
    
    var container = document.getElementById("TabHeader")
    
    container.appendChild(tab)
  }
})

req.responseType = "json";
req.send();