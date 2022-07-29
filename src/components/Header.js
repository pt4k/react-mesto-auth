import logoPath from '../images/Vector.svg';
import { Switch, Route, Link } from 'react-router-dom';

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

      <Switch>
        <Route path="/signup">
          <Link className="header__button" to="signin">
            Войти
          </Link>
        </Route>
        <Route path="/signin">
          <Link className="header__button" to="signup">
            Регистрация
          </Link>
        </Route>
      </Switch>
    </header>
  );
}

export default Header;
