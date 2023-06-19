import React from "react";
import ReactDOM from "react-dom/client";
import Apps from "./App";
import Testing from "./Testing";
/*
function Hello() {
  return (
    <div>
      <h2>First component</h2>
      <a href="www.google.com">weeewewee man</a>
      <hr></hr>
      <p>once I was a lonely kid with very weird kid dreams</p>
    </div>
  );
}*/

function Hello() {
  //return
  <>
    <h2>First component</h2>
    <a href="www.google.com">weeewewee man</a>
    <hr></hr>
    <p>once I was a lonely kid with very weird kid dreams</p>
  </>;
  if (1 > 2) {
    return React.createElement(
      "React.Fragments",
      {},
      React.createElement("h3", {}, "hello world"),
      React.createElement("p", {}, "iauhdawd asdaljdlksad laldjsakjdl"),
      React.createElement(
        "ol",
        {},
        React.createElement(
          "li",
          {},
          React.createElement(
            "p",
            {},
            "iauhdawd asdaljdlksad laldjsakjdl. usiauidaushasd aidoadioasdoasijdlkasd asidipaosdipaosdpoasdoasdla;s aisdaiduoaiduoiaduasido aspdoapsidopasidpoasdipaosdk;alsd asdasdiasoduioasduuaysduiasdyiuasd asdasioduaosiduoiasdia"
          )
        ),
        React.createElement("li", {}, "iauhdawd asdaljdlksad laldjsakjdl"),
        React.createElement("li", {}, "iauhdawd asdaljdlksad laldjsakjdl")
      )
    );
  } else {
    return React.createElement(
      "div",
      {},
      React.createElement("h1", {}, "FUCK ME!"),
      React.createElement("hr", {}),
      React.createElement(
        "p",
        {},
        "cause I wanna kill my self! like it is nobody's bussiness"
      ),
      React.createElement("hr", {}),
      <Testing />,
      <Apps />
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));

//export default Hello;
root.render(<Hello />);
