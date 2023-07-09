import { type } from "@testing-library/user-event/dist/type";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Testing from "./Testing";
import Register from "./register";

//--------------------------------------------------
function Login() {
  let [peopleData, setPeopleData] = useState([null]);
  useEffect(() => {
    fetch("http://localhost:8000/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setPeopleData(data);
      });
  }, []);
  //-----------------------------------------------------

  const registeredInfo = {
    name: "Mark Fishback",
    password: "blood shot eyes for my birthday",
    email: "markipler@gmail.com",
  };
  const [user, setUsername] = useState({
    name: "",
    password: "",
    email: "",
    sex: "",
    country: "",
    id: "",
  });
  const [error, setError] = useState("");
  const [newInfo, setnewInfo] = useState({
    name: "",
    password: "",
    email: "",
    sex: "",
    country: "",
    id: "",
  }); 

  const registrationFunc = (registrationDetails) =>{
    console.log("from registrationFunc,");
    console.log(registrationDetails);
    peopleData = [...peopleData,registrationDetails];
    console.log("the updated json array:");
    console.log(peopleData);
    setnewInfo(registrationDetails);
  };

  const login = (details) => {
    console.log(details);
    for (let i = 0; i < 7; i++) {
      if (
        peopleData[i] &&
        details.email == peopleData[i].email &&
        details.name == peopleData[i].fullName &&
        details.password == peopleData[i].password
      ) {
        setUsername({
          name: details.name,
          email: details.email,
          sex: peopleData[i].sex,
          age: peopleData[i].age,
          country: peopleData[i].country,
          id: peopleData[i].id,
        });
      } else {
        console.log("info does not match");
        setError("*! info does not match !*");
      }
    }
  };
  const logout = () => {
    setUsername({
      name: "",
      email: "",
    });
  };
  return (
    /*
    <>
      {user.email != "" ? (
        <div className="ProfilePage">
          <div className="profilelogout">
            <h1 className="profile">
              {user.name[0]}
              {user.name[1]}
            </h1>
            <button onClick={logout} className="login">
              logout
            </button>
          </div>
          <div className="details">
            <section>Name: {user.name}</section>
            <section>email: {user.email}</section>
            <section>sex: {user.sex}</section>
            <section>age: {user.age}</section>
            <section>id: {user.id}</section>
            <section>country: {user.country}</section>
          </div>
        </div>
      ) : (
        <div>
          <Testing login={login} error={error} />
        </div>
      )}
    </>*/<>
    {newInfo.email == ""? (
    <Register registrationFunc={registrationFunc} />):(<h1>Youe ahve been registered!</h1>)};
  </>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));

//export default Hello;
root.render(<Login />);
