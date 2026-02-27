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

// window.addEventListener("load", () => {
//   // let name = prompt("What is your name?");
//   // alert("Hello " + name);
// });

// alert(new Date(2026, 1, 27));

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
document.getElementById("formUser").addEventListener("submit", (e: Event) => { // e kan være alt muligt, men altid være det samme
  e.preventDefault();

  const firstname = (document.getElementById("firstname") as HTMLInputElement).value;
  const lastname = (document.getElementById("lastname") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const password = (document.getElementById("password") as HTMLInputElement).value;



  console.log(firstname, lastname, email, password);
  const errors = document.createElement("li");
  errors.appendChild(li);

  if (firstname === "") {
    const li = document.createElement("li") // create li element
    li.textContent = "Firstname must be filled out"; // sets content
    errors.appendChild(li); // adds li to ul
  }
  if (lastname === "") {
    const li = document.createElement("li") // create li element
    li.textContent = "Lastname must be filled out"; // sets content
    errors.appendChild(li); // adds li to ul
  }
    if (email === "") {
    const li = document.createElement("li") // create li element
    li.textContent = "Email must be filled out"; // sets content
    errors.appendChild(li); // adds li to ul
  }
      if (password === "") {
    const li = document.createElement("li") // create li element
    li.textContent = "Password must be filled out"; // sets content
    errors.appendChild(li); // adds li to ul
  }

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
document.getElementById("btnJoke").addEventListener("click", async function() {
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,racist,sexist";
const alexanderSovOverSig = await fetch(url, {
  method: 'GET'
})

  if (!alexanderSovOverSigOgDetErOk.ok) {
    alert("Noget gik galt");
  }

  const data = await alexanderSovOverSigOgDetErOk.json();
  console.log(data);

});