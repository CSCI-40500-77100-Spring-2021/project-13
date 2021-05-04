import { DeleteForever, AssignmentTurnedInRounded } from '@material-ui/icons';

const Event = ({ event, onDoneEvent, onDeleteItem }) => {
  return (
    <div className="items">
      <div>
        <p>{event.text}</p>
        <p>{event.day}</p>
        <p>{event.time}</p>
      </div>
      <div>
        <DeleteForever
          style={{ color: '#F88379', cursor: 'pointer' }}
          onClick={() => onDeleteItem('event', event)}
        />
        <span style={{ padding: '5px' }}>|</span>
        <AssignmentTurnedInRounded
          style={{ color: '#90c695', cursor: 'pointer', marginRight: '0' }}
          onClick={() => onDoneEvent(event)}
        />
      </div>
    </div>
  );
};

export default Event;
