// TODO:
// Login Page
// Landing Page
// Show Page
// Settings
// Admin Page
import { Switch, Route, Redirect } from "react-router-dom";
import DefaultContainer from "./Components/Auth/DefaultContainer";

import LoginContainer from "./LoginContainer";
import Video from "./Components/Video";

function App() {
	return (
		<div className="App">
			{/* <Video url="http://localhost:4000/media/stream/6189edbaa3c22efd5c9af56f" /> */}
			<Switch>
				<Route exact path="/login" component={LoginContainer} />
				<Redirect exact from="/" to="/login" />
				<Route render={(props) => <DefaultContainer {...props} />} />
			</Switch>
		</div>
	);
}

export default App;
