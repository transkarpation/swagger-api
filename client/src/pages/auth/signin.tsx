import React from "react";
import SigninForm from "../../components/auth/signinForm";

export default function Signin() {
  return (
    <div className="auth-form">
      <h4 className="text-center text-upper">Signin</h4>
      <SigninForm></SigninForm>
    </div>
  );
}
