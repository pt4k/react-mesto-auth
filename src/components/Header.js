import logoPath from '../images/Vector.svg';
import { Route, Link } from 'react-router-dom';

function Header({ onSignOut, loggedIn, userEmail }) {
  return (
    <header className="header">
      <img alt="Логотип Mesto" className="logo" src={logoPath} />
      <p className="header__login">{userEmail}</p>
      <button
        className="header__button header__button_active"
        onClick={onSignOut}
      >
        {loggedIn ? 'Выйти' : ' '}
      </button>

      <Route path="/sign-up">
        <Link className="header__button" to="sign-in">
          Войти
        </Link>
      </Route>
      <Route path="/sign-in">
        <Link className="header__button" to="sign-up">
          Регистрация
        </Link>
      </Route>
    </header>
  );
}

export default Header;
