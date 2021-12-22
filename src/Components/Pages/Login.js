import { useContext, useState } from "react";

import { UserContext } from "../UserProvider";

function Login(props) {
	const { setUser, setAuthIsLoading } = useContext(UserContext);
	const [emailOrUser, setEmailOrUser] = useState("");
	const [password, setPassword] = useState("");
	const [errorText, setErrorText] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		setAuthIsLoading(true);

		fetch("http://localhost:4000/api/v1/auth/login", {
			credentials: "include",
			body: JSON.stringify({ email: emailOrUser, password }),
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((res) => {
				if (res.status < 400) return res.json();
				else throw Error("Login Error");
			})
			.then((data) => {
				setUser(data.user);
				setAuthIsLoading(false);
			})
			.then(() => props.history.push("/browse"))
			.catch((err) => {
				setErrorText("Oops, Something went wrong");
				setAuthIsLoading(false);
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
