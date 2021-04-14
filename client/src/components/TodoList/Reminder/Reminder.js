import { FaCheck } from 'react-icons/fa';

const Reminder = ({ reminder, onDoneReminder }) => {
  return (
    <div className="items item">
      {reminder.text}
      <FaCheck
        style={{ fontSize: '20', color: 'green', cursor: 'pointer' }}
        onClick={() => onDoneReminder(reminder)}
      />
    </div>
  );
};

export default Reminder;
