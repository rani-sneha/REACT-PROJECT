import react from "react";
import ReactDOM from "react-dom";

var fname = "Sneha";
var lname = "Rani";
var lucky = 2;
//ReactDOM.render(<h1>My name is{name}.</h1>, document.getElementById("root"));
// ReactDOM.render(
//   <div>
//     <h1>Hello {`${fname} ${lname}`}</h1>
//     <p>Your lucky number is: {Math.floor(Math.random() * 10)}</p>
//   </div>,
//   document.getElementById("root")
// ); //ways to write fname and lname.
//{fname+" "+lname}
//{fname} {lname}
//template literals
//string interpulations (probably)
//{`${fname} ${lname}`}

//Any js expression in between these cury braces which is injecting element
//We can't write js statement
//Because expressions end up with a value.
//But statement does not.
//Cannot use if else statement. in render.
//expression vs statement.

//Test 2

var year = new Date().getFullYear(); //To get the current year.
// console.log(year);
//new Date() -> shows the full date with weeday name.
ReactDOM.render(
  <div>
    <p>
      Created by {fname} {lname}.
    </p>
    <p>Copyright {year}.</p>
  </div>,
  document.getElementById("root")
);
