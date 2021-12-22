import { useState } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "../Navigation/Header";
import Browse from "../Pages/Browse";
import Media from "../Pages/Media";
import NoMatch from "../Pages/NoMatch";

export default function DefaultContainer(props) {
	const [isVideoShowing, setIsVideoShowing] = useState(false);

	return (
		<div className="container">
			<Route
				path="/"
				render={(iprops) => (
					<Header {...iprops} isVideoShowing={isVideoShowing} />
				)}
			/>
			<div className="body-wrapper">
				<Switch>
					<Route path="/browse" component={Browse} />
					<Route
						path="/media/:id"
						render={(props) => (
							<Media {...props} setIsVideoShowing={setIsVideoShowing} />
						)}
					/>
					<Route component={NoMatch} />
				</Switch>
			</div>
		</div>
	);
}
