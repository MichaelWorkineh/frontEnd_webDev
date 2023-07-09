import React, { useState } from "react";
function Testing({ login, error}) {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });
  const submitHandler = (e) => {
    e.preventDefault();
    login(details);
  };
  return (
    <form onSubmit={submitHandler} className ="loginForm">
      <div className="loginCard">
        <h1 className="greetings">Login</h1>
        <hr className="horizontalLine"></hr>
        {error != "" ? <div className="error">{error}</div> : ""}
        <div className="user">
          <input
            type="text"
            placeholder="user name"
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
            value={details.name}
          />
          <br></br>
          <input
            type="password"
            placeholder="password"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
          />
          <br></br>
          <input
            type="email"
            placeholder="email"
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            value={details.email}
          />
        </div>
        <input className="login" type="submit" value="LOGIN" />

        <section className="forgotpassword">
          <a href="www.goolge.com"> forgot your password?</a>
        </section>
      </div>
    </form>
  );
}

export default Testing;
