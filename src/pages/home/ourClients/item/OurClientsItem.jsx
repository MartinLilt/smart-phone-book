import Icons from 'image/logos/logos.svg';
import s from './OurClientsItem.module.scss';

const OurClientsItem = ({ logoId }) => {
  return (
    <li className={s.list}>
      <svg width="15vh" height="15vh">
        <use xlinkHref={`${Icons}#icon-logo_${logoId + 1}`} />
      </svg>
    </li>
  );
};

export default OurClientsItem;
