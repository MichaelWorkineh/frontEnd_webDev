import React, { useState } from "react";
function Registerer({ registrationFunc, clickHandler }) {
  const [registrationDetails, setDetails] = useState({
    id: "",
    fullName: "",
    email: "",
    password: "",
    sex: "",
    age: "",
    country: "",
  });
  const [conPassword, setConPassword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    if (
      registrationDetails.password.length >= 8 &&
      registrationDetails.password == conPassword
    ) {
      registrationFunc(registrationDetails);
    } else {
      //console.log(passwordState);
    }
  };
  const handleConPasswordChange = (event) => {
    setConPassword(event.target.value);
    console.log(conPassword);
  };
  const clicked = () => {
    clickHandler();
  };
  return (
    <div className="registrationScreen">
      <form onSubmit={submitHandler} className="RegisterationForm">
        <h1>Register</h1>
        <div className="inputBox">
          <div className="colomn1">
            <section className="inputRow">
              <text>name:</text>
              <input
                type="text"
                className="input"
                placeholder="full name"
                onChange={(e) =>
                  setDetails({
                    ...registrationDetails,
                    fullName: e.target.value,
                  })
                }
                value={registrationDetails.fullName}
              ></input>
            </section>
            <section className="inputRow">
              <text>email:</text>
              <input
                type="text"
                className="input"
                placeholder="email"
                onChange={(e) =>
                  setDetails({ ...registrationDetails, email: e.target.value })
                }
                value={registrationDetails.email}
              ></input>
            </section>
            <section className="inputRow">
              <text>ID:</text>
              <input
                type="text"
                className="input"
                placeholder="ID"
                onChange={(e) =>
                  setDetails({ ...registrationDetails, id: e.target.value })
                }
                value={registrationDetails.id}
              ></input>
            </section>
            <section className="inputRow">
              <text>age:</text>
              <input
                type="number"
                className="input"
                placeholder="age"
                onChange={(e) =>
                  setDetails({ ...registrationDetails, age: e.target.value })
                }
                value={registrationDetails.age}
              ></input>
            </section>
          </div>
          <div className="colomn2">
            <section className="inputRow">
              <text>sex:</text>
              <input
                type="text"
                className="input"
                placeholder="sex"
                onChange={(e) =>
                  setDetails({ ...registrationDetails, sex: e.target.value })
                }
                value={registrationDetails.sex}
              ></input>
            </section>
            <section className="inputRow">
              <text>password:</text>
              <input
                type="text"
                className="input"
                placeholder="password"
                onChange={(e) =>
                  setDetails({
                    ...registrationDetails,
                    password: e.target.value,
                  })
                }
                value={registrationDetails.password}
              ></input>
              {registrationDetails.password.length < 8 ? (
                <div className="registerationError">password is to short</div>
              ) : (
                ""
              )}
            </section>
            <section className="inputRow">
              <text>confirm password:</text>
              <input
                type="text"
                className="input"
                placeholder="confirm password"
                onChange={handleConPasswordChange}
                value={conPassword}
              ></input>
            </section>
            {registrationDetails.password != conPassword ? (
              <div className="registerationError">password does not match</div>
            ) : (
              ""
            )}
            <section className="inputRow">
              <text>country:</text>
              <input
                type="text"
                className="input"
                placeholder="country"
                onChange={(e) =>
                  setDetails({
                    ...registrationDetails,
                    country: e.target.value,
                  })
                }
                value={registrationDetails.country}
              ></input>
            </section>
          </div>
        </div>
        <section className="title">
          <section className="submitionRow">
            <input className="submitButton" type="submit" value="submit" />
          </section>
          <button className="back" onClick={clickHandler}>
            back
          </button>
        </section>
      </form>
    </div>
  );
}

export default Registerer;
