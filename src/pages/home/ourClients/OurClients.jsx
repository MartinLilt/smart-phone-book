import s from './OurClients.module.scss';
import OurClientsItem from './item/OurClientsItem';
import PseudoArray from 'helpers/PseudoArrayCreator/ArrayCreator';

export default function OurClients() {
  return (
    <>
      <div>
        <h4 className={s.ourclients_title}>Our Clients</h4>
        <p className={s.ourclients_text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores
          officia odit reprehenderit veniam perferendis omnis debitis ullam?
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
