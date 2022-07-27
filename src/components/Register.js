import { useState } from 'react';
import Loader from './Loader';
import Header from './Header';
import { Link, useHistory } from 'react-router-dom';
import { register } from '../utils/auth';

const Register = ({ title, loadingText, isLoading, buttonText }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    register(email, password)
      .then(() => history.push('/signin'))
      .catch((err) => console.log(`Что-то пошло не так. Ошибка: ${err}`));
    console.log(history);
  };

  return (
    <div className="registration">
      {<Header textLink="Войти" routeLink="signin" />}
      <h2 className="registration__title">{title}</h2>
      <form className="registration__form" noValidate onSubmit={handleSubmit}>
        <input
          className="registration__input registration__input_el_e-mail"
          type="email"
          name="email"
          placeholder="e-mail"
          minLength="2"
          maxLength="40"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          required
        />
        <span className="registration__input-error e-mail-input-error"></span>
        <input
          className="registration__input registration__input_el_password"
          type="password"
          name="password"
          placeholder="Пароль"
          minLength="2"
          maxLength="16"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          required
        />

        <span className="registration__input-error password-input-error"></span>
        {isLoading ? (
          <Loader loadingText={loadingText} />
        ) : (
          <button className="registration__save-button" type="submit">
            {buttonText}
          </button>
        )}
        <p className="registration__paragraph">
          Уже зарегистрированы?{' '}
          {
            <Link className="registration__link" to="/signin">
              Войти
            </Link>
          }
        </p>
      </form>
    </div>
  );
};

export default Register;
