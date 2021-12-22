import { useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Video from "../Video";

function Media(props) {
	const { id } = useParams();

	useEffect(() => {
		props.setIsVideoShowing(true);

		return () => props.setIsVideoShowing(false);
	});

	return <Video url={`http://localhost:4000/media/stream/${id}`} />;
}

export default Media;
