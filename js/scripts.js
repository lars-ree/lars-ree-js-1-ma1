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



function list (name) {
    
    let list = "";

    for(let i = 0; i < name.length; i++) {
        console.log(name[i]);

        list = list + "<ul>" + name[i] + "</ul>";

    }

}

// Question 8 


//const cat1 = ["small", "medium", "large"];

//function createCats(cats) {
    
  //  let cat1 ="";

    //for(let i = 0; < cats.length; i++) {
      //  cat1 = cats + "<h5>" + cats[] + "</h5>";

    //}
//}

//createCats(cat1)