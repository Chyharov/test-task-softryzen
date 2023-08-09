import { Link } from 'react-router-dom';
import EventForm from '../EventForm/EventForm';
import icon from '../../images/icons/sprite.svg';
import s from './CreateNewEvent.module.scss'

const CreateNewEvent = () => {

    return (

        <section className={s.createNewEvent}>
            <div className={'container ' + s.event__container}>

                <button className={s.button__back} aria-label="button back">
                    <Link className={s.createNewEvent__linkBack} to="/">
                    <svg className={s.buttonsList__itemImg} width="24" height="24">
                        <use href={`${icon}#icon-arrow-left`} />
                    </svg>
                    <p>Back</p></Link>
                </button>

                <h2 className={s.createNewEvent__Title}>Create new event</h2>
                
                <EventForm />

            </div>
        </section>
    
  );
};

export default CreateNewEvent;
