//1 Using a DOM property, retrieve the h1 and console.log it.

let articles = document.getElementsByTagName("article");
let article = articles[0];
console.log(article.children[0]);

//2 Using DOM methods, remove the last paragraph in the <article> tag.

let lastP = article.lastElementChild;
lastP.remove();
console.log(lastP);

//3 Add a event listener which will change the background color of the h2 to red, when it’s clicked on.

let second = article.children[1];
second.addEventListener("click", function () {
  second.style.backgroundColor = "red";
});

//4 Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).

let h3 = article.children[2];
console.log(h3);
h3.addEventListener("click", function () {
  h3.style.display.none;
});

//5 Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.

let but = document.createElement("button");
but.textContent = "click here";
but.addEventListener("click", function () {
  for (let i = 0; i < article.children.length; i++) {
    if (article.children[i].tagName == "P") {
      article.children[i].style.fontWeight = "700";
    }
  }
});
article.appendChild(but);

//6 BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)

let h1 = article.children[0];
h1.addEventListener("mouseover", function () {
  let fontSize = Math.floor(Math.random() * 100);
  h1.style.fontSize = fontSize + "px";
});

//7 BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)

let counter = 1;
for (let i = 0; i < article.children.length; i++) {
  if (article.children[i].tagName == "P") {
    console.log(counter);
    if (counter == 2) {
      let p = article.children[i];
      p.addEventListener("mouseover", function () {
        p.classList.add("fadeout");
      });
    }
    counter++;
  }
}

// Exercise 2 : Work With Forms

let formDetail = document.forms[0];
console.log(formDetail);

console.log(document.getElementById("fname"));
console.log(document.getElementById("lname"));
console.log(document.getElementById("submit"));

console.log(formDetail.elements.fname);
console.log(formDetail.elements.lname);
