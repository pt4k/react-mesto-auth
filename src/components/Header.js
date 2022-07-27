import logoPath from '../images/Vector.svg';
import { Link } from 'react-router-dom';

function Header({ textLink, userLogin, headerLinkActiveClassName, routeLink }) {
  return (
    <header className="header">
      <img alt="Логотип Mesto" className="logo" src={logoPath} />
      <p className="header__login">{userLogin}</p>
      {
        <Link
          className={`header__link ${headerLinkActiveClassName}`}
          to={`/${routeLink}`}
        >
          {textLink}
        </Link>
      }
    </header>
  );
}

export default Header;
