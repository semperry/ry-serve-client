import { Route, Switch } from "react-router-dom";

import Login from "../Pages/Login";

export default function LoginContainer(props) {
	return (
		<Switch>
			<Route path="/login" render={(props) => <Login {...props} />} />
		</Switch>
	);
}
