import { AdminUser } from "../../helpers/userRoles";
import FileUpload from "../FileUpload";

function MediaManager() {
	return (
		<AdminUser withRedirect="/no-match">
			<div>
				<FileUpload />
			</div>
		</AdminUser>
	);
}

export default MediaManager;
