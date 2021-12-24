/* 
TODO:
Fetch Media Limiter
Loading Component
Categories
Carousel
Transitions
*/
import { useCallback, useEffect, useState } from "react";

import Footer from "../Navigation/Footer";
import TitleCard from "../TitleCard";

export default function Browse() {
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
			return <TitleCard {...vid} />;
		});
	};

	useEffect(() => {
		getMedia();
	}, [getMedia]);

	return (
		<div className="gallery-content-wrapper">
			<div className="content">{renderMedia()}</div>
			<Footer />
		</div>
	);
}
