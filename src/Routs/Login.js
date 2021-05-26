import React, { useState, useContext, useEffect } from "react";

import { useHistory } from "react-router-dom";
import { AppContext } from "../Context/ContextProvider";
import '../Style/Login.css'
const Login = () => {
  const { doctors, addCurrentDoctor, currentDoctor } = useContext(AppContext);
  const [error, setError] = useState(false);
  const history = useHistory();
  const [loginForm, setLoginForm] = useState({
    userName: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginForm({
      ...loginForm,
      [name]: value,
    });
    setError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let onList = false;
    let userObj = {};
    if (loginForm.userName.length > 0 && loginForm.password.length > 0) {
      for (let i = 0; i < doctors.length; i++) {
        if (
          loginForm.userName === doctors[i].userName &&
          loginForm.password === doctors[i].password
        ) {
          onList = true;
          userObj = doctors[i];
          setError(false);
          break;
        } else {
          onList = false;
          setError(true);
        }
      }
      if (onList) {
        //user is on the list and correct inputs
        addCurrentDoctor(userObj);
        console.log(currentDoctor);
        history.push("/doctor");
      }
    } else {
      setError(true);
    }
  };
  useEffect(() => {
    localStorage.setItem("Doctors", JSON.stringify(doctors));
  });
  const bg = '/img/medicalLogin.jpg'
  return (
    <form className="login-container" onSubmit={handleSubmit} noValidate style={{ backgroundImage: `url(${bg})` }}>

      <h2 className="header">Login</h2>
      <div className="inputs1">
        <input
          className="inputDetails"
          type="text"
          name="userName"
          placeholder="User Name"
          value={loginForm.userName}
          onChange={handleChange}
        />
        <input
          className="inputDetails"
          type="password"
          placeholder="Password"
          name="password"
          value={loginForm.password}
          onChange={handleChange}
        />
      </div>
      {error && <p className="error-msg">Invalid Details...</p>}
      <div className="enter">
        <input type="submit" value="Enter" className="enter-btn" />
      </div>
    </form>
  );
};

export default Login;
