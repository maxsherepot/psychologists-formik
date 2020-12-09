import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";



const initialValues = {
	name: "",
	lastName: "",
	email: ""
};

const validate = values => {
	let errors = {};

	if (!values.name) {
		errors.name = "Required"
	}
	else if (values.name.length < 4) {
		errors.name = "Name is too short"
	}

	if (!values.lastName) {
		errors.lastName = "Required"
	};

	if (!values.email) {
		errors.email = "Required"
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = 'Invalid email address';
	};

	return errors;
};

const onSubmit = values => {
};



const RegisterForm = () => {

	//	console.log(formik.touched)

	return (
		<Formik
			initialValues={initialValues}
			validate={validate}
			onSubmit={onSubmit}>

			<Form className="form-group mt-5">

				<div className="mt-3">
					<label
						className="mb-1"
						htmlFor="name">First name </label>
					<Field name="name"
						placeholder="Enter your name"
						className="form-control"
						type="text" />
					<ErrorMessage name="name" />
				</div>

				<div className="mt-3">
					<label
						className="mb-1"
						htmlFor="lastName">Last name</label>
					<Field name="lastName"
						placeholder="Enter your last name"
						className="form-control"
						type="text" />
					<ErrorMessage name="lastName" />
				</div>

				<div className="mt-3">
					<label
						className="mb-1"
						htmlFor="email">Email</label>
					<Field name="email"
						placeholder="Enter email"
						className="form-control"
						type="email" />
					<ErrorMessage name="email" />
				</div>

				<button className="btn btn-primary mt-4 btn-md">
					Register
				</button>

			</Form>
		</Formik>
	);
};


export default RegisterForm;
