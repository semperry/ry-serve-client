import { useContext, useState } from "react";

import Footer from "../Navigation/Footer";
import { UserContext } from "../UserProvider";
import bgImage from "../../assets/images/nfloginbground.jpg";

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
				setUser(null);
				setAuthIsLoading(false);
				console.error("Login Error: ", err);
			});
	};

	return (
		<div className="login-wrapper">
			<div className="login-wrapper-background">
				<img src={bgImage} alt="Background" />
			</div>
			<div className="login-header">
				<h1>RyServe</h1>
			</div>

			<div className="login-form-container">
				<h1>Sign In</h1>
				<form className="login-form" onSubmit={handleSubmit}>
					<div className="login-input">
						<input
							type="text"
							name="userLoginId"
							value={emailOrUser}
							onChange={(e) => setEmailOrUser(e.target.value)}
							autoComplete="email"
							placeholder="Email or Username"
						/>
						{/* <label className="place-label" htmlFor="userLoginId">
							Email or Username
						</label> */}
					</div>

					<div className="login-input">
						<input
							type="password"
							name="password"
							onChange={(e) => setPassword(e.target.value)}
							autoComplete="password"
							placeholder="Password"
						/>
						{/* <label className="place-label" htmlFor="password">
							Password
						</label> */}
						<div className="error-text-wrapper">{errorText}</div>
					</div>

					<button className="btn login-btn btn-submit" type="submit">
						Sign In
					</button>
				</form>
			</div>

			<Footer />
		</div>
	);
}

export default Login;
