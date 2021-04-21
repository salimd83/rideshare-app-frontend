import { Formik, ErrorMessage, Form, Field } from "formik";
import { useHistory, useLocation } from "react-router-dom";
import * as yup from "yup";
import api from "../helpers/api";

const schema = yup.object().shape({
  name: yup.string().required().min(4),
  email: yup.string().required().email(),
  password: yup
    .string()
    .required()
    .matches(
      new RegExp(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/
      ),
      "Password must be between 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character."
    ),
  repassword: yup
    .string()
    .required()
    .oneOf([yup.ref("password")], "Password doesn't match"),
});

function RegistrationForm() {
  const history = useHistory();
  const location = useLocation();

  async function sendVerificationEmail(redirect, redirect2) {
    await api("post", "/users/verification", { redirect, redirect2 }, true);
    history.replace("/verify");
  }

  const handleSubmit = async (values, { setSubmitting, setFieldError }) => {
    try {
      const data = await api("post", "/users", values);
      localStorage.setItem("token", data.token);
      sendVerificationEmail(
        `${process.env.REACT_APP_BASE_URL}/${location.pathname}`,
        `${process.env.REACT_APP_BASE_URL}/verify`
      );
    } catch (error) {
      console.log(error);
      if (error.message === "duplicate email.")
        setFieldError("email", "Email is already in use.");
    }
    setSubmitting(false);
  };

  return (
    <div>
      <h1>Create new account</h1>
      <Formik
        initialValues={{ name: "", email: "", password: "", repassword: "" }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="field">
              <label htmlFor="name-input">Full name</label>
              <Field type="text" name="name" id="name-input" />
              <ErrorMessage name="name" component="span" className="error" />
            </div>
            <div className="field">
              <label htmlFor="email-input">Email</label>
              <Field type="text" name="email" id="email-input" />
              <ErrorMessage name="email" component="span" className="error" />
            </div>
            <div className="field">
              <label htmlFor="password-input">Password</label>
              <Field type="text" name="password" id="password-input" />
              <ErrorMessage
                name="password"
                component="span"
                className="error"
              />
            </div>
            <div className="field">
              <label htmlFor="repassword-input">Verify Password</label>
              <Field type="text" name="repassword" id="repassword-input" />
              <ErrorMessage
                name="repassword"
                component="span"
                className="error"
              />
            </div>
            <div className="field">
              <div>
                <button type="submit" disabled={isSubmitting}>
                  Save
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default RegistrationForm;
