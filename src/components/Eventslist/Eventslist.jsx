import React, { useState } from 'react';
import s from './Eventslist.module.scss';
import icon from '../../images/icons/sprite.svg';
import { events } from '../../services/Events.js'

const Eventslist = () => {
  const [showModalFilter, setShowModalFilter] = useState(false);
  const [showModalSort, setShowModalSort] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  
  const openModalFilter = () => {
    setShowModalFilter(true);
  };

  const closeModalFilter = () => {
    setShowModalFilter(false);
  };

  const openModalSort = () => {
    setShowModalSort(true);
  };

  const closeModalSort = () => {
    setShowModalSort(false);
  };

  return (
    <section className={s.sectionEventList}>
    <div className={'container ' + s.event__container}>
      <ul className={s.buttons__list}>
        <li className={s.buttonsList__item}>
          <button className={s.buttonsList__itemBtn} onClick={openModalFilter}>
              <p className={`${s.selectedCategory} ${selectedCategory ? s.withMargin : s.withoutMargin}`}>{selectedCategory}</p>
              <svg className={s.buttonsList__itemImg} width="24" height="24">
                  <use href={`${icon}#icon-shape`} style={{ '--color1': '#3F3F3F' }} />
              </svg>
          </button>
          {showModalFilter && (
            <div className={s.modalBackdropFilter}>
              <div className={s.modalContentFilter}>
                <button className={s.closeButton} onClick={closeModalFilter}>
                  <svg className={s.buttonsList__itemImg} width="24" height="24">
                    <use href={`${icon}#icon-shape`} style={{ '--color1': '#7B61FF' }}/>
                  </svg>
                  <p className={s.filter__title}>{selectedCategory || 'Category'}</p>
                </button>
                  <ul className={s.filter__list}>
                  {events.map((event) => (
                    <li className={s.filter__listItem} key={event.category}>
                      <button
                        className={`${s.filter__listBtn} ${selectedCategory === event.category ? s.selectedCategory : ""}`}
                        onClick={() => {
                          setSelectedCategory(event.category);
                          closeModalFilter();
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
          <button className={s.buttonsList__itemBtn} onClick={openModalSort}>
              <svg className={s.buttonsList__itemImg} width="24" height="24">
                  <use href={`${icon}#icon-filters-2`} />
              </svg>
          </button>
          {showModalSort && (
            <div className={s.modalBackdropSort}>
                <div className={s.modalContentSort}>
                  
                <button className={s.closeButtonSort} onClick={closeModalSort}>
                  <p className={s.sort__title}>{selectedCategory || 'Sort By'}</p>
                  <svg className={s.buttonsList__itemImg} width="24" height="24">
                    <use href={`${icon}#icon-filters-2`} style={{ '--color1': '#7B61FF' }}/>
                  </svg>
                </button>
                  
                <ul className={s.sort__list}>
                  <li className={s.sort__listItem}>
                    <button className={s.sort__listBtn} onClick={() => { events.sort((a, b) => a.title.localeCompare(b.title)); closeModalSort(); }}
                      >by name <svg width="24" height="24"><use href={`${icon}#icon-shapeup`}/></svg>
                    </button>
                  </li>
                  <li className={s.sort__listItem}>
                    <button className={s.sort__listBtn} onClick={() => { events.sort((a, b) => b.title.localeCompare(a.title)); closeModalSort(); }}
                      >by name <svg width="24" height="24"><use href={`${icon}#icon-shapedown`}/></svg>
                    </button>
                  </li>
                  <li className={s.sort__listItem}>
                    <button className={s.sort__listBtn} onClick={() => {
                      events.sort((a, b) => {
                        const [dayA, monthA] = a.date.split('.').map(Number);
                        const [dayB, monthB] = b.date.split('.').map(Number);

                        const numerValueA = monthA * 100 + dayA;
                        const numerValueB = monthB * 100 + dayB;

                        return numerValueB - numerValueA;
                      });
                      closeModalSort();
                    }}
                  >by data <svg width="24" height="24"><use href={`${icon}#icon-shapeup`}/></svg>
                    </button>
                  </li>
                  <li className={s.sort__listItem}>
                    <button className={s.sort__listBtn} onClick={() => {
                      events.sort((a, b) => {
                        const [dayA, monthA] = a.date.split('.').map(Number);
                        const [dayB, monthB] = b.date.split('.').map(Number);

                        const numerValueA = monthA * 100 + dayA;
                        const numerValueB = monthB * 100 + dayB;

                        return numerValueA - numerValueB;
                      });
                      closeModalSort();
                    }}
                  >by data <svg width="24" height="24"><use href={`${icon}#icon-shapedown`}/></svg>
                    </button>
                  </li>
                  <li className={s.sort__listItem}>
                    <button className={s.sort__listBtn} onClick={() => {
                        events.sort((a, b) => {
                          const priorityOrder = { "high": 3, "medium": 2, "low": 1 };

                          return priorityOrder[b.priority.toLowerCase()] - priorityOrder[a.priority.toLowerCase()];
                        });
                        closeModalSort();
                      }}
                    >by priority <svg width="24" height="24"><use href={`${icon}#icon-shapeup`}/></svg>
                    </button>
                  </li>
                  <li className={s.sort__listItem}>
                    <button className={s.sort__listBtn} onClick={() => {
                      events.sort((a, b) => {
                        const priorityOrder = { "high": 3, "medium": 2, "low": 1 };

                        return priorityOrder[a.priority.toLowerCase()] - priorityOrder[b.priority.toLowerCase()];
                      });
                      closeModalSort();
                    }}
                    >by priority <svg width="24" height="24"><use href={`${icon}#icon-shapedown`}/></svg>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </li>

        <li className={s.buttonsList__item}>
          <button className={s.buttonsList__itemBtn} style={{ backgroundColor: '#7B61FF' }}>
            <svg className={s.buttonsList__itemImg} width="24" height="24">
                <use href={`${icon}#icon-plus`} />
              </svg>
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
                closeModalFilter()}}>
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
