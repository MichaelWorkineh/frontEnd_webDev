import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Testing from "./Testing";
import Register from "./register";

//--------------------------------------------------
function Login() {
  const [peopleData, setPeopleData] = useState([null]);
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
  const [pageState, setPageState] = useState(0);
  const clickHandler=()=>{
    if(pageState==0){
      setPageState(1);
    }
    else{
      setPageState(0);
    }
    console.log(pageState);
  }
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

  const registrationFunc = (registrationDetails) => {
    console.log("from registrationFunc,");
    console.log(registrationDetails);
    if(registrationDetails.email!=""){
    const updatedArray = [...peopleData, registrationDetails];
    setPeopleData(updatedArray); 
    console.log("the updated json array:");
    console.log(peopleData);
    setnewInfo(registrationDetails);}
    console.log(peopleData.length);
  };

  const login = (details) => {
    console.log(details);
    console.log(peopleData)
    for (let i = 0; i < peopleData.length; i++) {
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
    <>
      {pageState == 0 ? (
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
              <button className="login" onClick={clickHandler}>
                  Register
                </button>
            </div>
          )}
        </>
      ) : (
        <>
          {newInfo.email == "" ? (
            <>
              <Register registrationFunc={registrationFunc} />
              <button className="login" onClick={clickHandler}>
                back
              </button>
            </>
          ) : (
            <>
              <h1>You have been registered!</h1>
              <button className="login" onClick={clickHandler}>
                back
              </button>
            </>
          )}
          ;
        </>
      )}
      ;
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));

//export default Hello;
root.render(<Login />);
