import { AssignmentTurnedInRounded } from '@material-ui/icons';

const Event = ({ event, onDoneEvent, onEventReminder }) => {
  return (
    <div className="items">
      <div>
        <p>{event.text}</p>
        <p>{event.day}</p>
        <p>{event.time}</p>
      </div>
      <div>
        <AssignmentTurnedInRounded
          style={{ color: '#90c695', cursor: 'pointer' }}
          onClick={() => onDoneEvent(event)}
        />
      </div>
    </div>
  );
};

export default Event;
