import { Link } from 'react-router-dom';
import icon from '../../images/icons/sprite.svg';
import s from './Header.module.scss';

const Header = () => {
  return (
    <header className={s.header}>
      <div className={'container ' + s.header__padding}>
        <div className={s.header__container}>
          <h2 className={s.nameLogo}><Link className={s.createNewEvent__linkBack} to="/">Event Planner</Link></h2>

          <select className={s.selectLanguage}>
            <option value="option1">UA</option>
            <option value="option2">EN</option>
          </select>
        </div>

        <form className={s.formSearch}>
          <button className={s.btn__submit}>
            <svg className={s.buttonsList__itemImg} width="24" height="24">
              <use href={`${icon}#icon-search`} />
            </svg>
          </button>
          <input className={s.inputSearch} type="text" placeholder="Search by keywords"/>
        </form>

        
        
      </div>
    </header>
  )
};

export default Header;
