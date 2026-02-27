//alert("Hej Daniel");

const box: HTMLElement | null = document.getElementById("box");

box.addEventListener("mouseover", function (event: MouseEvent) {
  // function runs when user clicks on box
  console.log(event);
  this.style.backgroundColor = "red";
});

box.addEventListener("mouseout", function (event: MouseEvent) {
  box.style.backgroundColor = "blue";
});

///////////////////////////////////////////////
const btn: HTMLElement | null = document.getElementById("btnHover");
const div: HTMLElement | null = document.getElementById("divText");

btn.addEventListener("mouseover", () => {
  div.classList.remove("hidden");
});
btn.addEventListener("mouseout", () => {
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
// Exercise add date to your duck project - this works but not not as expected; correct it
const input: any = document.getElementById("inputTodo");
const btnAddTodo: HTMLElement | null = document.getElementById("btnTodo");

window.addEventListener("load", () => {
  let name = prompt("What is your name?");
  alert("Hello " + name);
});

alert(new Date(2026, 1, 27));

btnAddTodo.addEventListener("click", () => {
  const todoValue = input.value; // retrieve user input

  // create a new li - element
  const li = document.createElement("li");
  li.textContent = todoValue; // set its content to ...
  li.addEventListener("click", function () {
    // add event listener to the new li element
    this.remove(); // remove the li-element the user clicked
  });

  document.getElementById("todos").prepend(li); //add li to ul
  input.value = "";
});

///////////////////////////////////////////////
// Form
document.getElementById("formUser")
.addEventListener("click", (e; Event) => { // e kan være alt muligt men altid det samme
    e.preventDefault();
});

const firstname = (document.getElementById("firstname") as HTMLInputElement).value;
const lastname = (document.getElementById("lastname") as HTMLInputElement).value;
const email = (document.getElementById("email") as HTMLInputElement).value;
const password = (document.getElementById("password") as HTMLInputElement).value;

  console.log(firstname, lastname, email, password);