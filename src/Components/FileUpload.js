import { useState } from "react";
import axios from "axios";

function FileUpload() {
	const [file, setFile] = useState("");
	const [fileName, setFileName] = useState("Choose File");

	const handleChange = (e) => {
		setFile(e.target.files[0]);
		setFileName(e.target.files[0].name);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const body = {
			title: "file title",
			description: "filjkldjflk dsfjlkds fjklsdjfskjfsl;",
		};

		const formData = new FormData();
		formData.append("file", file);
		Object.entries(body).forEach((entry) => {
			formData.append(entry[0], entry[1]);
		});

		try {
			const res = await axios.post(
				"http://localhost:4000/media/upload-video",
				formData,
				{
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
			<input type="file" id="customFile" onChange={handleChange} />
			<label htmlFor="customFile">{fileName}</label>

			<input type="submit" value="Upload" />
		</form>
	);
}

export default FileUpload;
