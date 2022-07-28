import logoPath from '../images/Vector.svg';

function Header({
  onSignOut,
  textLink,
  userEmail,
  headerButtonActiveClassName,
}) {
  return (
    <header className="header">
      <img alt="Логотип Mesto" className="logo" src={logoPath} />
      <p className="header__login">{userEmail}</p>
      <button
        onClick={onSignOut}
        className={`header__button ${headerButtonActiveClassName}`}
      >
        {textLink}
      </button>
    </header>
  );
}

export default Header;
