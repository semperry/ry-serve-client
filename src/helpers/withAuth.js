import { useContext } from "react";

import { UserContext } from "../Components/UserProvider";

const withAuth = (authorizedRoles) => (ChildComponent) => (props) => {
	const { user } = useContext(UserContext);

	if (authorizedRoles.includes(user?.role)) {
		console.log("Authorized", user);
		return <ChildComponent {...props} />;
	} else {
		console.log("UnAuthorized", user);
		return "";
	}
};

export default withAuth;
