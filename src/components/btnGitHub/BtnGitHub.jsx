import gitHubIcon from '../../assets/images/icons/gitHubIconBlack.svg';

const BtnGitHub = ({ link }) => {
	return (
		<a href={link} target="_blank" rel="noreferrer">
			<button className="btn btn_theme_outline">
				<img src={gitHubIcon} alt="" />
				<p>GitHub repo</p>
			</button>
		</a>
	);
};

export default BtnGitHub;