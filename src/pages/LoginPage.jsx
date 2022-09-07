import React from "react";
import FormLog from "../components/FormLog";
import imgLogin from "../images/login.png";

import "../pages/styles/LoginPage.css";

const LoginPage = () => {
  return (
    <div className="body-log">
      <div className="img-log">
        <img src={imgLogin} alt="Login" />
      </div>
      <FormLog />
    </div>
  );
};

export default LoginPage;
