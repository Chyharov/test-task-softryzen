import s from './CreateNewEvent.module.scss'
import { Link } from 'react-router-dom';

const CreateNewEvent = () => {
  return (
      <section>
        <div className={'container ' + s.event__container}>
        <Link className={s.header__linkBack} to="/">Назад</Link>

          <h1 className={s.CreateNewEvent}>CreateNewEvent</h1>
          
          <form>
              <h2>Title</h2>
              <input type="text" />

              <h2>Description</h2>
              <input type="text" />

              <h2>Select date</h2>
              <input type="text" />

              <h2>Select time</h2>
              <input type="text" />
              
              <h2>Location</h2>
              <input type="text" />

              <h2>Category</h2>
              <input type="text" />

              <h2>Add picture</h2>
              <input type="text" />

              <h2>Priority</h2>
              <input type="text" />
            </form>
        </div>
    </section>
  );
};



export default CreateNewEvent;