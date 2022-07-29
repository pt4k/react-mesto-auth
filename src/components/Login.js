import { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const resetForm = () => {
    setEmail('');
    setPassword('');
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onLogin({ email, password }).then(() => {
      history.push('/');
      resetForm();
    });
  };

  return (
    <div className="registration">
      <h2 className="registration__title">Вход</h2>
      <form className="registration__form" noValidate onSubmit={handleSubmit}>
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
        <button
          className="registration__save-button registration__save-button_enter"
          type="submit"
        >
          Войти
        </button>
      </form>
    </div>
  );
};

export default Login;
