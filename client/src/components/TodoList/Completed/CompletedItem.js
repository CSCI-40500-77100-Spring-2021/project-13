import { DeleteForever } from '@material-ui/icons';

const CompletedItem = ({ completedItem, onDeleteCompletedItem }) => {
  return (
    <div
      className="items"
      style={{ textDecoration: 'line-through', color: '#989898' }}
    >
      {completedItem.text}
      <DeleteForever
        style={{ color: '#F88379', cursor: 'pointer' }}
        onClick={() => onDeleteCompletedItem(completedItem)}
      />
    </div>
  );
};

export default CompletedItem;
