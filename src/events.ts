import { getUsers } from "./api-functions";
//alert("Hej Daniel");

const box: HTMLElement | null = document.getElementById("box");

box.addEventListener("mouseover", function (event: MouseEvent) {
  // function runs when user clicks on box
  console.log(event);
  this.style.backgroundColor = "red";
});

fetch("/api/users", {
  headers: {
    Authorization: "Bearer " + "your jwt here"
  }
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
// Eksempel
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

// window.addEventListener("load", () => {
//   // let name = prompt("What is your name?");
//   // alert("Hello " + name);
// });

// alert(new Date(2026, 1, 27));

btnAddTodo.addEventListener("click", () => {
  const todoValue = input.value; // retrieve user input

  console.log(new Date().toLocaleString());
  // create a new li - element
  const li = document.createElement("li");
  li.title = new Date().toUTCString();
  li.textContent = todoValue; // set its content to ...
  li.addEventListener("click", function() { // add event listener to the new li element
      this.remove(); // remove the li-element the user clicked
  })

  document.getElementById("todos").prepend(li); //add li to ul
  input.value = "";
});

// Keep it DRY - Dont Repeat Yourself
function addErrorLi(errormessage: string): void {
    const li = document.createElement("li") // create li element
    li.textContent = errormessage; // Sets content
    document.getElementById("errors").appendChild(li); // adds li to ul
}

///////////////////////////////////////////////
// Form
document.getElementById("formUser")?.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  const firstname = (document.getElementById("firstname") as HTMLInputElement).value.trim();
  const lastname = (document.getElementById("lastname") as HTMLInputElement).value.trim();
  const email = (document.getElementById("email") as HTMLInputElement).value.trim();
  const password = (document.getElementById("password") as HTMLInputElement).value.trim();

  const errors = document.getElementById("errors") as HTMLUListElement;
  errors.innerHTML = "";

  if (firstname === "") {
    const li = document.createElement("li");
    li.textContent = "Firstname must be filled out";
    errors.appendChild(li);
  }

  if (lastname === "") {
    const li = document.createElement("li");
    li.textContent = "Lastname must be filled out";
    errors.appendChild(li);
  }

  if (email === "") {
    const li = document.createElement("li");
    li.textContent = "Email must be filled out";
    errors.appendChild(li);
  }

  if (password === "") {
    const li = document.createElement("li");
    li.textContent = "Password must be filled out";
    errors.appendChild(li);
  }

  if (errors.children.length > 0) return;

  console.log(firstname, lastname, email, password);
});

// document.getElementById("formUser").addEventListener("submit", (e: Event) => {
//   e.preventDefault();

//   const firstname = (document.getElementById("firstname") as HTMLInputElement).value;
//   const lastname = (document.getElementById("lastname") as HTMLInputElement).value;
//   const email = (document.getElementById("email") as HTMLInputElement).value;
//   const password = (document.getElementById("password") as HTMLInputElement).value;

//   if (!firstname || !lastname || !email || !password) {
//     alert("Du mangler at udfylde et felt");
//     return;
//   }

//   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (!emailPattern.test(email)) {
//     alert("Skriv en gyldig email");
//     return;
//   }

//   if (password.length <= 5) {
//     alert("Password skal være mere end 5 tegn");
//     return;
//   }

//   const specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/;
//   if (!specialCharPattern.test(password)) {
//     alert("Password skal indeholde mindst ét specialtegn");
//     return;
//   }

//   console.log(firstname, lastname, email, password);
// });

// document.getElementById("formUser").addEventListener("submit", (e: Event) => {
//   e.preventDefault();

//   const firstname = (document.getElementById("firstname") as HTMLInputElement).value trim; tjek om trim er skrevet rigtigt!!
//   const lastname = (document.getElementById("lastname") as HTMLInputElement).value trim;
//   const email = (document.getElementById("email") as HTMLInputElement).value trim;
//   const password = (document.getElementById("password") as HTMLInputElement).value trim;

//   if (!firstname) {
//     alert("Udfyld fornavn");
//     return;
//   }

//   if (!lastname) {
//     alert("Udfyld efternavn");
//     return;
//   }

//   if (!email) {
//     alert("Udfyld email");
//     return;
//   }

//   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (!emailPattern.test(email)) {
//     alert("Skriv en gyldig email");
//     return;
//   }

//   if (!password) {
//     alert("Udfyld password");
//     return;
//   }

//   if (password.length <= 5) {
//     alert("Password skal være mere end 5 tegn");
//     return;
//   }

//   const specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/;
//   if (!specialCharPattern.test(password)) {
//     alert("Password skal indeholde mindst ét specialtegn");
//     return;
//   }

//   console.log(firstname, lastname, email, password);
// });

// Joke exercise
document.getElementById("btnJoke")?.addEventListener("click", async () => {
  const url = "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";
  const x = await fetch(url, { method: "GET" });

  // Svarer serveren med en statuskode som er en fejl
  if (!x.ok) {
    alert("Noget gik galt");
    return;
  }

  // Konvertér fra json til javascript repræsentation
  const data: any = await x.json();
  console.log(data);

  // ADDITION: vis i browseren
  const jokeText = document.getElementById("jokeText") as HTMLElement | null;
  if (!jokeText) return;

  if (data.type === "single") {
    jokeText.textContent = data.joke;
  } else {
    jokeText.textContent = data.setup + " " + data.delivery;
  }
});
