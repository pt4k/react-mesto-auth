import logoPath from '../images/Vector.svg';

function Header() {
  return (
    <header className="header">
      <img alt="Логотип Mesto" className="logo" src={logoPath} />
    </header>
  );
}

export default Header;
