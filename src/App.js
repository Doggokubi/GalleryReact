import './App.css';
import CategoryPicker from './CategoryPicker';
import Iamgeloader from './ImageLoader';
import React, { useState } from 'react'; 

function App() {
  const [category, setCategory] = useState(17); 
  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory); 
  }; 
  const handleImageLoaderChange = (newCategory) => {
    console.log(newCategory);
  };

  return (
    <>
    <CategoryPicker
        category={category}
        onValueChange={handleCategoryChange}
      />
    <Iamgeloader category={category} onValueChange={handleImageLoaderChange}/>
    </>
  );
}

export default App;
