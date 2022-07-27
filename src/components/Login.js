import { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Loader from './Loader';
import Header from './Header';
import { authorize } from '../utils/auth';

const Login = ({ title, loadingText, isLoading, buttonText }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  const resetForm = () => {
    setEmail('');
    setPassword('');
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    authorize(email, password)
      .then(() => {
        history.push('/');
      })
      .then(() => resetForm())
      .catch((err) => console.log(err));
  };

  return (
    <div className="registration">
      {<Header textLink="Регистрация" routeLink="signup" />}
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
          <button
            className="registration__save-button registration__save-button_enter"
            type="submit"
          >
            {buttonText}
          </button>
        )}
      </form>
    </div>
  );
};

export default Login;
