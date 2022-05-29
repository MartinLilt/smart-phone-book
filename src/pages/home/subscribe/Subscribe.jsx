import s from './Subscribe.module.scss';

const Subscribe = () => {
  return (
    <>
      <div className={s.flex}>
        <div>
          <p className={s.title}>Subscribe to get updated</p>
          <p className={s.text}>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque.
          </p>
        </div>
        <button type="button" className={s.button}>
          Get start
        </button>
      </div>
    </>
  );
};

export default Subscribe;
