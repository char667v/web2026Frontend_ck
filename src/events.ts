//alert("Hej Daniel");

const box: HTMLElement | null = document.getElementById("box"); 

box.addEventListener("mouseover", function(event: MouseEvent) {
    // function runs when user clicks on box
    console.log(event);
    this.style.backgroundColor = 'red';
})

box.addEventListener("mouseout", function(event: MouseEvent) {
    box.style.backgroundColor = 'blue'
});


const btn: HTMLElement | null = document.getElementById("btnHover");
const div: HTMLElement | null = document.getElementById("divText");

btn.addEventListener("mouseover", () => {
    div.classList.remove("hidden");
})
btn.addEventListener("mouseout", () => {
    div.classList.add("hidden");
})


const input: any = document.getElementById("inputTodo");
const btnAddTodo: HTMLElement | null = document.getElementById("btnTodo");

btnAddTodo.addEventListener("click", () => {
    const todoValue = input.value; // retrieve user input
    
    // create a new li - element
    const li = document.createElement("li");
    li.textContent = todoValue; // set its content to ...
    li.addEventListener("click", function() { // add event listener to the new li element
        this.remove(); // remove the li-element the user clicked
    })

    document.getElementById("todos").prepend(li); //add li to ul
    input.value = '';
})