import { FaCheck, FaClock } from 'react-icons/fa';

const Event = ({ event, onDoneEvent, onEventReminder }) => {
  return (
    <div className="items">
      <div className="item">
        {event.text}
        <div>
          <FaClock
            style={{
              fontSize: '20',
              color: 'orange',
              cursor: 'pointer',
              marginRight: '10',
            }}
            onClick={() => onEventReminder(event)}
          />
          <FaCheck
            style={{ fontSize: '20', color: 'green', cursor: 'pointer' }}
            onClick={() => onDoneEvent(event)}
          />
        </div>
      </div>
      <p>{event.day}</p>
    </div>
  );
};

export default Event;
