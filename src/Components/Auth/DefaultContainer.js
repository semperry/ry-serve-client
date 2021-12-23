import { useState } from "react";
import { Switch, Route, Link } from "react-router-dom";

import Header from "../Navigation/Header";
import Browse from "../Pages/Browse";
import Media from "../Pages/Media";
import MediaManager from "../Pages/MediaManager";
import NoMatch from "../Pages/NoMatch";
import { AdminUser } from "../../helpers/userRoles";

export default function DefaultContainer() {
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
						path="/stream/:id"
						render={(props) => (
							<Media {...props} setIsVideoShowing={setIsVideoShowing} />
						)}
					/>

					<AdminUser withRedirect="/browse">
						<Route to="/media/managment" component={MediaManager} />
					</AdminUser>

					<Route component={NoMatch} />
				</Switch>
			</div>
		</div>
	);
}
