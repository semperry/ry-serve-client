export default function Video(props) {
	return (
		<video id="videoPlayer" controls muted="muted" autoplay>
			<source src={props.url} />
		</video>
	);
}
