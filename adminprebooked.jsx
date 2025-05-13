import React, { useState } from 'react';

const AdminPrebooker = ({ onPrebook }) => {
  const [slotInput, setSlotInput] = useState('');

  const handlePrebook = () => {
    const validFormat = /^([0-1]?[0-9]|2[0-3]):(00|30)$/;
    if (validFormat.test(slotInput)) {
      onPrebook(slotInput);
      setSlotInput('');
    } else {
      alert("Invalid time format. Use HH:MM (e.g., 14:00)");
    }
  };

  return (
    <div className="mt-6">
      <h3 className="font-semibold mb-2">Admin: Pre-book a Slot</h3>
      <div className="flex gap-2">
        <input
          type="text"
          value={slotInput}
          onChange={(e) => setSlotInput(e.target.value)}
          placeholder="Enter slot (e.g. 14:00)"
          className="border px-3 py-2 rounded w-full"
        />
        <button
          onClick={handlePrebook}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Pre-book
        </button>
      </div>
    </div>
  );
};

export default AdminPrebooker;
