import Icon from "./Icon";
import "./Header.scss";
import Search from "./Search";

const Header = () => {
	return (
		<div className="container">
			<header className="header">
				<div className="header__logo">DivineX</div>

				<div className="header__search">
					<Search />
				</div>
				<div className="nav header__nav">
					<Icon image="/images/home.png" altText="Home Icon" />
					<Icon image="/images/direction.png" altText="Home Icon" />
					<Icon image="/images/heart.png" altText="Home Icon" />
					<Icon image="/images/user.png" altText="Home Icon" />
				</div>
			</header>
		</div>
	);
};

export default Header;
