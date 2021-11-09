import { useState } from "react";

// position absolute, top 7is px
function Login(props) {
	const [emailOrUser, setEmailOrUser] = useState("");
	const [password, setPassword] = useState("");
	const [errorText, setErrorText] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		fetch("http://localhost:4000/api/v1/auth/login", { credentials: "include" })
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
			})
			.catch((err) => {
				setErrorText("Oops, Something went wrong");
				console.error("Login Error: ", err);
			});
	};

	return (
		<>
			<div className="login-header">RyFlix Logo</div>

			<div className="login-form-container">
				<div>Sign In</div>
				<div>
					<form onSubmit={handleSubmit}>
						<div>
							<input
								type="text"
								name="userLoginId"
								onChange={(e) => setEmailOrUser(e.target.value)}
								autoComplete="email"
							/>
							<label htmlFor="userLoginId">Email or Username</label>
						</div>

						<div>
							<input
								type="password"
								name="password"
								onChange={(e) => setPassword(e.target.value)}
								autoComplete="password"
							/>
							<label htmlFor="password">Email or Username</label>
							<div className="error-text-wrapper">{errorText}</div>
						</div>
						<div>
							<button type="submit">Sign In</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}

export default Login;
