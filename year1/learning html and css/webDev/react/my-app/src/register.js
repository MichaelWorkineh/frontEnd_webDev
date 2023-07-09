import React, { useState } from "react";
function Registerer({ registrationFunc }) {
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
  return (
    <form onSubmit={submitHandler}>
      <h1>register</h1>
      <section>name:</section>
      <input
        type="text"
        className="fullname"
        placeholder="full name"
        onChange={(e) =>
          setDetails({ ...registrationDetails, name: e.target.value })
        }
        value={registrationDetails.name}
      ></input>
      <section>email:</section>
      <input
        type="text"
        className="email"
        placeholder="email"
        onChange={(e) =>
          setDetails({ ...registrationDetails, email: e.target.value })
        }
        value={registrationDetails.email}
      ></input>
      <section>ID:</section>
      <input
        type="text"
        className="id"
        placeholder="ID"
        onChange={(e) =>
          setDetails({ ...registrationDetails, id: e.target.value })
        }
        value={registrationDetails.id}
      ></input>
      <section>age: </section>
      <input
        type="number"
        className="age"
        placeholder="age"
        onChange={(e) =>
          setDetails({ ...registrationDetails, age: e.target.value })
        }
        value={registrationDetails.age}
      ></input>
      <section>sex: </section>
      <input
        type="text"
        className="sex"
        placeholder="sex"
        onChange={(e) =>
          setDetails({ ...registrationDetails, sex: e.target.value })
        }
        value={registrationDetails.sex}
      ></input>
      <section>password:</section>
      <input
        type="text"
        className="password"
        placeholder="password"
        onChange={(e) =>
          setDetails({ ...registrationDetails, password: e.target.value })
        }
        value={registrationDetails.password}
      ></input>
      <section>country:</section>
      <input
        type="text"
        className="country"
        placeholder="country"
        onChange={(e) =>
          setDetails({ ...registrationDetails, country: e.target.value })
        }
        value={registrationDetails.country}
      ></input>
      <input className="login" type="submit" value="submit" />
    </form>
  );
}

export default Registerer;
