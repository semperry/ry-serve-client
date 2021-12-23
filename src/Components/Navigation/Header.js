import { useContext } from "react";
import { Link } from "react-router-dom";

import { UserContext } from "../UserProvider";
import { AdminUser } from "../../helpers/userRoles";

export default function Header(props) {
	const { handleLogout } = useContext(UserContext);

	return (
		<div
			style={{
				display: props.isVideoShowing && "none",
			}}
		>
			<div>Logo</div>
			<div>
				<Link to="/browse">Home</Link>
				<AdminUser>
					<Link to="/media/managment">Media Manager</Link>;
				</AdminUser>
			</div>
			<div>Profile info</div>
			{/* Temp */}
			<button onClick={handleLogout}>Logout</button>
		</div>
	);
}
