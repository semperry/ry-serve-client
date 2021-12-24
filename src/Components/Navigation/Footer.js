export default function Footer({ selector }) {
	return (
		<div className={`${selector}-footer-wrapper`}>
			<div className={`${selector}-footer`}></div>
		</div>
	);
}

Footer.defaultProps = {
	selector: "member",
};
