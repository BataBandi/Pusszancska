$(function () {
  // Same as document.addEventListener("DOMContentLoaded"...

  // Same as document.querySelector("#navbarToggle").addEventListener("blur",...
  $("#navbarToggle").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#collapsable-nav").collapse("hide");
    }
  });


//function sayHello () {
 // var name =
 //  document.getElementById("name").value;
  // var message = "<h2>Hello " + name + "!</h2>";

  // document
  //   .getElementById("content")
  //   .textContent = message;
//
// document
 //   .getElementById("content")
 //   .innerHTML = message;
////if (name === "Burány Ildikó") {
//    var title = 
  //    document
 //       .querySelector("#title")
  //      .textContent;
 //   title += " & Lovin' it!";
 //   document
//.querySelector("h1")
   //     .textContent = title;
//  }
//}
function addTag() {
        const newTag = document.createElement("p");
        const tagValue = document.createTextNode("This is a new tag");
        newTag.appendChild(tagValue);
        document.body.appendChild(newTag);
      }