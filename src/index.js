import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

const newWindow = window.open(
  "",
  "",
  "left=100,top=100,width=200,height=200,centerscreen=yes"
);
const externalBody = newWindow.document.querySelector("body");

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {count}
      {/* <button
        onClick={() => {
          // TODO: If a window is already open, use that context

          console.log("hello");
        }}
      >
        Open New Window
      </button> */}
      {ReactDOM.createPortal(
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +1
        </button>,
        externalBody
      )}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
