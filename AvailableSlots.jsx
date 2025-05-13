import React from 'react';

function AvailableSlots({ slots, bookAppointment }) {
  return (
    <div>
      <h4>Available 30-minute Slots</h4>
      <ul>
        {slots.map((slot) => (
          <li key={slot}>
            {slot} <button onClick={() => bookAppointment(slot)}>Book</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AvailableSlots;

