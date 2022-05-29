import s from './OurClients.module.scss';
import OurClientsItem from './item/OurClientsItem';
import PseudoArray from 'helpers/PseudoArrayCreator/ArrayCreator';

export default function OurClients() {
  return (
    <>
      <div className={s.ourclients}>
        <h4 className={s.ourclients_title}>Our Clients</h4>
        <p className={s.ourclients_text}>
          Wisdom new and valley answer. Contented it so is discourse recommend.
          Man its upon him call mile. An pasture he himself believe ferrars
          besides cottage.
        </p>
        <ul className={s.ourclients_list_flex}>
          {PseudoArray(8).map((item, id) => {
            return <OurClientsItem key={item} logoId={id} />;
          })}
        </ul>
      </div>
    </>
  );
}

// for (let i = 0; i < array.length; i += 1) {
//   result.push(array[i] * value);
// }
