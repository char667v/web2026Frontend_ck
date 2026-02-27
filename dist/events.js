//alert("Hej Daniel");
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
// Exercise add date to your duck project - this works but not not as expected; correct it
var input = document.getElementById("inputTodo");
var btnAddTodo = document.getElementById("btnTodo");
// window.addEventListener("load", () => {
//   // let name = prompt("What is your name?");
//   // alert("Hello " + name);
// });
// alert(new Date(2026, 1, 27));
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
///////////////////////////////////////////////
// Form
document.getElementById("formUser").addEventListener("submit", function (e) {
    e.preventDefault();
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    console.log(firstname, lastname, email, password);
    var errors = document.createElement("li");
    errors.appendChild(li);
    if (firstname === "") {
        var li = document.createElement("li"); // create li element
        li.textContent = "Firstname must be filled out"; // sets content
        errors.appendChild(li); // adds li to ul
    }
    if (lastname === "") {
        var li = document.createElement("li"); // create li element
        li.textContent = "Lastname must be filled out"; // sets content
        errors.appendChild(li); // adds li to ul
    }
    if (email === "") {
        var li = document.createElement("li"); // create li element
        li.textContent = "Email must be filled out"; // sets content
        errors.appendChild(li); // adds li to ul
    }
    if (password === "") {
        var li = document.createElement("li"); // create li element
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
document.getElementById("btnJoke").addEventListener("click", function () {
    return __awaiter(this, void 0, void 0, function () {
        var url, alexanderSovOverSig, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,racist,sexist";
                    return [4 /*yield*/, fetch(url, {
                            method: 'GET'
                        })];
                case 1:
                    alexanderSovOverSig = _a.sent();
                    if (!alexanderSovOverSigOgDetErOk.ok) {
                        alert("Noget gik galt");
                    }
                    return [4 /*yield*/, alexanderSovOverSigOgDetErOk.json()];
                case 2:
                    data = _a.sent();
                    console.log(data);
                    return [2 /*return*/];
            }
        });
    });
});
//# sourceMappingURL=events.js.map