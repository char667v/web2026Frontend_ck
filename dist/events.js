//alert("Hej Daniel");
var box = document.getElementById("box");
box.addEventListener("mouseover", function (event) {
  // function runs when user clicks on box
  console.log(event);
  this.style.backgroundColor = "red";
});
box.addEventListener("mouseout", function (event) {
  box.style.backgroundColor = "blue";
});
var btn = document.getElementById("btnHover");
var div = document.getElementById("divText");
btn.addEventListener("mouseover", function () {
  div.classList.remove("hidden");
});
btn.addEventListener("mouseout", function () {
  div.classList.add("hidden");
});
var input = document.getElementById("inputTodo");
var btnAddTodo = document.getElementById("btnTodo");
btnAddTodo.addEventListener("click", function () {
  var todoValue = input.value; // retrieve user input
  // create a new li - element
  var li = document.createElement("li");
  li.textContent = todoValue; // set its content to ...
  li.addEventListener("click", function () {
    this.remove(); // remove the li-element the user clicked
  });
  document.getElementById("todos").prepend(li); //add li to ul
  input.value = "";
});
//# sourceMappingURL=events.js.map
