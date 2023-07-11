import React, { useState } from "react";
function Registerer({ registrationFunc, clickHandler }) {
  const [registrationDetails, setDetails] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    sex: "",
    age: "",
    country: "",
  });
  const submitHandler = (e) => {
    e.preventDefault();
    registrationFunc(registrationDetails);
  };
  const clicked = () => {
    clickHandler();
  };
  return (<div className="registrationScreen">
    <form onSubmit={submitHandler} className="RegisterationForm">
      <section className="title"><h1>Register</h1><button className="back" onClick={clickHandler}>
          back
        </button>
        </section>
      <section className="inputRow">
        <text>name:</text>
        <input
          type="text"
          className="input"
          placeholder="full name"
          onChange={(e) =>
            setDetails({ ...registrationDetails, name: e.target.value })
          }
          value={registrationDetails.name}
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
            setDetails({ ...registrationDetails, password: e.target.value })
          }
          value={registrationDetails.password}
        ></input>
      </section>
      <section className="inputRow">
        <text>country:</text>
        <input
          type="text"
          className="input"
          placeholder="country"
          onChange={(e) =>
            setDetails({ ...registrationDetails, country: e.target.value })
          }
          value={registrationDetails.country}
        ></input>
      </section>
      <section className="submitionRow">
        <input className="submitButton" type="submit" value="submit" />
      </section>
    </form>
    </div>
  );
}

export default Registerer;
