import { createContext, useReducer } from "react";
import { Switch, Route } from "react-router-dom";

import userReducer from "../../actions/reducers/userReducer";
import { userState } from "../../actions/store/globalState";
import Header from "../Navigation/Header";
import Browse from "../Pages/Browse";
import NoMatch from "../Pages/NoMatch";

export const UserContext = createContext();

export default function DefaultContainer(props) {
	const [state, dispatch] = useReducer(userReducer, userState);

	return (
		<div className="container">
			<UserContext.Provider value={{ state, dispatch }}>
				<Route path="/" render={(iprops) => <Header {...iprops} />} />
				<div className="body-wrapper">
					<Switch>
						<Route path="/browse" component={Browse}></Route>
						<Route component={NoMatch} />
					</Switch>
				</div>
			</UserContext.Provider>
		</div>
	);
}
