import { useState } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "../Navigation/Header";
import Browse from "../Pages/Browse";
import Media from "../Pages/Media";
import MediaManager from "../Pages/MediaManager";
import NoMatch from "../Pages/NoMatch";
import { AdminUser } from "../../helpers/userRoles";

export default function DefaultContainer() {
	const [showHeader, setShowHeader] = useState(true);

	return (
		<div className="container">
			<Header showHeader={showHeader} />

			<div className="body-wrapper">
				<Switch>
					<Route path="/browse" component={Browse} />
					<Route
						path="/stream/:id"
						render={(props) => (
							<Media {...props} setShowHeader={setShowHeader} />
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
							<NoMatch {...props} setShowHeader={setShowHeader} />
						)}
					/>
				</Switch>
			</div>
		</div>
	);
}
