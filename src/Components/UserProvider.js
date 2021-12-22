import { useEffect, useState, createContext, useRef, useCallback } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [authIsLoading, setAuthIsLoading] = useState(true);
	const history = useHistory();
	const userRef = useRef(null);

	const checkLogin = useCallback(() => {
		fetch("http://localhost:4000/api/v1/auth/cl", {
			method: "GET",
			credentials: "include",
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.user) {
					setUser(data.user);
					userRef.current = true;
				} else {
					userRef.current = null;
				}
				setAuthIsLoading(false);
			})
			.catch((err) => {
				console.error("Check Login Error: ", err);
				setAuthIsLoading(false);
				setUser(null);
				userRef.current = null;
			});
	}, []);

	const handleLogout = () => {
		setAuthIsLoading(true);

		fetch("http://localhost:4000/api/v1/auth/logout", {
			method: "GET",
			credentials: "include",
		})
			.then(() => {
				setAuthIsLoading(false);
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
		if (!userRef.current) {
			checkLogin();
		} else {
			setUser(null);
			setAuthIsLoading(false);
		}
	}, [checkLogin]);

	return (
		<UserContext.Provider value={userState}>{children}</UserContext.Provider>
	);
};

export default UserProvider;
