// TODO:
// Login Page
// Landing Page
// Show Page
// Settings
// Admin Page
import { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { UserContext } from "./Components/UserProvider";
import DefaultContainer from "./Components/Auth/DefaultContainer";
import LoginContainer from "./LoginContainer";
import Video from "./Components/Video";

function App() {
	const { user } = useContext(UserContext);

	return (
		<div className="App">
			{/* <Video url="http://localhost:4000/media/stream/6189edbaa3c22efd5c9af56f" /> */}
			<Switch>
				<Route exact path="/login" component={LoginContainer} />
				<Redirect exact from="/" to="/login" />

				{user && <Route component={DefaultContainer} />}
			</Switch>
		</div>
	);
}

export default App;
