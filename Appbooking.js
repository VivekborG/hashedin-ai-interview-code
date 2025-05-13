import React, { useState } from 'react';
import AvailabilityForm from './components/AvailabilityForm';
import AppointmentForm from './components/AppointmentForm';
import AvailableSlots from './components/AvailableSlots';
import BookedSlots from './components/BookedSlots';

function App() {
  const [availability, setAvailability] = useState({ start: '', end: '' });
  const [appointments, setAppointments] = useState([]);
  const [currentTime, setCurrentTime] = useState('00:00');

  const toMinutes = (timeStr) => {
    const [h, m] = timeStr.split(':').map(Number);
    return h * 60 + m;
  };

  const toTimeStr = (mins) => {
    const h = String(Math.floor(mins / 60)).padStart(2, '0');
    const m = String(mins % 60).padStart(2, '0');
    return `${h}:${m}`;
  };

  const getAvailableSlots = () => {
    const available = [];
    const start = toMinutes(availability.start);
    const end = toMinutes(availability.end);
    const now = toMinutes(currentTime);

    for (let time = start; time + 30 <= end; time += 30) {
      const slot = toTimeStr(time);
      if (!appointments.includes(slot) && time >= now) {
        available.push(slot);
      }
    }

    return available;
  };

  const bookAppointment = (startTime) => {
    if (!appointments.includes(startTime)) {
      setAppointments([...appointments, startTime]);
    } else {
      alert('Slot already booked');
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Simple Appointment Booking System</h2>

      <AvailabilityForm setAvailability={setAvailability} />
      <AppointmentForm setAppointments={setAppointments} appointments={appointments} />
      
      <div>
        <h4>Current Time (optional filter)</h4>
        <input type="time" onChange={(e) => setCurrentTime(e.target.value)} />
      </div>

      <AvailableSlots slots={getAvailableSlots()} bookAppointment={bookAppointment} />
      <BookedSlots appointments={appointments} />
    </div>
  );
}

export default App;
