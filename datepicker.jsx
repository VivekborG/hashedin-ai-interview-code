import React from 'react';

const DatePicker = ({ selectedDate, onDateChange }) => (
  <div className="mb-4">
    <label className="block mb-2 font-medium">Select a Date:</label>
    <input
      type="date"
      value={selectedDate}
      onChange={(e) => onDateChange(e.target.value)}
      className="border px-3 py-2 rounded w-full"
    />
  </div>
);

export default DatePicker;

