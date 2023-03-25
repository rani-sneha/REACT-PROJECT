//var React = require("react");
//var ReactDOM = require("react-dom");
import React from "react";
import ReactDOM from "react-dom"; //tby using the import and the export keyword we are able to modularize the dependencies far better.
ReactDOM.render(<h1>Hello World1!</h1>, document.getElementById("root"));
//What to show?, where to show?, when the render function is completed?(optional)
//files where we have html right in the body of js file.
// bts- html gets picked by a compiler and it gets converted or compiled down to actual js.
//The render method can only take a single html element.
//How to embed two html element in one render function?
//we can enclse then within a div element making it a single html element.
ReactDOM.render(
  <div>
    <h1 className="heading">Hello World3!</h1>
    <p>This is a paragraph inside div</p>
  </div>,
  document.getElementById("root")
);
var h1 = document.createElement("h1");
h1.innerHTML = "Hello World2!";
document.getElementById("root").appendChild(h1);

//Probably you cannot render more than one time.
//basic js

//babbel converts react to basic js.
