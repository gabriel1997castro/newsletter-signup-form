import { createRoot } from 'react-dom/client';
import "./styles.css";
import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { TextInput } from './components/TextInput';
import { Checkbox } from './components/Checkbox';
import { Select } from './components/Select';




// And now we can use these
const SignupForm = () => {
  return (
    <>
      <h1>Subscribe!</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          acceptedTerms: false, // added for our checkbox
          jobType: '', // added for our select
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
          lastName: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
          acceptedTerms: Yup.boolean()
            .required('Required')
            .oneOf([true], 'You must accept the terms and conditions.'),
          jobType: Yup.string()
            .oneOf(
              ['designer', 'development', 'product', 'other'],
              'Invalid Job Type'
            )
            .required('Required'),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
            resetForm();
          }, 2000);
        }}
      >
        {formik => (
          <Form>
            <TextInput
              label="First Name"
              name="firstName"
              type="text"
              placeholder="Jane"
            />

            <TextInput
              label="Last Name"
              name="lastName"
              type="text"
              placeholder="Doe"
            />

            <TextInput
              label="Email Address"
              name="email"
              type="email"
              placeholder="jane@formik.com"
            />

            <Select label="Job Type" name="jobType">
              <option value="">Select a job type</option>
              <option value="designer">Designer</option>
              <option value="development">Developer</option>
              <option value="product">Product Manager</option>
              <option value="other">Other</option>
            </Select>

            <Checkbox name="acceptedTerms">
              I accept the terms and conditions
            </Checkbox>

            <button disabled={!formik.isValid || formik.isSubmitting} type="submit">Submit</button>
            <button type="reset">Clear form</button>
          </Form>
        )}
      </Formik>
    </>
  );
};
function App() {
  return <SignupForm />;
}

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App tab="home" />)
