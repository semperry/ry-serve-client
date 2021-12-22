export default function Video(props) {
	return (
		<video id="videoPlayer" controls autoPlay={true} muted={false}>
			<source src={props.url} />
		</video>
	);
}
