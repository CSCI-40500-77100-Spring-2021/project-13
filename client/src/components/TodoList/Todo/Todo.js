import { AssignmentTurnedInRounded } from '@material-ui/icons';

const Todo = ({ todo, onDoneTodo, onTodoReminder }) => {
  return (
    <div className="items">
      <p>{todo.text}</p>
      <div>
        <AssignmentTurnedInRounded
          style={{ color: '#90c695', cursor: 'pointer' }}
          onClick={() => onDoneTodo(todo)}
        />
      </div>
    </div>
  );
};

export default Todo;
