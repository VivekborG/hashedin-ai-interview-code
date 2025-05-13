import React from 'react';

function AppointmentForm({ setAppointments, appointments }) {
  const addAppointment = (e) => {
    const time = e.target.value;
    if (!appointments.includes(time)) {
      setAppointments([...appointments, time]);
    }
  };

  return (
    <div>
      <h4>Add Pre-booked Appointment</h4>
      <input type="time" onBlur={addAppointment} />
    </div>
  );
}

export default AppointmentForm;
