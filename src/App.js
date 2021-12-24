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

				<StandardUser withRedirect>
					<Route component={DefaultContainer} />
				</StandardUser>
				<Redirect exact from="/" to="/login" />
			</Switch>
		</div>
	);
}

export default App;
