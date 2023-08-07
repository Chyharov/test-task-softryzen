import s from './Header.module.scss';

const Header = () => {
  return (
    <header className={s.header}>
      <div className={'container ' + s.header__padding}>
        <div className={s.header__container}>
          <h2 className={s.nameLogo}>Event Planner</h2>

          <select className={s.selectLanguage}>
            <option value="option1">UA</option>
            <option value="option2">EN</option>
          </select>
        </div>

        <form className={s.formSearch}>
          <button className={s.btn__submit}>
          </button>
          <input className={s.inputSearch} type="text" placeholder="Search by keywords"/>
        </form>

        
        
      </div>
    </header>
  )
};

export default Header;
