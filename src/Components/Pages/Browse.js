import { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export default function Browse() {
	const history = useHistory();
	const [media, setMedia] = useState([]);

	const getMedia = useCallback(() => {
		fetch("http://localhost:4000/media", {
			method: "GET",
			credentials: "include",
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setMedia(data.media);
			})
			.catch((err) => {
				console.log("Get Media Error: ", err);
			});
	}, []);

	const renderMedia = () => {
		return media.map((vid) => {
			return (
				<div
					key={vid._id}
					onClick={() => history.push(`/stream/${vid._id}`)}
					style={{
						width: "150px",
						height: "200px",
						cursor: "pointer",
					}}
				>
					<div
						style={{
							backgroundImage: `url(${vid.titleImage})`,
							height: "50%",
						}}
					/>
					<div>{vid.title}</div>
					<div>{vid.description}</div>
				</div>
			);
		});
	};

	useEffect(() => {
		getMedia();
	}, [getMedia]);

	return (
		<div>
			<h1>Browse Media</h1>
			<div>{renderMedia()}</div>
		</div>
	);
}
