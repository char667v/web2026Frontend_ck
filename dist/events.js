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
///////////////////////////////////////////////
var btn = document.getElementById("btnHover");
var div = document.getElementById("divText");
btn.addEventListener("mouseover", function () {
    div.classList.remove("hidden");
});
btn.addEventListener("mouseout", function () {
    div.classList.add("hidden");
});
///////////////////////////////////////////////
// const input: any = document.getElementById("inputTodo");
// const btnAddTodo: HTMLElement | null = document.getElementById("btnTodo");
// btnAddTodo.addEventListener("click", () => {
//   const todoValue = input.value; // retrieve user input
//   // create a new li - element
//   const li = document.createElement("li");
//   li.textContent = todoValue; // set its content to ...
//   li.addEventListener("click", function () {
//     // add event listener to the new li element
//     this.remove(); // remove the li-element the user clicked
//   });
//   document.getElementById("todos").prepend(li); //add li to ul
//   input.value = "";
// });
///////////////////////////////////////////////
var input = document.getElementById("inputTodo");
var btnAddTodo = document.getElementById("btnTodo");
window.addEventListener("load", function () {
    var name = prompt("What is your name?");
    alert("Hello " + name);
});
alert(new Date(2026, 1, 27));
btnAddTodo.addEventListener("click", function () {
    var todoValue = input.value; // retrieve user input
    // create a new li - element
    var li = document.createElement("li");
    li.textContent = todoValue; // set its content to ...
    li.addEventListener("click", function () {
        // add event listener to the new li element
        this.remove(); // remove the li-element the user clicked
    });
    document.getElementById("todos").prepend(li); //add li to ul
    input.value = "";
});
//# sourceMappingURL=events.js.map