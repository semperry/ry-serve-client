import { useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";

export default function NoMatch(props) {
	const history = useHistory();
	const location = useLocation();

	useEffect(() => {
		props.setShowHeader(false);

		return () => props.setShowHeader(true);
	}, []);

	return (
		<div className="error-page">
			<div className="header">
				<div
					className="logo"
					onClick={() => history.goBack()}
					style={{ cursor: "pointer" }}
				>
					RyServe
				</div>
			</div>

			<div className="content">
				<div>
					<h1>Oops, you're lost!</h1>
				</div>

				<div>
					<p>
						Sorry, we can't pull that up for you. Try heading back home and look
						again.
					</p>
				</div>

				<div className="buttons">
					<button className="btn" onClick={() => history.push("/browse")}>
						Home
					</button>
				</div>

				<div className="error-status">
					<span>Error Code 404 | '{location.pathname}'</span>
				</div>
			</div>
		</div>
	);
}
