import { createRoot } from 'react-dom/client';
import "./styles.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from 'yup';

const SignupForm = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        comments: ""
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        lastName: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
        email: Yup.string()
          .email("Invalid email address")
          .required("Required"),
        comments: Yup.string()
          .max(200, "Must be 200 characters or less")
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form>
        <label htmlFor="firstName">First Name</label>
        <Field name="firstName" type="text" className="form-input" />
        <ErrorMessage name="firstName" />

        <label htmlFor="lastName">Last Name</label>
        <Field name="lastName" type="text" />
        <ErrorMessage name="lastName" />

        <label htmlFor="email">Email Address</label>
        <Field name="email" type="email" />
        <ErrorMessage name="email" />

        <label htmlFor="comments">Comments</label>
        <Field name="comments" as="textarea" className="form-textarea" />
        <ErrorMessage name="comments" />

        <label htmlFor="notifications">Do you accept to receive email notifications?</label>
        <Field name="notifications" as="select" className="select-notifications">
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </Field>
        <br />
        <button type="submit">Submit</button>
      </Form>
    </Formik >
  );
};

function App() {
  return <SignupForm />;
}

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App tab="home" />)
