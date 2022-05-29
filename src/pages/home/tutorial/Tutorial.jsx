import s from './Tutorial.module.scss';

import TutorialAdd from '../tutorialAdd';
import TutorialRemove from '../tutorialRemove';
import TutorialFilter from '../tutorialFilter';

// import { useGetPokemonByNameQuery } from '../../../provider/redux/pokemonApi';

export default function Tutorial() {
  // const { data, error, isLoading } = useGetPokemonByNameQuery('pikachu', {
  //   skip: false,
  //   refetchOnFocus: true,
  // });
  return (
    <>
      <div className={s.container}>
        <h2 className="title">
          Tutorial <br id="tutor" />
          <span className={s.suptitle}>Super Fast</span>
        </h2>
        <div>
          <TutorialAdd />
          <TutorialRemove />
          <TutorialFilter />
        </div>
      </div>
    </>
  );
}
