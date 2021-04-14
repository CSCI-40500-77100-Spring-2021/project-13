import Reminder from './Reminder';

const Reminders = ({ reminders, onDoneReminder }) => {
  return (
    <div>
      {reminders.length > 0
        ? reminders.map((reminder) => {
            return (
              <Reminder reminder={reminder} onDoneReminder={onDoneReminder} />
            );
          })
        : console.log('')}
    </div>
  );
};

export default Reminders;
