import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './style.css';
import { Inbox } from './Pages/Inbox';
import { Spam } from './Pages/Spam';
import { Trash } from './Pages/Trash';
import { Navbar } from './Components/Navbar';
import { EmailDetail } from './Pages/EmailDetail';
import { SpamMailDetail } from './Pages/SpamMailDetail';
import { TrashMailDetail } from './Pages/TrashMailDetail';


export default function App() {
  return (
    <>
      <div className="main-container">
        <Navbar />
        <div className="inner-container">
          <Routes>
            <Route path="/" element={<Inbox />} />
            <Route path="/spam" element={<Spam />} />
            <Route path="/trash" element={<Trash />} />
            <Route path="/inbox/:id" element={<EmailDetail />} />
            <Route path="/spam/:id" element={<SpamMailDetail />} />
            <Route path="/trash/:id" element={<TrashMailDetail />} />
          </Routes>
        </div>
      </div>
    </>
  );
}
