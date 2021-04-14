import CompletedItem from './CompletedItem';

const CompletedItems = ({ completedItems, onDeleteCompletedItem }) => {
  return (
    <div>
      {completedItems.length > 0
        ? completedItems.map((completedItem) => {
            return (
              <CompletedItem
                completedItem={completedItem}
                onDeleteCompletedItem={onDeleteCompletedItem}
              />
            );
          })
        : console.log('')}
    </div>
  );
};

export default CompletedItems;
