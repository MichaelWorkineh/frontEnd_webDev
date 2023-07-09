import { type } from "@testing-library/user-event/dist/type";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Testing from "./Testing";

function Login() {
  const [peopleData, setPeopleData] = useState([null]);
  useEffect(() => {
    fetch("http://localhost:8000/users")
      .then((res) => {
        return res.json();
      }) 
      .then(data => {
        console.log(data);
        setPeopleData(data);
      });
  }, []);

  //-------------------------------------------
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
      details.password == registeredInfo.password
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
      {user.email != "" ? (
        <div>
          'sup
          <button onClick={logout}>logout</button>
        </div>
      ) : (<div>
        {peopleData[5] && <h1> {peopleData[5].fullName}</h1>}
        <Testing login={login} error={error} />
        </div>
      )}
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));

//export default Hello;
root.render(<Login />);
