import { useState } from "react";
import { Switch, Route } from "react-router-dom";

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
			<Header isVideoShowing={isVideoShowing} />

			<div className="body-wrapper">
				<Switch>
					<Route path="/browse" component={Browse} />
					<Route
						path="/stream/:id"
						render={(props) => (
							<Media {...props} setIsVideoShowing={setIsVideoShowing} />
						)}
					/>

					<Route
						path="/media/managment"
						render={(props) => (
							<AdminUser withRedirect="/browse">
								<MediaManager {...props} />
							</AdminUser>
						)}
					/>

					<Route
						render={(props) => (
							<NoMatch {...props} setIsVideoShowing={setIsVideoShowing} />
						)}
					/>
				</Switch>
			</div>
		</div>
	);
}
