// TODO:
// Admin Page
// CRUD Videos
// Filter Genres
// Truncate descriptions
import { Switch, Route, Redirect } from "react-router-dom";

import DefaultContainer from "./Components/Auth/DefaultContainer";
import LoginContainer from "./Components/Auth/LoginContainer";
import { StandardUser } from "./helpers/userRoles";

function App() {
	return (
		<div className="App">
			<Switch>
				<Route path="/login" component={LoginContainer} />
				<Redirect exact from="/" to="/login" />

				<StandardUser>
					<Route component={DefaultContainer} />
				</StandardUser>
			</Switch>
		</div>
	);
}

export default App;
