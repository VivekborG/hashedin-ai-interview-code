import React from 'react';

const SlotButton = ({ time, booked, onClick }) => {
  return (
    <button
      className={`p-2 rounded border text-sm font-medium
        ${booked ? 'bg-gray-300 text-gray-600 cursor-not-allowed' 
                 : 'bg-blue-500 text-white hover:bg-blue-600'}`}
      disabled={booked}
      onClick={onClick}
    >
      {time}
    </button>
  );
};

export default SlotButton;
