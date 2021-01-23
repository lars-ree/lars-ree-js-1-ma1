// Question 1

const cat = {
    complain: function() {
        console.log("Meaow");
    }
}

cat.complain();


// Question 2

const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";

// Question 3

heading.style.fontSize = "2em";

// Question 4

heading.className = "subheading";

// Question 5

 var paragraphs = document.querySelector("p");

paragraphs.style.backgroundColor = "red";
// Queston 6

var results = document.querySelector(".results");

results.innerHTML = "This is a new paragraph";
results.style.backgroundColor = "yellow";



// Question 7

var 

function list (name) {
    
    for(let i = 0; i < list.length; i++) {
        console.log(name[i]);
    }

}

list(cats);