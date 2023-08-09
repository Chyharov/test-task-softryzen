import React, { useState, useEffect } from 'react';
import defaultPicture from '../../images/eventPictures/default.jpg'
import s from './EventForm.module.scss';
import { addNewEvent } from '../../services/Events.js';

const EventForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');
  const [picture, setPicture] = useState('');
  const [priority, setPriority] = useState('');
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const savedEvents = JSON.parse(localStorage.getItem('events')) || [];
    setEvents(savedEvents);
  }, []);

  const formatDate = (inputDate) => {
    const [day, month, year] = inputDate.split('-');
    return `${month}.${year}`;
  };

  const handleSubmit = (event) => {
  event.preventDefault();

  const newEvent = {
    id: new Date().getTime(),
    title,
    description,
    date: formatDate(date),
    time,
    city: location,
    category,
    src: defaultPicture,
    priority,
    };
    
    addNewEvent(newEvent);

  const existingEvents = JSON.parse(localStorage.getItem('events')) || [];
  const updatedEvents = [...existingEvents, newEvent];

  localStorage.setItem('events', JSON.stringify(updatedEvents));

  setTitle('');
  setDescription('');
  setDate('');
  setTime('');
  setLocation('');
  setCategory('');
  setPicture('');
  setPriority('');
};

  return (
    <form className={s.eventForm} onSubmit={handleSubmit}>
      <h2 className={s.form__title}>Title</h2>
      <input className={s.form__input} type="text" value={title} onChange={(e) => setTitle(e.target.value)} />

      <h2 className={s.form__title}>Description</h2>
      <input className={s.form__input} type="text" value={description} onChange={(e) => setDescription(e.target.value)} />

      <h2 className={s.form__title}>Select date</h2>
      <input className={s.form__input} type="date" value={date} onChange={(e) => setDate(e.target.value)} />

      <h2 className={s.form__title}>Select time</h2>
      <input className={s.form__input} type="time" value={time} onChange={(e) => setTime(e.target.value)} />

      <h2 className={s.form__title}>Location</h2>
      <input className={s.form__input} type="text" value={location} onChange={(e) => setLocation(e.target.value)} />

      <h2 className={s.form__title}>Category</h2>
      <input className={s.form__input} type="text" value={category} onChange={(e) => setCategory(e.target.value)} />

      <h2 className={s.form__title}>Add picture</h2>
      <input className={s.form__input} type="text" value={defaultPicture} disabled />

      <h2 className={s.form__title}>Priority</h2>
      <input className={s.form__input} type="text" value={priority} onChange={(e) => setPriority(e.target.value)} />

     <button className={s.form__submit} type="submit">Add Event</button>
    </form>
  );
};

export default EventForm;