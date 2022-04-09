import s from './Modal.module.scss';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { MdClose } from 'react-icons/md';

const rootModal = document.querySelector('#root-modal');
let viewPort = document.querySelector('#root-overflow');

const Modal = ({ children, toggleModal, showModal }) => {
  useEffect(() => {
    window.addEventListener('keydown', getKeyDown);
    return () => {
      window.removeEventListener('keydown', getKeyDown);
    };
  });

  useEffect(() => {
    viewPort.classList.toggle('overflow');
    return () => {
      viewPort.classList.remove('overflow');
    };
  }, [showModal]);

  const getKeyDown = event => {
    if (event.code === 'Escape') toggleModal();
  };

  const getOverlayClick = e => {
    if (e.currentTarget === e.target) {
      toggleModal();
    }
  };

  return createPortal(
    <div className={s.modal_overlay} onClick={getOverlayClick}>
      <div className={s.modal_container}>
        <div className={s.modal}>
          <span className={s.modal_exbox}>
            <button
              type="button"
              className={s.modal_button}
              onClick={() => toggleModal()}
            >
              <span className={s.modal_icon}>
                <MdClose className={s.modal_icon_svg} />
              </span>
            </button>
          </span>
          <span className={s.modal_contentbox}>{children}</span>
        </div>
      </div>
    </div>,
    rootModal,
  );
};

export default Modal;
