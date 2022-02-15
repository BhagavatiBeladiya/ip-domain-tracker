import React from "react";
import SawoLogin from 'sawo-react';
import "../style/login.css"

const Login = () => {

  function sawoLoginCallback(payload) {
    sessionStorage.setItem("token", payload.verification_token);
    window.location.href = "/";
  }

  const sawoConfig = {
    onSuccess: sawoLoginCallback, //required
    identifierType: 'email', //required must be one of: 'email', 'phone_number_sms',
    apiKey: 'YOUR API KEY', //required get it from sawo dev.sawolabs.com,
    containerHeight: '500px', //required the login container height, default is 300px
  }

  return (

    <div className="containerStyle">
      <section>
        <h2 className="title">Login</h2>
        <div className="formContainer" id="sawo-container">
          <SawoLogin config={sawoConfig} />
        </div>

      </section>
    </div>

  );
}

export default Login;
