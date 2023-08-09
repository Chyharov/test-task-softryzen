import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import s from './Eventslist.module.scss';
import icon from '../../images/icons/sprite.svg';
import FilterList from 'components/FilterList/FilterList';
import SortList from 'components/SortList/SortList';
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
          <button aria-label="open filter list" className={s.buttonsList__itemBtn} onClick={openModalFilter}>
              <p className={`${s.selectedCategory} ${selectedCategory ? s.withMargin : s.withoutMargin}`}>{selectedCategory}</p>
              <svg className={s.buttonsList__itemImg} width="24" height="24">
                  <use href={`${icon}#icon-shape`} style={{ '--color1': '#3F3F3F' }} />
              </svg>
          </button>
          {showModalFilter && (
              <FilterList
                showModalFilter={showModalFilter}
                closeModalFilter={closeModalFilter}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                events={events}
              />
            )}
          </li>

        <li className={s.buttonsList__item}>
          <button aria-label="open sort list" className={s.buttonsList__itemBtn} onClick={openModalSort}>
              <svg className={s.buttonsList__itemImg} width="24" height="24">
                  <use href={`${icon}#icon-filters-2`} />
              </svg>
          </button>
          {showModalSort && (
              <SortList
                showModalSort={showModalSort}
                closeModalSort={closeModalSort}
                events={events}
              />
            )}
          </li>

        <li className={s.buttonsList__item}>
          <button aria-label="create event" className={s.buttonsList__itemBtn} style={{ backgroundColor: '#7B61FF' }}>
          <Link className={s.header__linkBack} to="/CreateEventPage">
        
            <svg className={s.buttonsList__itemImg} width="24" height="24">
                <use href={`${icon}#icon-plus`} />
            </svg>
          </Link>
          </button>
        </li>
      </ul>

      <ul className={s.event__list}>
        {events.filter((event) => !selectedCategory || event.category === selectedCategory).map((event) => (
          <li className={s.event__item} key={event.id}>
          <div className={s.relativeContainer}>
          <div className={s.eventInfoContainer}>
            <button aria-label="close filter list"
              className={s.category}
              onClick={() => {
                setSelectedCategory(event.category);
                closeModalFilter()}}>
              {event.category}
            </button>
            <button aria-label="filter list item" className={s.priority} style={{ color: event.color }}>{event.priority}</button>
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
