import CompletedItem from './CompletedItem';

const CompletedItems = ({ completedItems, onDeleteCompletedItem }) => {
  return (
    <div>
      {completedItems.length > 0
        ? completedItems.map((completedItem, index) => {
            return (
              <CompletedItem 
                key={index}
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
