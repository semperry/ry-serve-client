// TODO:
// Login Page
// Landing Page
// Show Page
// Settings
// Admin Page
import { Switch, Route, Redirect } from "react-router-dom";
import DefaultContainer from "./Components/Auth/DefaultContainer";

import LoginContainer from "./LoginContainer";

function App() {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/login" component={LoginContainer} />
				<Redirect exact from="/" to="/login" />
				<Route render={(props) => <DefaultContainer {...props} />} />
			</Switch>
		</div>
	);
}

export default App;
