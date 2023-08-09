import React, { useState } from 'react';
import s from './EventForm.module.scss';

const EventForm = ({ addEvent }) => {

  return (
    <form className={s.eventForm}>
      <h2 className={s.form__title}>Title</h2>
      <input className={s.form__input} type="text" />

      <h2 className={s.form__title}>Description</h2>
      <input className={s.form__input} type="text" />

      <h2 className={s.form__title}>Select date</h2>
      <input className={s.form__input} type="text" />

      <h2 className={s.form__title}>Select time</h2>
      <input className={s.form__input} type="text" />

      <h2 className={s.form__title}>Location</h2>
      <input className={s.form__input} type="text" />

      <h2 className={s.form__title}>Category</h2>
      <input className={s.form__input} type="text" />

      <h2 className={s.form__title}>Add picture</h2>
      <input className={s.form__input} type="text" />

      <h2 className={s.form__title}>Priority</h2>
      <input className={s.form__input} type="text" />

      <button className={s.form__submit} type="submit">Add Event</button>
    </form>
  );
};

export default EventForm;