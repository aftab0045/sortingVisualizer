/*
    *****************
    DONE BY:-   Aftab Attar
    
    *****************
*/


// Variables (BE CAREFUL THESE MIGHT BE USED IN OTHER JS FILES TOO)
const inp_as = document.getElementById('a_size');
let array_size = inp_as.value;
const inp_gen = document.getElementById("a_generate");
const inp_manual = document.getElementById("a_manual");  // New input for manual array input
const inp_aspeed = document.getElementById("a_speed");

const butts_algos = document.querySelectorAll(".algos button");

let div_sizes = [];
let divs = [];
let margin_size;
const cont = document.getElementById("array_container");
cont.style.position = "relative"; // Ensure container is positioned relatively

// Array generation and updation
inp_gen.addEventListener("click", generate_array);
inp_manual.addEventListener("input", generate_manual_array); // Event listener for manual input
inp_as.addEventListener("input", update_array_size);

function generate_array() {
    cont.innerHTML = ""; // Clear existing divs
    cont.style.height = "100%"; // Set the container height to accommodate all items

    for (let i = 0; i < array_size; i++) {
        div_sizes[i] = Math.floor(Math.random() * 0.5 * (inp_as.max - inp_as.min)) + 10;
        divs[i] = document.createElement("div");
        cont.appendChild(divs[i]);
        margin_size = 0.1;
        divs[i].style.position = "absolute"; // Position divs absolutely within the container
        divs[i].style.left = `${(100 / array_size) * i}%`;
        divs[i].style.margin = `-2% ${margin_size}%`;
        divs[i].style.backgroundColor = "Magenta";
        divs[i].style.width = `${100 / array_size - (2 * margin_size)}%`;
        divs[i].style.height = `${div_sizes[i]}%`;
        divs[i].style.bottom = "0"; // Ensure divs are placed starting from the bottom
    }
}

function generate_manual_array() {
    cont.innerHTML = ""; // Clear existing divs
    cont.style.height = "100%"; // Set the container height to accommodate all items
    const manual_values = inp_manual.value.split(',').map(Number); // Convert input to an array of numbers
    array_size = manual_values.length;

    for (let i = 0; i < array_size; i++) {
        div_sizes[i] = manual_values[i];
        divs[i] = document.createElement("div");
        cont.appendChild(divs[i]);
        margin_size = 0.1;
        divs[i].style.position = "absolute"; // Position divs absolutely within the container
        divs[i].style.left = `${(100 / array_size) * i}%`;
        divs[i].style.margin = `-2% ${margin_size}%`;
        divs[i].style.backgroundColor = "Magenta";
        divs[i].style.width = `${100 / array_size - (2 * margin_size)}%`;
        divs[i].style.height = `${div_sizes[i]}%`;
        divs[i].style.bottom = "0"; // Ensure divs are placed starting from the bottom
    }
}

function update_array_size() {
    array_size = inp_as.value;
    generate_array();
}

window.onload = update_array_size();

// Running the appropriate algorithm
for (let i = 0; i < butts_algos.length; i++) {
    butts_algos[i].addEventListener("click", runalgo);
}

function disable_buttons() {
    for (let i = 0; i < butts_algos.length; i++) {
        butts_algos[i].classList = [];
        butts_algos[i].classList.add("butt_locked");
        butts_algos[i].disabled = true;
        inp_as.disabled = true;
        inp_gen.disabled = true;
        inp_manual.disabled = true; // Disable manual input
        inp_aspeed.disabled = true;
    }
}

function runalgo() {
    disable_buttons();
    this.classList.add("butt_selected");
    switch (this.innerHTML) {
        case "Bubble":
            Bubble();
            break;
        case "Selection":
            Selection_sort();
            break;
        case "Insertion":
            Insertion();
            break;
        case "Merge":
            Merge();
            break;
        case "Quick":
            Quick();
            break;
        case "Heap":
            Heap();
            break;
    }
}

/*
    *****************
    DONE BY:-   Aftab Attar
    
    *****************
*/