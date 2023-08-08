import React from 'react';
import s from './SortList.module.scss';
import icon from '../../images/icons/sprite.svg';

const SortList = ({ showModalSort, closeModalSort, events }) => {
  return (
    <div className={s.modalBackdropSort}>
        <div className={s.modalContentSort}>
                  
        <button className={s.closeButtonSort} onClick={closeModalSort}>
            <p className={s.sort__title}>Sort By</p>
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
  );
};

export default SortList;