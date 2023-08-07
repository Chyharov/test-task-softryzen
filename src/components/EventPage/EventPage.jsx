import s from './EventPage.module.scss';
import filterLogo2 from '../../images/icons/filters-2.svg'
import filterLogo3 from '../../images/icons/filters-3.svg'
import plusLogo from '../../images/icons/plus.svg'


const EventPage = () => {
  return (
    <div className={'container ' + s.event__container}>
      
      <ul className={s.buttons__list}>
        <li className={s.buttonsList__item}>
          <button className={s.buttonsList__itemBtn}><img className={s.buttonsList__itemImg} src={filterLogo3} alt="Моя SVG-іконка"/></button>
        </li>
        <li className={s.buttonsList__item}>
          <button className={s.buttonsList__itemBtn}><img className={s.buttonsList__itemImg} src={filterLogo2} alt="Моя SVG-іконка"/></button>
        </li>
        <li className={s.buttonsList__item}>
          <button className={s.buttonsList__itemBtn} style={{ backgroundColor: '#7B61FF' }}>
            <img className={s.buttonsList__itemImg} src={plusLogo} alt="Моя SVG-іконка" />
          </button>
        </li>
      </ul>

      <ul>
        <li>
          <h1>Cards</h1>
        </li>
      </ul>
    </div>

  )
};

export default EventPage;
