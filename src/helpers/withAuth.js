import { useContext } from "react";

import { UserContext } from "../Components/Auth/DefaultContainer";

const withAuth = (authorizedRoles) => (ChildComponent) => (props) => {
	const { state } = useContext(UserContext);

	if (authorizedRoles.includes(state.role)) {
		return <ChildComponent {...props} />;
	} else {
		return "";
	}
};

export default withAuth;
