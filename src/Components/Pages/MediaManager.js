import { AdminUser } from "../../helpers/userRoles";
import FileUpload from "../FileUpload";

function MediaManager() {
	return (
		<AdminUser withRedirect="/no-match">
			<div>
				<h1>Media Manager</h1>
				<FileUpload />
			</div>
		</AdminUser>
	);
}

export default MediaManager;
