import { Formik, ErrorMessage, Form, Field } from "formik";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required().min(4),
  email: yup.string().required().email(),
  password: yup.string().required().min(8),
  repassword: yup
    .string()
    .required()
    .oneOf([yup.ref("password")], "Password doesn't match"),
});

function RegistrationForm() {
  return (
    <div className="page">
      <h1>Create new account</h1>
      <Formik
        initialValues={{ name: "", email: "", password: "", repassword: "" }}
        validationSchema={schema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 600);
        }}
      >
        {({ values, handleChange, handleBlur, isSubmitting }) => (
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
              <input
                type="text"
                name="repassword"
                id="repassword-input"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.repassword}
              />
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
