const CategoryPicker = ({onValueChange }) => {
      const selectCategoryNotebook = () => {
        onValueChange(1);
      };
      const selectCategorySummerVibe = () => {
        onValueChange(2);
      };
  return (
    <div>
    <a href="#" onClick={selectCategoryNotebook}>Kategoria Laptop</a>
    <a href="#" onClick={selectCategorySummerVibe}>Kategoria Lato</a>
    <a href="#" onClick={selectCategoryNotebook}>Kategoria Kino</a>
    </div>
  );
};

export default CategoryPicker;