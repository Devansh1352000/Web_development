// DOM Manipulation


// console.log(document.getElementById("title"));
/* Using document object along with the property getElementById to extract
the heading Part having Id title from the html code index.html */

// console.log(document instanceOf HTMLDocument);
/* Showing that the document object is an instance of HTMLDocument and therefore
it can be used as a global object inside a JavaScript file. */


function sayHello() {
  var name = document.getElementById("name").value;
  var message = "<h2>Hello " + name + "!</h2>";

  // document.getElementById("content").textContent = message;
  /* Problem will be h2 tag inside message variable will be considered as text
     content due to .textContent property which we don't want. What we want is
     that the message content should get printed in form of heading h2. */

  // Therefore, in order to do so, we can use correct method i.e -->
  document.getElementById("content").innerHTML = message;
  /* Instead of using .textContent we can use .innerHTML so that the JS engine
  considers the value in form of HTML code. */

  if (name === "Devansh") {
    var title = document.querySelector("#title").textContent; /* Inspite of Using
    document.getElementById("title").textContent.This is an alternate and more
    preferable method. Because it doesn't just select item by its id, one can
    pass anything apart from id. */

    title += "Created By " + name + "!";
    document.querySelector("h1").textContent = title;
    /* Advantage of using .querySelector is that we can pass any identity inside
    it, i.e. either any CSS tag or any html tag. Therefore it is more preferable.
    */
  }

}
