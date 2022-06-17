import * as Yup from 'yup';

const firstNameValidator = Yup.string()
  .max(15, 'Must be 15 characters or less')
  .required('Required')

const lastNameValidator = Yup.string()
  .max(20, 'Must be 20 characters or less')
  .required('Required')

const emailValidator = Yup.string()
  .email('Invalid email address')
  .required('Required')

const acceptedTermsValidator = Yup.boolean()
  .required('Required')
  .oneOf([true], 'You must accept the terms and conditions.')

const jobTypeValidator = Yup.string()
  .oneOf(
    ['designer', 'development', 'product', 'other'],
    'Invalid Job Type'
  )
  .required('Required')

export const signUpFormValidator = Yup.object({
  firstName: firstNameValidator,
  lastName: lastNameValidator,
  email: emailValidator,
  acceptedTerms: acceptedTermsValidator,
  jobType: jobTypeValidator,
})