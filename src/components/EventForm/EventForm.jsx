import React, { useState } from 'react';
import defaultPicture from '../../images/eventPictures/default.jpg'
import s from './EventForm.module.scss';
import { addNewEvent } from '../../services/Events.js';

const EventForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [titleError, setTitleError] = useState('');
  const [descriptionError, setDescriptionError] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('Art');
  const [priority, setPriority] = useState('High');
  const [locationError, setLocationError] = useState('');

  const formatDate = (inputDate) => {
    const [, month, day] = inputDate.split('-');
    return `${month}.${day}`;
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
    setCategory('Art');
    setPriority('High');
  };

  const isFormValid = () => {
  return (
    title.trim() !== '' &&
    description.trim() !== '' &&
    date !== '' &&
    time !== '' &&
    /^[A-Za-z]+$/.test(location.trim()) &&
    /^[A-Za-z]+$/.test(title.trim()) &&
    /^[A-Za-z]+$/.test(description.trim())
  );
  };
  
const handleTitleChange = (e) => {
  const newTitle = e.target.value;
  setTitle(newTitle);

  if (!/^[A-Za-z]+$/.test(newTitle.trim())) {
    setTitleError('Invalid input');
  } else {
    setTitleError('');
  }
};

const handleDescriptionChange = (e) => {
  const newDescription = e.target.value;
  setDescription(newDescription);

  if (!/^[A-Za-z]+$/.test(newDescription.trim())) {
    setDescriptionError('Invalid input');
  } else {
    setDescriptionError('');
  }
};

const handleLocationChange = (e) => {
  const newLocation = e.target.value;
  setLocation(newLocation);

  if (!/^[A-Za-z]+$/.test(newLocation.trim())) {
    setLocationError('Invalid input');
  } else {
    setLocationError('');
  }
};

  return (
    <form className={s.eventForm} onSubmit={handleSubmit}>
      <h2 className={s.form__title}>Title</h2>
      <input className={`${s.form__input} ${titleError ? s.errorInput : ''}`} type="text" value={title} onChange={handleTitleChange}/>
      {titleError && <p className={s.error}>{titleError}</p>}

      <h2 className={s.form__title}>Description</h2>
      <input className={`${s.form__input} ${descriptionError ? s.errorInput : ''}`} type="text" value={description} onChange={handleDescriptionChange}/>
      {descriptionError && <p className={s.error}>{descriptionError}</p>}

      <h2 className={s.form__title}>Select date</h2>
      <input className={s.form__input} type="date" value={date} onChange={(e) => setDate(e.target.value)} />

      <h2 className={s.form__title}>Select time</h2>
      <input className={s.form__input} type="time" value={time} onChange={(e) => setTime(e.target.value)} />

      <h2 className={s.form__title}>Location</h2>
      <input
        className={`${s.form__input} ${locationError ? s.errorInput : ''}`}
        type="text"
        value={location}
        onChange={handleLocationChange}
      />
      {locationError && <p className={s.error}>{locationError}</p>}

      <h2 className={s.form__title}>Category</h2>
      <select className={s.form__input} value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Art">Art</option>
        <option value="Conference">Conference</option>
        <option value="Workshop">Workshop</option>
        <option value="Party">Party</option>
        <option value="Business">Business</option>
        <option value="Music">Music</option>
        <option value="Sport">Sport</option>
      </select>

      <h2 className={s.form__title}>Add picture</h2>
      <input className={s.form__input} type="text" value={defaultPicture} disabled />

      <h2 className={s.form__title}>Priority</h2>
      <select className={s.form__input} value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>

     <button aria-label="button submit"
        className={`${s.form__submit} ${isFormValid() ? '' : s.disabled}`}
        type="submit"
        disabled={!isFormValid()}
      >
        Add Event
      </button>
    </form>
  );
};

export default EventForm;