import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

export default function SigninForm() {
  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
        }}
        onSubmit={(values, { setSubmitting }) => {

        }}
      >
        <form action="" autoComplete="off">
          <p className="mb10">
            <label>Email</label>
            <input type="text" placeholder="email" name="email"></input>
          </p>
          <p className="mb10">
            <label>Password</label>
            <input type="text" placeholder="password" name="password" />
          </p>
          <p>
            <button>Submit</button>
          </p>
        </form>
      </Formik>
    </div>
  );
}
