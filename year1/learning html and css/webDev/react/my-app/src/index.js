import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import Apps from "./App";

function Login() {
  return (
    <>
      <div className="list">
        <ul>
          <li>home</li>
          <li>about us</li>
          <li>news and update</li>
          <li>contact us</li>
        </ul>
      </div>
      <div className="loginCard">
        <h1 className="greetings">wellcome!</h1>
        <div className="user">
          <input type="text" placeholder="user name"/>
          <br></br>
          <input type="password" placeholder="password"/>
          <br></br>
          <input type="email" placeholder="email"/>
        </div>
        <button className="login">login</button>
        <br></br>
        <section className="forgotpassword">
            <a href="www.goolge.com"> forgot your password?</a>
          </section>
      </div>
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));

//export default Hello;
root.render(<Login />);
