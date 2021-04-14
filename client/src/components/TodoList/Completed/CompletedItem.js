import { FaTrash } from 'react-icons/fa';

const CompletedItem = ({ completedItem, onDeleteCompletedItem }) => {
  return (
    <div
      className="items item"
      style={{ textDecoration: 'line-through', color: 'gray' }}
    >
      {completedItem.text}
      <FaTrash
        style={{ color: 'red', cursor: 'pointer' }}
        onClick={() => onDeleteCompletedItem(completedItem)}
      />
    </div>
  );
};

export default CompletedItem;
