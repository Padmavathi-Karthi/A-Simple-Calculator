let equal_pressed = 0;

// Refer all buttons excluding C and CE

let button_input = document.querySelectorAll(".input-button");

// Refer input, equal, clear and backspace

let input = document.getElementById("input");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let erase = document.getElementById("erase");

window.onload = () => {
    input.value = "";
};

// Access each class using forEach
button_input.forEach((button_class) => {
    button_class.addEventListener('click', () => {
        if (equal_pressed == 1) {
            input.value = "";
            equal_pressed = 0;
        }

        // Display value of each button
        input.value += button_class.value;
    });
});


