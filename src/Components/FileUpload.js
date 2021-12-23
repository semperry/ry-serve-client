//TODO:
// Parse array based data for api formatting
// Success / error messages
import { useState } from "react";
import axios from "axios";

function FileUpload() {
	const [videoFile, setVideoFile] = useState("");
	const [titleImage, setTitleImage] = useState("");
	const [bannerImage, setBannerImage] = useState("");
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [year, setYear] = useState("");
	const [tags, setTags] = useState([]);
	const [rating, setRating] = useState([]);
	const [cast, setCast] = useState([]);
	const [genres, setGenres] = useState([]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const body = {
			title,
			year,
			tags,
			rating,
			cast,
			genres,
			description,
		};

		const formData = new FormData();
		if (videoFile) formData.append("videoFile", videoFile);
		if (titleImage) formData.append("titleImage", titleImage);
		if (bannerImage) formData.append("bannerImage", bannerImage);

		for (let field in body) {
			if (body[field]?.length) formData.append(field, body[field]);
		}

		try {
			const res = await axios.post(
				"http://localhost:4000/media/upload-video",
				formData,
				{
					withCredentials: true,
					headers: {
						"Content-Type": "multipart/form-data",
					},
				}
			);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<input
					type="file"
					name="video-file"
					onChange={(e) => setVideoFile(e.target.files[0])}
				/>
				<label htmlFor="video-file">Upload Video</label>

				<input
					type="file"
					name="title-file"
					onChange={(e) => setTitleImage(e.target.files[0])}
				/>
				<label htmlFor="title-file">Upload Title Image</label>

				<input
					type="file"
					name="banner-file"
					onChange={(e) => setBannerImage(e.target.files[0])}
				/>
				<label htmlFor="banner-file">Upload Banner Image</label>
			</div>

			<div>
				<input
					type="text"
					placeholder="Title"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
			</div>

			<div>
				<input
					type="text"
					placeholder="Release Year"
					value={year}
					onChange={(e) => setYear(e.target.value)}
				/>
			</div>

			<div>
				<input
					type="text"
					placeholder="Rating"
					value={rating}
					onChange={(e) => setRating(e.target.value)}
				/>
			</div>

			<div>
				<input
					type="text"
					placeholder="Tags"
					value={tags}
					onChange={(e) => setTags(e.target.value)}
				/>
			</div>

			<div>
				<input
					type="text"
					placeholder="Cast"
					value={cast}
					onChange={(e) => setCast(e.target.value)}
				/>
			</div>

			<div>
				<input
					type="text"
					placeholder="Genres"
					value={genres}
					onChange={(e) => setGenres(e.target.value)}
				/>
			</div>

			<div>
				<textarea
					placeholder="Description"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>
			</div>

			<input type="submit" value="Upload" />
		</form>
	);
}

export default FileUpload;
