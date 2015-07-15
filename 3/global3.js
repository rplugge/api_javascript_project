var req = new XMLHttpRequest();
var req2 = new XMLHttpRequest();

req.open("get", "http://localhost:4567/api/assignments");
req.addEventListener("load", function(){
  for (i=0; i < req.response.length; i++) {
    var tab = document.createElement("button")
    tab.setAttribute("class", "tab")
    tab.setAttribute("id", "tab" + i)
    tab.setAttribute("data-number", i)
    tab.innerHTML = req.response[i].general_info
    
    var container = document.getElementById("TabHeader")
    container.appendChild(tab)
    
    tab.addEventListener("click", function(){
      var content_div = document.getElementById("content");
      var assignment = req.response[this.getAttribute("data-number")];
      content_div.innerHTML = "Github Link - " + assignment.github_link + "<br />" +
      "Co-Workers - " + assignment.co_workers;
      
      var submit_btn = document.createElement("input")
      submit_btn.setAttribute("type", "submit")
      submit_btn.setAttribute("value", "Delete")
      submit_btn.setAttribute("id", "delete_button")
      content_div.appendChild(submit_btn)
      
      submit_btn.addEventListener("click", function(){
        req2.open("get", "http://localhost:4567/api/delete_assignment/" + assignment.id);
        req2.send();
      })
    })
    
    
  }
})

req.responseType = "json";
req.send();


