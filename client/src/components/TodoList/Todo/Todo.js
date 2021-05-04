import { DeleteForever, AssignmentTurnedInRounded } from '@material-ui/icons';

const Todo = ({ todo, onDoneTodo, onDeleteItem }) => {
  return (
    <div className="items">
      <p>{todo.text}</p>
      <div>
        <DeleteForever
          style={{ color: '#F88379', cursor: 'pointer' }}
          onClick={() => onDeleteItem('todo', todo)}
        />
        <span style={{ padding: '5px' }}>|</span>
        <AssignmentTurnedInRounded
          style={{ color: '#90c695', cursor: 'pointer' }}
          onClick={() => onDoneTodo(todo)}
        />
      </div>
    </div>
  );
};

export default Todo;
