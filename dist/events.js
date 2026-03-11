import { getUsers } from "./api-functions";
//alert("Hej Daniel");
const box = document.getElementById("box");
box.addEventListener("mouseover", function (event) {
    // function runs when user clicks on box
    console.log(event);
    this.style.backgroundColor = "red";
});
fetch("/api/users", {
    headers: {
        Authorization: "Bearer " + "your jwt here"
    }
});
box.addEventListener("mouseout", function (event) {
    box.style.backgroundColor = "blue";
});
///////////////////////////////////////////////
// Hover btn
const btn = document.getElementById("btnHover");
const div = document.getElementById("divText");
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
const input = document.getElementById("inputTodo");
const btnAddTodo = document.getElementById("btnTodo");
// window.addEventListener("load", () => {
//   let name = prompt("What is your name?");
//   alert("Hello " + name);
// });
// alert(new Date(2026, 1, 27));
btnAddTodo.addEventListener("click", () => {
    const todoValue = input.value; // retrieve user input
    console.log(new Date().toLocaleString());
    // create a new li - element
    const li = document.createElement("li");
    li.title = new Date().toUTCString();
    li.textContent = todoValue; // set its content to ...
    li.addEventListener("click", function () {
        this.remove(); // remove the li-element the user clicked
    });
    document.getElementById("todos").prepend(li); //add li to ul
    input.value = "";
});
// Keep it DRY - Dont Repeat Yourself
function addErrorLi(errormessage) {
    const li = document.createElement("li"); // create li element
    li.textContent = errormessage; // Sets content
    document.getElementById("errors").appendChild(li); // adds li to ul
}
///////////////////////////////////////////////
// Form
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
// Form Christians version
// document.getElementById("formUser")
// .addEventListener("click", (alexanderErISverige: Event) => {
//     alexanderErISverige.preventDefault(); // stops default form behaviour, to send a post request to server
//     const firstname = (document.getElementById("firstname") as HTMLInputElement).value;
//     const lastname = (document.getElementById("lastname") as HTMLInputElement).value;
//     const email = (document.getElementById("email") as HTMLInputElement).value;
//     const password = (document.getElementById("password") as HTMLInputElement).value;
//     console.log(firstname, lastname, email, password);
//     //const errors = document.getElementById("errors");
//     document.getElementById("errors").textContent = "";
//     if (firstname.trim() === "") {
//         addErrorLi("Firstname must be filled out");
//     }
//     if (lastname.trim() === "") {
//         addErrorLi("Lastname must be filled out");
//     }
//     if (email.trim() === "") {
//         addErrorLi("Email must be filled out");
//     } else {
//         if (!email.includes("@")) {
//             addErrorLi("Email must include a @")
//         }
//     }
//     if (password.trim() === "") {
//         addErrorLi("Password must be filled out");
//     }
// })
// Form med advanced email udgave
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
        method: 'POST',
        body: JSON.stringify({ username: myUsername, password: myPassword })
    });
    if (!response.ok) {
        alert("Something went wrong signing up");
    }
    const data = await response.json(); // reads reponse from server, converts from json
    console.log(data);
}
// waiting on page to load, and then run some js
window.addEventListener("load", async () => {
    const users = await getUsers();
    users.map((user) => {
        const template = document.getElementById("template");
        const kopi = template.content.cloneNode(true);
        kopi.getElementById("name").textContent = user.firstname + " " + user.lastname;
        kopi.getElementById("email").textContent = user.email + " " + user.email;
        kopi.getElementById("password").textContent = user.password;
        document.getElementById("userContainer").appendChild(kopi);
    });
    // let name = prompt("What is your name?");
    // alert("Hello, " + name);
});
//# sourceMappingURL=events.js.map