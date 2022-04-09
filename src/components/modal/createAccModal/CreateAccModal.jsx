import { useState } from 'react';
import { useDispatch } from 'react-redux';
import s from './CreateAccModal.module.scss';
import authOperations from 'provider/redux/StoreOperations/authOperations';

const CreateAccModal = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkbox, setCheckbox] = useState(false);

  const onHandleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    onHandleReset();
  };

  const onHandleReset = () => {
    setName('');
    setEmail('');
    setPassword('');
    setCheckbox(false);
  };

  const onHandleChange = e => {
    const { name, value } = e.currentTarget;
    if (name === 'name') setName(value);
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
    if (name === 'checkbox') setCheckbox(true);
  };

  return (
    <>
      <form onSubmit={onHandleSubmit} className={s.modal_flex}>
        <p>Create Acc Modal!</p>
        <label>
          * Username
          <input
            type="text"
            name="name"
            placeholder={'name'}
            autoComplete="off"
            value={name}
            onChange={onHandleChange}
          ></input>
        </label>
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
        <label>
          <input
            type="checkbox"
            name="checkbox"
            checked={checkbox}
            onChange={onHandleChange}
          ></input>
          * This site is protected by reCAPTCHA and the Google Privacy Policy
          and Terms of Service apply.
        </label>
        <button type="submit">Join</button>
      </form>
    </>
  );
};

export default CreateAccModal;
