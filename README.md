# Demo for React Window Bubbling

<kbd><img src="src/demo.gif" alt="Demo for React Window Bubbling" /></kbd>

Instead of using `postMessage` to communicate between parent & child windows, we can use React Portals & the `window.open()` API.

Inspired by [this tweet](https://twitter.com/ryanflorence/status/1064612600317534208) by @ryanflorence.

## The Code

Everything is in [src/index.js](src/index.js).

```javascript
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
```