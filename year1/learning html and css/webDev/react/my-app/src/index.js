import { type } from "@testing-library/user-event/dist/type";
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Testing from "./Testing";

function Login() {
  const registeredInfo = {
    name: "Mark Fishback",
    password: "blood shot eyes for my birthday",
    email: "markipler@gmail.com",
  };
  const [user, setUsername] = useState({ name: "", password: "", email: "" });
  const [error, setError] = useState("");

  const login = (details) => {
    console.log(details);
    if (
      details.email == registeredInfo.email &&
      details.name == registeredInfo.name &&
      details.password==registeredInfo.password
    ) {
      setUsername({
        name: details.name,
        email: details.email,
      });
    } else {
      console.log("info does not match");
      setError("info does not match");
    }
  };
  const logout = () => {
    setUsername({
      name: "",
      email: "",
    });
  };
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
      {user.email != "" ? (
        <div>'sup
          <button onClick={logout}>logout</button>
        </div>
        
      ) : (
        <Testing login={login} error={error} />
        //<h1>h1!</h1>
      )}
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));

//export default Hello;
root.render(<Login />);
