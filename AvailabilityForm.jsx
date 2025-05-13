import React from 'react';

function AvailabilityForm({ setAvailability }) {
  return (
    <div>
      <h4>Set Working Hours</h4>
      <input
        type="time"
        onChange={(e) => setAvailability((prev) => ({ ...prev, start: e.target.value }))}
      />
      <input
        type="time"
        onChange={(e) => setAvailability((prev) => ({ ...prev, end: e.target.value }))}
      />
    </div>
  );
}

export default AvailabilityForm;
