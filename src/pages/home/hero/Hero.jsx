import s from './Hero.module.scss';

import HeroOffer from './item';

export default function Hero() {
  return (
    <>
      <div className={s.hero_container}>
        <div className={s.hero}>
          <div className={s.hero_box}>
            <h1 className={s.hero_title}>
              Smart PhoneBook <br /> Application
            </h1>
            <p className={s.hero_text}>
              Wisdom new and valley answer. Contented it so is discourse
              recommend. Man its upon him call mile. An pasture he himself
              believe ferrars besides cottage.
            </p>
          </div>
          <HeroOffer />
        </div>
      </div>
    </>
  );
}
