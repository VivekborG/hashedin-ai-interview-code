import React from 'react';

function BookedSlots({ appointments }) {
  return (
    <div>
      <h4>Booked Appointments</h4>
      <ul>
        {appointments.map((a) => (
          <li key={a}>{a}</li>
        ))}
      </ul>
    </div>
  );
}

export default BookedSlots;
