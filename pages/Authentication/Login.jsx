import React, { useEffect, useState } from 'react';
import { withRouter, Link } from 'react-router-dom';


const LoginPage = () => {
	// const { history, authData, errorMessage } = props
	// const [isSent, setSentStatus] = useState(false)

	// function onFormSubmit(event, values) {
	// 	const data = {
	// 		emailLogin: values
	// 	}
	// 	setSentStatus(true)
	// 	props.loginUser(data);
	// }

	// useEffect(() => {
	// 	if (errorMessage) {
	// 		setSentStatus(false)
	// 	}
	// 	if (authData !== null) {
	// 		history.push('/dashboard')
	// 	}
	// }, [authData, history, errorMessage])

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
