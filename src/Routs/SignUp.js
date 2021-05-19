import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { AppContext } from "../Context/ContextProvider";
import "../Style/SignUp.css";


const SignUp = () => {
  const { addDoctor, doctors, currectUserName, currectPassword } =
    useContext(AppContext);

  const [error, setError] = useState(false);
  let history = useHistory();
  const [signupForm, setSignupForm] = useState({
    userName: "",
    password: "",
    name: "",
    id: "",
    license: "",
    patients: [],
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupForm({
      ...signupForm,
      [name]: value,
    });
    setError(false);
  };
  const handleSubmit = (e) => {
    debugger;
    e.preventDefault();
    let flag = true;
    if (
      !currectUserName(signupForm.userName) ||
      !currectPassword(signupForm.password) ||
      signupForm.id.length !== 9 ||
      signupForm.license.length !== 6
    ) {
      setError(true);
      flag = false;
    } else {
      setError(false);
      flag = true;
    }
    for (let i = 0; i < doctors.length; i++) {
      if (signupForm.userName === doctors[i]) {
        setError(true);
        flag = false;
        alert("Doctor already registerd!");
        history.push("/login");
      } else {
        setError(false);
        flag = true;
      }
    }
    if (flag) {
      addDoctor(signupForm);
      setError(false);
      history.push("/login");
    } else {
      setError(true);
    }
  };
  const bg = '/img/medicalSignUp.jpg'

  return (
    <>
      <form className="signup-container" onSubmit={handleSubmit} noValidate style={{ backgroundImage: `url(${bg})` }}>
        <h2 style={{ color: "white" }}>Sign up</h2>
        <div className="inputs1">
          <input
            className="inputDetails"
            type="text"
            placeholder="User Name"
            name="userName"
            value={signupForm.userName}
            onChange={handleChange}
          />

          <input
            className="inputDetails"
            type="password"
            placeholder="Password"
            name="password"
            value={signupForm.password}
            onChange={handleChange}
          />
          <input
            className="inputDetails"
            type="text"
            placeholder="Full Name"
            name="name"
            value={signupForm.name}
            onChange={handleChange}
          />
          <input
            className="inputDetails"
            type="text"
            placeholder="ID"
            name="id"
            value={signupForm.id}
            onChange={handleChange}
          />
          <input
            className="inputDetails"
            type="text"
            placeholder="License Number"
            name="license"
            value={signupForm.license}
            onChange={handleChange}
          />
        </div>
        {error && <p>Invalid Details...</p>}
        <div className="enter">
          <input type="submit" value="Register" className="enter-btn" />
        </div>
      </form>
    </>
  );
};

export default SignUp;
