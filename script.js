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


//  Solve the user's input when clicked on equal sign
equal.addEventListener('click', () => {
    equal_pressed = 1;
    let inp_val = input.value;
    try {
        // evaluate user's input
        let solution = eval(inp_val);

        // True for whole numbers
        // False for decimals

        if (Number.isInteger(solution)) {
            input.value = solution;
        }
        else {
            input.value = solution.toFixed(2);
        }
    } catch (err) {
        // If user has entered invalid input 
        alert("Invalid Input");
    }
});

//  To clear whole input
clear.addEventListener("click", () => {
    input.value = "";
});

// To delete single digit - BackSpace
erase.addEventListener('click', () => {
    input.value = input.value.substr(0, input.value.length - 1);
});



