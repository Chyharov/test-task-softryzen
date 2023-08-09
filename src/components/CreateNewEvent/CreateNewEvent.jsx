import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import EventForm from '../EventForm/EventForm';
import s from './CreateNewEvent.module.scss'

const CreateNewEvent = () => {

    return (

        <section className={s.createNewEvent}>
            <div className={'container ' + s.event__container}>

                <Link className={s.createNewEvent__linkBack} to="/">Back</Link>

                <h2 className={s.createNewEvent__Title}>Create new event</h2>
                
                <EventForm />

            </div>
        </section>
    
  );
};

export default CreateNewEvent;
