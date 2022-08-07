import { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = ({ onRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onRegister({ email, password });
  };

  return (
    <div className="registration">
      <h2 className="registration__title">Регистрация</h2>
      <form className="registration__form" onSubmit={handleSubmit}>
        <input
          className="registration__input registration__input_el_e-mail"
          type="email"
          name="email"
          placeholder="Email"
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
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          required
        />

        <span className="registration__input-error password-input-error"></span>

        <button className="registration__save-button" type="submit">
          Зарегестрироваться
        </button>

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
