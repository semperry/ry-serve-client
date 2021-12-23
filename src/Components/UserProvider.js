import { useEffect, useState, createContext, useCallback } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [authIsLoading, setAuthIsLoading] = useState(true);
	const history = useHistory();

	const checkLogin = useCallback(() => {
		fetch("http://localhost:4000/api/v1/auth/cl", {
			method: "GET",
			credentials: "include",
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.user) {
					setUser(data.user);
					history.push("/browse");
				} else {
					setUser(null);
				}
				setAuthIsLoading(false);
			})
			.catch((err) => {
				console.error("Check Login Error: ", err);
				setAuthIsLoading(false);
				setUser(null);
			});
	}, [history]);

	const handleLogout = () => {
		setAuthIsLoading(true);

		fetch("http://localhost:4000/api/v1/auth/logout", {
			method: "GET",
			credentials: "include",
		})
			.then(() => {
				setAuthIsLoading(false);
				setUser(null);
				history.push("/login");
			})
			.catch((err) => {
				setAuthIsLoading(false);
				console.log("Logout Error: ", err);
			});
	};

	const userState = {
		user,
		setUser,
		authIsLoading,
		setAuthIsLoading,
		checkLogin,
		handleLogout,
	};

	useEffect(() => {
		checkLogin();
	}, [checkLogin]);

	return (
		<UserContext.Provider value={userState}>{children}</UserContext.Provider>
	);
};

export default UserProvider;
