import React, { useState } from 'react';
import '../styles/Volunteer.css';

function Volunteer() {
  const [dateTimes, setDateTimes] = useState([{ date: '', time: '' }]);

  const addDateTime = () => {
    setDateTimes([...dateTimes, { date: '', time: '' }]);
  };

  const handleDateChange = (index: number, value: string) => {
    const newDateTimes = [...dateTimes];
    newDateTimes[index].date = value;
    setDateTimes(newDateTimes);
  };

  const handleTimeChange = (index: number, value: string) => {
    const newDateTimes = [...dateTimes];
    newDateTimes[index].time = value;
    setDateTimes(newDateTimes);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
  };

  return (
    <div className="whole">
      <div className="left">
        <img src="./src/assets/formimg.svg" alt="Form Illustration" />
      </div>
      <div className="right">
        <h1>Register as a Volunteer</h1>
        <form id="volunteerForm" onSubmit={handleSubmit}>
          <input type="text" placeholder="Display Name" />
          <input type="text" placeholder="Skills/Interests (Separate with comma)" />

          <div id="datetime-section">
            {dateTimes.map((dt, index) => (
              <div className="form-group" key={index}>
                <input
                  type="date"
                  name="dates[]"
                  value={dt.date}
                  onChange={(e) => handleDateChange(index, e.target.value)}
                />
                <input
                  type="time"
                  name="times[]"
                  value={dt.time}
                  onChange={(e) => handleTimeChange(index, e.target.value)}
                />
              </div>
            ))}
          </div>

          <button className="datebutton" type="button" onClick={addDateTime}>
            Add More Date & Time
          </button>

          <textarea placeholder="Profile Bio (Optional)"></textarea>

          <div className="form-group">
            <label>
              Upload Profile Picture
              <input type="file" />
            </label>
          </div>
          <button type="submit" className="submitbutton">
            REGISTER AS VOLUNTEER
          </button>
        </form>
      </div>
    </div>
  );
}

export default Volunteer;
