import { useContext } from "react";
import { Redirect } from "react-router-dom";

import { UserContext } from "../Components/UserProvider";

const withAuth =
	(authorizedRoles) =>
	({ children, withRedirect }) => {
		const { user, authIsLoading } = useContext(UserContext);

		if (authIsLoading) return <div>...Loading</div>;
		if (authorizedRoles.includes(user?.role)) {
			return children;
		} else {
			return withRedirect ? <Redirect to="/" /> : "";
		}
	};

export default withAuth;
