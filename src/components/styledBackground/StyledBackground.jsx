import s from './StyledBackground.module.scss';

const StyledBackground = ({ children }) => {
  return (
    <>
      <div className={s.background}>{children}</div>
    </>
  );
};

export default StyledBackground;
