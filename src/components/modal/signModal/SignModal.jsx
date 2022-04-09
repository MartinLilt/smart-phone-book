import { useState } from 'react';
import { useDispatch } from 'react-redux';
import s from './SignModal.module.scss';
import authOperations from 'provider/redux/StoreOperations/authOperations';

const SignModal = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onHandle = () => {
    dispatch(authOperations.logOut());
  };

  const onHandleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    onHandleReset();
  };

  const onHandleReset = () => {
    setEmail('');
    setPassword('');
  };

  const onHandleChange = e => {
    const { name, value } = e.currentTarget;
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };

  return (
    <>
      <form onSubmit={onHandleSubmit} className={s.modal_flex}>
        <p>Sign in Modal!</p>
        <label>
          * E-mail
          <input
            type="email"
            name="email"
            placeholder={'email'}
            autoComplete="off"
            value={email}
            onChange={onHandleChange}
          ></input>
        </label>
        <label>
          * Password
          <input
            type="password"
            name="password"
            placeholder={'password'}
            autoComplete="off"
            value={password}
            onChange={onHandleChange}
          ></input>
        </label>
        <button type="submit">Login</button>
        <button type="button" onClick={onHandle}>
          Forgot password?
        </button>
        <p>
          This site is protected by reCAPTCHA and the Google Privacy Policy and
          Terms of Service apply.
        </p>
      </form>
    </>
  );
};

export default SignModal;
