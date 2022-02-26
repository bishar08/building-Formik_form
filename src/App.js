import React from 'react'
// TODO: import useFormik from formik library
import { useFormik } from 'formik'

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    onSubmit: (event) => {
      alert('Login Successful')
    },
    validate: (values) => {
      let errors = {}
      if (!values.name) errors.name = 'Field required'
      if (!values.email) {
        errors.email = 'Required'
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = 'Username should be an email'
      }
      if (!values.password) errors.password = 'Field required'
      return errors
    },
  })

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Name:</div>
        <input
          type="text"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {formik.errors.name ? (
          <div style={{ color: 'red' }}>{formik.errors.name}</div>
        ) : null}
//         <div>Email:</div>
//         <input
//           id="emailField"
//           type="text"
//           name="email"
//           onChange={formik.handleChange}
//           value={formik.values.email}
//         />
//         {formik.errors.email ? (
//           <div id="emailError" style={{ color: 'red' }}>
//             {formik.errors.email}
//           </div>
//         ) : null}
        <div>Password:</div>
        <input
          id="pswField"
          type="text"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <br />
        {formik.errors.password ? (
          <div id="pswError" style={{ color: 'red' }}>
            {formik.errors.password}
          </div>
        ) : null}
        <button id="submitBtn" type="submit">
          Submit
        </button>
      </form>
    </div>
  )
}

export default App
