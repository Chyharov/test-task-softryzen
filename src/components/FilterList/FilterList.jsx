import React from 'react';
import s from './FilterList.module.scss';
import icon from '../../images/icons/sprite.svg';

const FilterList = ({ closeModalFilter, selectedCategory, setSelectedCategory, events }) => {
  
  return (
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
                }}
              >
                {event.category}
              </button>
            </li>
          ))}
        </ul>
        
      </div>
    </div>
  );
};

export default FilterList;