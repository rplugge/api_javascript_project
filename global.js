var req = new XMLHttpRequest();

req.open("get", "http://localhost:4567/api/assignments");

req.addEventListener("load", function(){
  for (i=0; i < req.response.length; i++) {
    var tab = document.createElement("button")
    tab.setAttribute("class", "tab")
    tab.classList.add(i)
    tab.setAttribute("id", "tab" + i)
    tab.innerHTML = req.response[i].general_info
    
    var container = document.getElementById("TabHeader")

    tab.addEventListener("click", function(){
      var p1 = document.createElement("p")
      p1.innerHTML = req.response[i].github_link
    })
    
    container.appendChild(tab)
  }
})

req.responseType = "json";
req.send();


