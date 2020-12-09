import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import TextError from './TextError';
import * as Yup from "yup";


const initialValues = {
	name: "",
	lastName: "",
	email: "",
	// comments: "",
	// address: ""
};

const validationSchema = Yup.object({
	name: Yup.string().required("Required"),
	lastName: Yup.string().required("Required"),
	email: Yup.string()
		.email("Invalid email address")
		.required("Required")
});

const onSubmit = values => {
};



const RegisterForm = () => {

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
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
					<ErrorMessage name="name" component={TextError} />
				</div>

				<div className="mt-3">
					<label
						className="mb-1"
						htmlFor="lastName">Last name</label>
					<Field name="lastName"
						placeholder="Enter your last name"
						className="form-control"
						type="text" />
					<ErrorMessage name="lastName" component={TextError} />
				</div>

				<div className="mt-3">
					<label
						className="mb-1"
						htmlFor="email">Email</label>
					<Field name="email"
						placeholder="Enter email"
						className="form-control"
						type="email" />
					<ErrorMessage name="email" component={TextError} />
				</div>


				{/* <div className="mt-3">
					<label
						className="mb-1"
						htmlFor="comments">Comments</label>
					<Field as="textarea"
						name="comments"
						placeholder="Enter comments"
						className="form-control" />
					<ErrorMessage name="comments" component={TextError} />
				</div> */}

				{/* <div className="mt-3">
					<label
						className="mb-1"
						htmlFor="address">Address</label>
					<Field name="address" >
						{props => {
							const { field, form, meta } = props;
							return (
								<div>
									<input className="form-control"
										type="text"
										placeholder="Enter address" {...field} />
									{meta.touched && meta.error ? <div>{meta.error}</div> : null}
								</div>
							)
						}}
					</Field>
					<ErrorMessage name="comments" />
				</div> */}

				<button className="btn btn-primary mt-4 btn-md">
					Register
				</button>

			</Form>
		</Formik>
	);
};


export default RegisterForm;
