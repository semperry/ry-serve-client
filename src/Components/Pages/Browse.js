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

	const getMedia = useCallback(async (controller) => {
		await fetch("http://localhost:4000/media", {
			signal: controller.signal,
			method: "GET",
			credentials: "include",
		})
			.then((res) => res.json())
			.then((data) => {
				setMedia(data.media);
			})
			.catch((err) => {
				if (!err.name === "AbortError") console.error("Get Media Error: ", err);
			});
	}, []);

	const renderMedia = () => {
		return media?.map((vid) => {
			return <TitleCard key={vid._id} {...vid} />;
		});
	};

	useEffect(() => {
		const abortController = new AbortController();

		getMedia(abortController);

		return () => abortController.abort();
	}, [getMedia]);

	return (
		<div className="gallery-content-wrapper">
			<div className="content">{renderMedia()}</div>
			<Footer />
		</div>
	);
}
