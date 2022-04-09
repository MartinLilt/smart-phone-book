import s from './Avatar.module.scss';

const Avatar = ({ firstWord }) => {
  return (
    <>
      <span className={s.avatar}>{firstWord[0].toUpperCase()}</span>
    </>
  );
};

export default Avatar;
