import { useState, useEffect } from 'react';
import moment from 'moment';

const Day = () => {
  const [username, setUsername] = useState('');
  const [date] = useState(new Date());
  const [hour, setHour] = useState(0);

  useEffect(() => {
    setHour(date.getHours());
    setUsername('John');
  }, []);

  const greet = () => {
    var greet;
    if (hour < 12) greet = `Good Morning, ${username}`;
    else if (hour >= 12 && hour < 18) greet = `Good Afternoon, ${username}`;
    else if (hour >= 18 && hour <= 24) {
      greet = `Good Evening, ${username}`;
    }

    return greet;
  };

  return (
    <div className="greeting-container">
      <h2 className="greeting">{greet()}</h2>
      <div className="day-weather">
        <div className="day-info">
          <p>{moment(date).format('dddd')}</p>
          <p>{moment(date).format('LL')}</p>
        </div>
        <div className="weather-info">
          <p>52°F</p>
          <p>Rainy</p>
        </div>
      </div>
    </div>
  );
};

export default Day;
