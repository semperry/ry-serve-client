import { Switch, Route } from "react-router-dom";

import Header from "../Navigation/Header";
import Browse from "../Pages/Browse";
import NoMatch from "../Pages/NoMatch";

export default function DefaultContainer(props) {
	return (
		<div className="container">
			<Route path="/" render={(iprops) => <Header {...iprops} />} />
			<div className="body-wrapper">
				<Switch>
					<Route path="/browse" component={Browse} />
					<Route component={NoMatch} />
				</Switch>
			</div>
		</div>
	);
}
