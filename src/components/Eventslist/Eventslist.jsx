import React, { useState } from 'react';
import s from './Eventslist.module.scss';
import filterLogo2 from '../../images/icons/filters-2.svg'
import filterLogo3 from '../../images/icons/filters-3.svg'
import plusLogo from '../../images/icons/plus.svg'
import { events } from '../../services/Events.js'

const Eventslist = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <section className={s.sectionEventList}>
    <div className={'container ' + s.event__container}>
      <ul className={s.buttons__list}>
        <li className={s.buttonsList__item}>
          <button className={s.buttonsList__itemBtn} onClick={openModal}>
              <p className={s.selectedCategory}>{selectedCategory || ''}</p>
              <img className={s.buttonsList__itemImg} src={filterLogo3} alt="Моя SVG-іконка" />
          </button>
          {showModal && (
            <div className={s.modalBackdrop}>
              <div className={s.modalContent}>
                <button className={s.closeButton} onClick={closeModal}>
                  <img className={s.closeButton__img} src={filterLogo3} alt="Моя SVG-іконка" />
                  <p>{selectedCategory || 'Category'}</p>
                </button>
                  <ul className={s.filter__list}>
                  {events.map((event) => (
                    <li className={s.filter__listItem} key={event.category}>
                      <button
                        className={`${s.filter__listBtn} ${selectedCategory === event.category ? s.selectedCategory : ""}`}
                        onClick={() => {
                          setSelectedCategory(event.category);
                          closeModal();
                        }}>
                        {event.category}
                      </button>
                    </li>
                  ))}
                </ul>
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
        {events.filter((event) => !selectedCategory || event.category === selectedCategory).map((event) => (
        <li className={s.event__item} key={event.id}>
          <div className={s.relativeContainer}>
          <div className={s.eventInfoContainer}>
            <button
              className={s.category}
              onClick={() => {
                setSelectedCategory(event.category);
                closeModal()}}>
              {event.category}
            </button>
            <button className={s.priority} style={{ color: event.color }}>{event.priority}</button>
          </div>
          
          <img loading='lazy' className={s.event__itemImg} src={event.src} alt={event.alt} />

          <div className={s.eventDataContainer}>
            <ul className={s.event__dataList}>
                <li className={s.event__dataListItem}><p className={s.event__dataDescription}>{event.date} at {event.time}</p></li>
              <li className={s.event__dataListItem}><p className={s.event__dataDescription}>{event.city}</p></li>
            </ul>
          </div>
          </div>
          <div className={s.event__itemContainer}>
            <h2 className={s.event__itemTitle}>{event.title}</h2>
            <p className={s.event__itemDescription}>{event.description}</p>
          </div>
        </li>
        ))}
      </ul>
      </div>
      </section>
  )
};

export default Eventslist;
