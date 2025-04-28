let i = 1;
const CategoryPicker = ({onValueChange }) => {
      const selectPreviewCategory = () => {
        onValueChange(i--);
      };
      const selectNextCategory = () => {
        onValueChange(i++);
      };
  return (
    <div id="pagination">
    <a  href="#" onClick={selectPreviewCategory}>Poprzednia</a>
    <a href="#" onClick={selectNextCategory}>Następna</a>
    </div>
  );
};

export default CategoryPicker;