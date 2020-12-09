import React from 'react';
import { useFormik } from "formik";


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

	const formik = useFormik({
		initialValues,
		validate,
		onSubmit
	});

	console.log(formik.touched)


	return (
		<form
			onSubmit={formik.handleSubmit}
			className="form-group mt-5">

			<div className="mt-3">
				<label
					className="mb-1"
					htmlFor="name">First name </label>
				<input name="name"
					{...formik.getFieldProps('name')}
					placeholder="Enter your name"
					className="form-control"
					type="text" />
				{formik.touched.name && formik.errors.name ? <div className="text-danger">{formik.errors.name}</div> : null}
			</div>

			<div className="mt-3">
				<label
					className="mb-1"
					htmlFor="lastName">Last name</label>
				<input name="lastName"
					{...formik.getFieldProps('lastName')}
					placeholder="Enter your last name"
					className="form-control"
					type="text" />
				{formik.touched.lastName && formik.errors.lastName ? <div className="text-danger">{formik.errors.lastName}</div> : null}
			</div>

			<div className="mt-3">
				<label
					className="mb-1"
					htmlFor="email">Email</label>
				<input name="email"
					{...formik.getFieldProps('email')}
					placeholder="Enter email"
					className="form-control"
					type="email" />
				{formik.touched.email && formik.errors.email ? <div className="text-danger">{formik.errors.email}</div> : null}
			</div>


			<button className="btn btn-primary mt-4 btn-md">
				Register
			</button>

		</form>
	);
};


export default RegisterForm;
