import s from './FaqsItem.module.scss';
import faqs from '../faqs.json';
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';
import { Fragment, useEffect, useState } from 'react';

const FaqsItem = () => {
  const [commId, setCommId] = useState(null);

  useEffect(() => {
    if (commId === null) setCommId(1);
  }, [commId]);

  return faqs.map(item => {
    const active = item.id === commId;
    return (
      <Fragment key={item.id}>
        {active ? (
          <li className={s.link_active}>
            <div className={s.flex_active}>
              <AiOutlineMinus className={s.icon_active} />
              <p className={s.title_active}>{item.title}</p>
            </div>
            <div className={s.comment_active}>{item.comment}</div>
          </li>
        ) : (
          <li className={s.link} onClick={() => setCommId(item.id)}>
            <div className={s.flex}>
              <AiOutlinePlus className={s.icon} />
              <p className={s.title}>{item.title}</p>
            </div>
          </li>
        )}
      </Fragment>
      // <ul className={s.list} key={item.id}>

      // </ul>
    );
  });
};

export default FaqsItem;
