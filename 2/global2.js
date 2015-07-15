var submit = document.getElementById("submit_button_add")
var return_div = document.getElementById("success")
var form = document.getElementById("add_form")
var req = new XMLHttpRequest();



submit.addEventListener("click", function(event){
  var gen_info = document.getElementById("general_info").value
  var git_link = document.getElementById("github_link").value
  var others = document.getElementById("co_workers").value
  
  req.open("get", "http://localhost:4567/api/add_assignment?general_info=" + gen_info + "&github_link=" + git_link + "&co_workers=" + others)
  
  return_div.innerHTML = "Assignment Added!"
  form.style.display = "none"
  event.preventDefault()
  
  req.send()
})