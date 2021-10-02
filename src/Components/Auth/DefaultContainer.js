import { createContext, useReducer } from "react";
import { Switch, Route } from "react-router-dom";

import withAuth from "../../helpers/withAuth";

const Admin = withAuth(["super-user", "admin"]);
const SuperUser = withAuth(["super-user"]);

const AdminRoute = Admin(Route);
const SuperUserRoute = SuperUser(Route);

function Header(props) {
	return (
		<div>
			<div>Logo</div>
			<div>Link Link Link</div>
			<div>Profile info</div>
		</div>
	);
}

function Browse() {
	return (
		<div>
			<h1>Browse Media</h1>
		</div>
	);
}

const userState = {
	role: "admin",
};

const userReducer = (state, action) => {
	switch (action.type) {
		case "setUser":
			return { ...state, ...action.payload };
		default:
			return state;
	}
};

export const UserContext = createContext();

function Add() {
	return (
		<div>
			<h1>Add a user</h1>
		</div>
	);
}

function NoMatch() {
	return (
		<div>
			<h1>Oops, 404</h1>
		</div>
	);
}

export default function DefaultContainer(props) {
	const [state, dispatch] = useReducer(userReducer, userState);

	return (
		<div className="container">
			<UserContext.Provider value={{ state, dispatch }}>
				<Route path="/" render={(iprops) => <Header {...iprops} />} />
				<div className="body-wrapper">
					<Switch>
						<Route path="/browse" component={Browse}></Route>
						<SuperUserRoute path="/add-user" component={Add} />
						<Route component={NoMatch} />
					</Switch>
				</div>
			</UserContext.Provider>
		</div>
	);
}
