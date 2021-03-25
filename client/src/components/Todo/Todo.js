import { FaCheck, FaClock } from 'react-icons/fa';

const Todo = ({ todo, onDoneTodo, onTodoReminder }) => {
  return (
    <div className="items item">
      {todo.text}
      <div>
        <FaClock
          style={{
            fontSize: '20',
            color: 'orange',
            cursor: 'pointer',
            marginRight: '10',
          }}
          onClick={() => onTodoReminder(todo)}
        />
        <FaCheck
          style={{ fontSize: '20', color: 'green', cursor: 'pointer' }}
          onClick={() => onDoneTodo(todo)}
        />
      </div>
    </div>
  );
};

export default Todo;
