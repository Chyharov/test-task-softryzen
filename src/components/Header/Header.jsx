import s from '../Header/Header.module.scss';

const Header = () => {
  return (
    <header className={s.header}>
      <div className={'container ' + s.header__container}>

        <h2 className={s.nameLogo}>Event Planner</h2>

        <select className={s.selectLanguage}>
          <option value="option1">UA</option>
          <option value="option2">EN</option>
        </select>
        
      </div>
    </header>
  )
};

export default Header;
