//alert("Hej Daniel");
var box = document.getElementById("box");
box.addEventListener("mouseover", function (event) {
    // function runs when user clicks on box
    console.log(event);
    this.style.backgroundColor = 'red';
});
box.addEventListener("mouseout", function (event) {
    box.style.backgroundColor = 'blue';
});
//# sourceMappingURL=events.js.map