// TODO:
// Admin Page
// CRUD Videos (How do we upload as well?)
// Filter Genres
import { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { UserContext } from "./Components/UserProvider";
import DefaultContainer from "./Components/Auth/DefaultContainer";
import LoginContainer from "./LoginContainer";

function App() {
	const { user } = useContext(UserContext);

	return (
		<div className="App">
			<Switch>
				<Route exact path="/login" component={LoginContainer} />
				<Redirect exact from="/" to="/login" />

				{user && <Route component={DefaultContainer} />}
			</Switch>
		</div>
	);
}

export default App;
