import { useContext } from "react";

import { UserContext } from "../UserProvider";

export default function Header(props) {
	const { handleLogout } = useContext(UserContext);

	return (
		<div>
			<div>Logo</div>
			<div>Link Link Link</div>
			<div>Profile info</div>
			{/* Temp */}
			<button onClick={handleLogout}>Logout</button>
		</div>
	);
}
