import React, { useState } from 'react';
import SlotButton from './components/SlotButton';
import DatePicker from './components/DatePicker';
import AdminPrebooker from './components/AdminPrebooker';

const App = () => {
  const WORK_START = 9;
  const WORK_END = 17;

  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0]);
  const [bookedSlots, setBookedSlots] = useState([]);
  const [confirmation, setConfirmation] = useState('');

  const generateSlots = () => {
    const slots = [];
    for (let hour = WORK_START; hour < WORK_END; hour++) {
      slots.push(`${String(hour).padStart(2, '0')}:00`);
      slots.push(`${String(hour).padStart(2, '0')}:30`);
    }
    return slots;
  };

  const isBooked = (slot) => bookedSlots.includes(slot);

  const bookSlot = (slot) => {
    if (!isBooked(slot)) {
      setBookedSlots([...bookedSlots, slot]);
      setConfirmation(`Appointment booked for ${slot}`);
    }
  };

  const prebookSlot = (slot) => {
    if (!isBooked(slot)) {
      setBookedSlots([...bookedSlots, slot]);
    }
  };

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
    setBookedSlots([]);
    setConfirmation('');
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Appointment Booking</h1>

      <DatePicker selectedDate={selectedDate} onDateChange={handleDateChange} />

      <div className="my-4 grid grid-cols-3 gap-2">
        {generateSlots().map((slot) => (
          <SlotButton
            key={slot}
            time={slot}
            booked={isBooked(slot)}
            onClick={() => bookSlot(slot)}
          />
        ))}
      </div>

      {confirmation && (
        <p className="mt-4 text-green-600 font-semibold">{confirmation}</p>
      )}

      <AdminPrebooker onPrebook={prebookSlot} />
    </div>
  );
};

export default App;
