import { useHistory } from "react-router-dom";

export default function TitleCard(props) {
	const history = useHistory();

	return (
		<div
			onClick={() => history.push(`/stream/${props._id}`)}
			className="title-card-wrapper"
		>
			<img
				className="title-card-image"
				src={props.titleImage}
				alt="Video Title"
			/>

			<div className="title-card-title">{props.title}</div>

			{/* <div className="title-card-description">{props.description}</div> */}
		</div>
	);
}
