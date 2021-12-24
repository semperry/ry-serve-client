import { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";

import { UserContext } from "../UserProvider";
import { AdminUser } from "../../helpers/userRoles";
import { stripLocation } from "../../helpers/util";

export default function Header(props) {
	const { handleLogout } = useContext(UserContext);
	const history = useHistory();

	return props.showHeader ? (
		<>
			<div className="app-header">
				<div onClick={() => history.push("/browse")} className="header-logo">
					<h1>RyServe</h1>
				</div>

				<div className="header-link-wrapper">
					<NavLink to="/browse">Home</NavLink>

					<AdminUser>
						<NavLink to="/media/managment">Media Manager</NavLink>
					</AdminUser>

					<NavLink to="/Shouldn'tMatch">Random</NavLink>
				</div>

				<div className="header-settings-wrapper">
					<div className="nav-item">Search</div>
					<div
						className="nav-item"
						onClick={() => {
							if (window.confirm("Are you sure you want to logout?"))
								handleLogout();
						}}
					>
						Logout
					</div>
				</div>
			</div>

			<div className="sub-header">
				<div className="sub-header-wrapper">
					<div className="dynamic-header">
						<div className="header-title">
							{stripLocation(history.location.pathname)}
						</div>
					</div>
				</div>
			</div>
		</>
	) : null;
}
