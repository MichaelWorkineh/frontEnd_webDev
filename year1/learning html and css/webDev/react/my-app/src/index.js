import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Testing from "./Testing";
import Register from "./register";
import axios from 'axios';

//--------------------------------------------------
function Login() {
  const [peopleData, setPeopleData] = useState([null]);
  useEffect(() => {
    fetch("http://localhost:9000/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setPeopleData(data);
      });
  }, []);
  function Read(){
    useEffect(() => {
      fetch("http://localhost:9000/users")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setPeopleData(data);
        });
    }, []);
  }
  //-----------------------------------------------------
  const [pageState, setPageState] = useState(0);
  const clickHandler = () => {
    if (pageState == 0) {
      setPageState(1);
      console.log(peopleData);
    } else {
      setPageState(0);
      console.log(peopleData);
    }
    console.log(pageState);
  };
  const registeredInfo = {
    name: "Mark Fishback",
    password: "blood shot eyes for my birthday",
    email: "markipler@gmail.com",
  };
  const [user, setUsername] = useState({
    fullName: "",
    password: "",
    email: "",
    sex: "",
    country: "",
    id: "",
  });
  const [error, setError] = useState("");
  const [newInfo, setnewInfo] = useState({
    fullName: "",
    password: "",
    email: "",
    sex: "",
    country: "",
    id: "",
  });
  const registrationFunc = async (registrationDetails) => {
    console.log("from registrationFunc,");
    console.log(registrationDetails);
    if (registrationDetails.email !== "") {
      const updatedArray = [...peopleData, registrationDetails];
      setPeopleData(updatedArray);
      console.log("the updated json array:");
      console.log(updatedArray);
      setnewInfo(registrationDetails);
      try {
        // Make a POST request to the server
        const response = await axios.post('http://localhost:5000/modify', { newPeopleData: updatedArray });
  
        // Check the response for success
        if (response.data.success) {
          //setSuccess(true);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
    console.log(peopleData.length);
  };  

  const login = (details) => {
    console.log(details);
    console.log(peopleData);
    for (let i = 0; i < peopleData.length; i++) {
      console.log(i);
      if (
        peopleData[i] &&
        details.email == peopleData[i].email &&
        details.fullName == peopleData[i].fullName &&
        details.password == peopleData[i].password
      ) {
        setUsername({
          fullName: details.fullName,
          email: details.email,
          sex: peopleData[i].sex,
          age: peopleData[i].age,
          country: peopleData[i].country,
          id: peopleData[i].id,
        });
        break;
      } else {
        console.log("info does not match");
        setError("*! info does not match !*");
      }
    }
  };
  const logout = () => {
    setUsername({
      fullName: "",
      email: "",
    });
  };

  const clearRegister = () => {
    setnewInfo({
      fullName: "",
      password: "",
      email: "",
      sex: "",
      country: "",
      id: "",
    });

    setPageState(0);
  };
  return (
    <>
      {pageState == 0 ? (
        <>
          {user.email != "" ? (
            <section className="profilePageScreen">
              <div className="ProfilePage">
                <div className="profilelogout">
                  <h1 className="profile">
                    {user.fullName[0]}
                    {user.fullName[1]}
                  </h1>
                </div>
                <div className="details">
                  <section>Name: {user.fullName}</section>
                  <section>email: {user.email}</section>
                  <section>sex: {user.sex}</section>
                  <section>age: {user.age}</section>
                  <section>id: {user.id}</section>
                  <section>country: {user.country}</section>
                </div>
                <button onClick={logout} className="logout">
                  logout
                </button>
              </div>
            </section>
          ) : (
            <div>
              {Read}
              <Testing
                login={login}
                error={error}
                clickHandler={clickHandler}
              />
            </div>
          )}
        </>
      ) : (
        <>
          {newInfo.email == "" ? (
            <>
              <Register
                registrationFunc={registrationFunc}
                clickHandler={clickHandler}
                className="registrationScreen"
              />
            </>
          ) : (
            <>
              <section className="confirmationScreen">
                <section className="confirmaionCard">
                  <h1>Confirmed!</h1>
                  <hr></hr>
                  <p>You have been successfuly registered.</p>
                  <button className="login" onClick={clearRegister}>
                    back
                  </button>
                </section>
              </section>
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
