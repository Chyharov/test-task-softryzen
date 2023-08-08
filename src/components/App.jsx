import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
const MainPage = lazy(() => import('pages/MainPage/MainPage'));
const CreateEventPage = lazy(() => import('pages/CreateEventPage/CreateEventPage'));


export const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/CreateEventPage" element={<CreateEventPage />} />
        </Routes>
      </Suspense>
    </>
  );
};
