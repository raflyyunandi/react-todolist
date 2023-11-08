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
        <div className="dateNumber">{date.toLocaleString('id-ID', { day: 'numeric' })}</div>
        <div>
          <div className="dateMonth">{date.toLocaleString('id-ID', { month: 'long' })}</div>
          <div className="dateYear">{date.toLocaleString('id-ID', { year: 'numeric' })}</div>
        </div>
      </div>
      <div className="dateText">{date.toLocaleString('id-ID', { weekday: 'long' })}</div>
    </div>
  );
}

export default MyDate;
