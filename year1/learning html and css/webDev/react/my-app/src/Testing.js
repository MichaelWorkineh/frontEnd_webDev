import React, { useState } from "react";
function Testing({ login, error,clickHandler}) {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });
  const submitHandler = (e) => {
    e.preventDefault();
    login(details);
  };
  const clicked = () =>{
    clickHandler ();
  }
  return (
    <form onSubmit={submitHandler} className ="loginForm">
      <button className="registerButton" onClick={clicked}>
                Register
              </button>
      <div className="loginCard">
        <h1 className="greetings">Login</h1>
        <hr className="horizontalLine"></hr>
        {error != "" ? <div className="error">{error}</div> : ""}
        <div className="user">
          <input
            type="text"
            placeholder="user name"
            className="input"
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
            value={details.name}
          />
          <br></br>
          <input
            type="password"
            placeholder="password"
            className="input"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
          />
          <br></br>
          <input
            type="email"
            placeholder="email"
            className="input"
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            value={details.email}
          />
        </div>
        <input className="login" type="submit" value="LOGIN" />

      </div>
    </form>
  );
}

export default Testing;
