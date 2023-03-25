//Create a react app from scratch
//It should display a h1 heading
//It should contain 3 list element
//Try using basic js to do the same.

import react from "react";
import reactDOM from "react-dom";
reactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      This is heading
    </h1>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
    <div>
      <img src="#" alt="Some txt"></img>
    </div>
  </div>,
  document.getElementById("root")
);
//var img= "djsfhdsl.png"
//<img src={img.?greyscale}></img> -----2
//A self closing html element
//<img src="#" />
//we can also do so in html but not in JSX => <img src="#">
//all the properties which are writen in one word should be written in camelCase when using in JSX.
//Expressions can be used a values for attributes as long as we set them inside curly braces. like in ----2.
//add?greyscale to the end of url to convert the image to greyscale.
//Basic HTML

var h1 = "This is heading";
