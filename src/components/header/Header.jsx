import s from './Header.module.scss';
import HeaderMenu from './item';
import Modal from '../modal/Modal';
import SignModal from '../modal/signModal';
import CreateAccModal from '../modal/createAccModal';
import { AiFillPlusCircle } from 'react-icons/ai';
import { useState } from 'react';

export default function Header() {
  const [showCreateAccModal, setCreateAccModal] = useState(false);
  const [showSignModal, setSignModal] = useState(false);

  const toggleCteateAccModal = () => {
    setCreateAccModal(!showCreateAccModal);
  };

  const toggleSignModal = () => {
    setSignModal(!showSignModal);
  };

  // const toggleModal = typeModal => {
  //   if (typeModal === 'createAcc/modal') setCreateAccModal(!showCreateAccModal);
  //   if (typeModal === 'sign/modal') setCreateAccModal(!showCreateAccModal);
  // }

  return (
    <>
      {showSignModal && (
        <Modal toggleModal={toggleSignModal} showModal={showSignModal}>
          <SignModal />
        </Modal>
      )}
      {showCreateAccModal && (
        <Modal
          toggleModal={toggleCteateAccModal}
          showModal={showCreateAccModal}
        >
          <CreateAccModal />
        </Modal>
      )}
      <header className={s.header_background}>
        <div className={s.header_container}>
          <div>
            <div className={s.header_flex}>
              <button type="button" className={s.header_logo}>
                PhoneBook
              </button>
              <span className={s.header_login}>
                <button
                  type="button"
                  className={s.header_button}
                  onClick={toggleCteateAccModal}
                >
                  <span className={s.header_icon}>
                    <AiFillPlusCircle className={s.header_icon_svg} />
                  </span>
                  Create an Account
                </button>
                <button
                  type="button"
                  className={s.header_button}
                  onClick={toggleSignModal}
                >
                  Sign in
                </button>
              </span>
            </div>
            <HeaderMenu />
          </div>
        </div>
      </header>
    </>
  );
}
