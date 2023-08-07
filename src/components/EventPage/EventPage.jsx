import React, { useState } from 'react';
import s from './EventPage.module.scss';
import filterLogo2 from '../../images/icons/filters-2.svg'
import filterLogo3 from '../../images/icons/filters-3.svg'
import plusLogo from '../../images/icons/plus.svg'
import plusLogo2 from '../../images/eventPictures/Rectangle 330.jpg'


const EventPage = () => {

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className={'container ' + s.event__container}>
      
      <ul className={s.buttons__list}>
        <li className={s.buttonsList__item}>
          <button className={s.buttonsList__itemBtn} onClick={openModal}>
            <img className={s.buttonsList__itemImg} src={filterLogo3} alt="Моя SVG-іконка" />
          </button>
          {showModal && (
            <div className={s.modalBackdrop}>
              <div className={s.modalContent}>
                <button className={s.closeButton} onClick={closeModal}>Закрити</button>
                <div className={s.filterText}>
                  Текст з фільтрами для вибору
                </div>
              </div>
            </div>
          )}
        </li>

        <li className={s.buttonsList__item}>
          <button className={s.buttonsList__itemBtn}>
            <img className={s.buttonsList__itemImg} src={filterLogo2} alt="Моя SVG-іконка" />
          </button>
        </li>

        <li className={s.buttonsList__item}>
          <button className={s.buttonsList__itemBtn} style={{ backgroundColor: '#7B61FF' }}>
            <img className={s.buttonsList__itemImg} src={plusLogo} alt="Моя SVG-іконка" />
          </button>
        </li>
      </ul>

      <ul className={s.event__list}>
        <li className={s.event__item}>
          <img className={s.event__itemImg} src={plusLogo2} alt="pictures" />
          <h2 className={s.event__itemTitle}>Galery Opening</h2>
          <p className={s.event__itemDescription}>Discover an enchanting evening celebrating the world of art at our exclusive gallery opening.</p>
        </li>
      </ul>
    </div>

  )
};

export default EventPage;
