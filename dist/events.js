import { getUsers } from "./api-functions";
//alert("Hej Daniel");
///////////////////////////////////////////////
// DOM Events - box color change
const box = document.getElementById("box");
box.addEventListener("mouseover", function (event) {
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
box.addEventListener("mouseout", function (event) {
    box.style.backgroundColor = "blue";
});
//////////////////// 01 Exercise–Show / Hide ///////////////////////////
// Hover btn
const btn = document.getElementById("btnHover");
const div = document.getElementById("divText");
btn.addEventListener("mouseover", () => {
    div.classList.remove("hidden");
    div.classList.add("visible");
});
btn.addEventListener("mouseout", () => {
    div.classList.add("visible");
    div.classList.add("hidden");
});
//////////////// 02 Todoexample ///////////////////////
const input = document.getElementById("inputTodo");
const btnAddTodo = document.getElementById("btnTodo");
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
function addErrorLi(errormessage) {
    const li = document.createElement("li"); // create li element
    li.textContent = errormessage; // Sets content
    document.getElementById("errors").appendChild(li); // adds li to ul
}
document.getElementById("formUser")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const firstname = document.getElementById("firstname").value.trim();
    const lastname = document.getElementById("lastname").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const errors = document.getElementById("errors");
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
    if (errors.children.length > 0)
        return;
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
    const data = await x.json();
    console.log(data);
    // ADDITION: vis i browseren
    const jokeText = document.getElementById("jokeText");
    if (!jokeText)
        return;
    if (data.type === "single") {
        jokeText.textContent = data.joke;
    }
    else {
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
        const template = document.getElementById("template");
        const clone = template.content.cloneNode(true);
        clone.getElementById("name").textContent = user.firstname + " " + user.lastname;
        clone.getElementById("email").textContent = user.email + " " + user.email;
        clone.getElementById("password").textContent = user.password;
        document.getElementById("userContainer").appendChild(clone);
    });
    // let name = prompt("What is your name?");
    // alert("Hello, " + name);
});
//# sourceMappingURL=events.js.map