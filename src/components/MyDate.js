import React, { useEffect, useState } from 'react';

function MyDate() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="date">
      <div className="dateRight">
        <div id="dateNumber">{date.toLocaleString('id-ID', { day: 'numeric' })}</div>
        <div>
          <div id="dateMonth">{date.toLocaleString('id-ID', { month: 'long' })}</div>
          <div id="dateYear">{date.toLocaleString('id-ID', { year: 'numeric' })}</div>
        </div>
      </div>
      <div id="dateText">{date.toLocaleString('id-ID', { weekday: 'long' })}</div>
    </div>
  );
}

export default MyDate;
