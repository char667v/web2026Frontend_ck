import { getUsers } from "./api-functions";
//alert("Hej Daniel");

///////////////////////////////////////////////
// DOM Events - box color change
const box: HTMLElement | null = document.getElementById("box");

box.addEventListener("mouseover", function (event: MouseEvent) {
  // function runs when user clicks on box
  console.log(event);
  this.style.backgroundColor = "red";
});

fetch("/api/users", {
  //tilføjet fra forrig lektion
  headers: {
    Authorization: "Bearer " + "your jwt here",
  },
});

box.addEventListener("mouseout", function (event: MouseEvent) {
  box.style.backgroundColor = "blue";
});

//////////////////// 01 Exercise–Show / Hide ///////////////////////////
// Hover btn
const btn: HTMLElement | null = document.getElementById("btnHover");
const div: HTMLElement | null = document.getElementById("divText");

btn.addEventListener("mouseover", () => {
  div.classList.remove("hidden");
  div.classList.add("visible");
});
btn.addEventListener("mouseout", () => {
  div.classList.add("visible");
  div.classList.add("hidden");
});

//////////////// 02 Todoexample ///////////////////////
const input: any = document.getElementById("inputTodo");
const btnAddTodo: HTMLElement | null = document.getElementById("btnTodo");

btnAddTodo.addEventListener("click", () => {
  const todoValue = input.value; // retrieve user input

  console.log(new Date().toLocaleString());
  // create a new li - element
  const li = document.createElement("li");
  li.title = new Date().toUTCString();
  li.textContent = todoValue; // set its content to ...
  li.addEventListener("click", function () {
    // add event listener to the new li element
    this.remove(); // remove the li-element the user clicked
  });

  document.getElementById("todos").prepend(li); //add li to ul
  input.value = "";
});

/////////////////////////////////////////////////////////////
// Form

// Keep it DRY - Dont Repeat Yourself
function addErrorLi(errormessage: string): void {
  const li = document.createElement("li"); // create li element
  li.textContent = errormessage; // Sets content
  document.getElementById("errors").appendChild(li); // adds li to ul
}

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

///////////////////////////////////////////////
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

///////////////////////////////////////////////
//
async function signup(myUsername, myPassword) {
  const port = 8080;
  const backendUrl = "http://localhost:" + port;
  const response = await fetch(backendUrl, {
    method: "POST",
    body: JSON.stringify({ username: myUsername, password: myPassword }),
  });

  if (!response.ok) {
    alert("Something went wrong signing up");
  }

  const data = await response.json(); // reads reponse from server, converts from json
  console.log(data);
}

///////////////////////////////////////////////
// Load - getUsers + template
// waiting on page to load, and then run some js
window.addEventListener("load", async () => {
  const users = await getUsers();

  users.map((user) => {
    const template: any = document.getElementById("template");
    const clone = template.content.cloneNode(true);

    clone.getElementById("name").textContent = user.firstname + " " + user.lastname;
    clone.getElementById("email").textContent = user.email + " " + user.email;
    clone.getElementById("password").textContent = user.password;

    document.getElementById("userContainer").appendChild(clone);
  });

  // let name = prompt("What is your name?");
  // alert("Hello, " + name);
});
