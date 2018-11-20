import React, { Component, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

class App extends Component {
  state = {
    count: 0,
    windowObjectReference: null,
    externalBody: null
  };

  // Increment the count
  addCount = () => {
    const newCount = this.state.count + 1;
    this.setState({
      count: newCount
    });
  };

  openPopUp = () => {
    if (
      this.state.windowObjectReference === null ||
      this.state.windowObjectReference.closed
    ) {
      // window.open(): https://developer.mozilla.org/en-US/docs/Web/API/Window/open
      const windowObjectReference = window.open(
        // Empty to load a blank page
        "",

        // Empty so we can create a new window each time
        "",

        // List of window variables
        "width=500,height=500,menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes"
      );

      this.setState({
        windowObjectReference
      });
    } else {
      this.windowObjectReference.focus();
    }
  };

  render() {
    return (
      <div className="App">
        <div className="count">{this.state.count}</div>
        <button onClick={() => this.openPopUp()}>Open New Window</button>
        {this.state.windowObjectReference &&
          ReactDOM.createPortal(
            <button onClick={() => this.addCount()}>+1</button>,
            this.state.externalBody
          )}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
