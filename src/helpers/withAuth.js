import { useContext } from "react";
import { Redirect } from "react-router-dom";

import { UserContext } from "../Components/UserProvider";

const withAuth =
	(authorizedRoles) =>
	({ children, withRedirect }) => {
		const { user } = useContext(UserContext);

		if (authorizedRoles.includes(user.role)) {
			return children;
		} else {
			return withRedirect ? <Redirect to={withRedirect} /> : "";
		}
	};

export default withAuth;
