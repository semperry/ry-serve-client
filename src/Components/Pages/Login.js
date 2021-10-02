import { useState } from "react";

// position absolute, top 7is px
function Login(props) {
	const [emailOrUser, setEmailOrUser] = useState("");
	const [password, setPassword] = useState("");

	return (
		<div>
			<div>Sign In</div>
			<div>
				<form>
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
					</div>
				</form>
			</div>
		</div>
	);
}

export default Login;
