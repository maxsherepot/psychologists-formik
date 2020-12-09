import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from "formik";

const initialValues = {

};

const LoginPage = () => {

	return (
		<div className="container d-flex flex-column">
			<h1>Login Page</h1>

			<div className="form-group">
				<label for="email"> Email</label>
				<input name="email"
					placeholder="Enter email"
					className="form-control"
					type="email" />
			</div>

			<button className="btn btn-primary">
				Enter
			</button>

			<Link to="/passwordrecovery">
				<span> Forgot your password?</span>
			</Link>

		</div>
	);
};


export default LoginPage;
