import './App.css';
import CategoryPicker from './CategoryPicker.jsx';
import Iamgeloader from './ImageLoader.jsx';
import React, { useState } from 'react'; 

function App() {
  const [category, setCategory] = useState(1); 
  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory); 
  }; 
  const handleImageLoaderChange = (newCategory) => {
    console.log(newCategory);
  };

  return (
    <>
    <Iamgeloader category={category} onValueChange={handleImageLoaderChange}/>
    <CategoryPicker
        category={category}
        onValueChange={handleCategoryChange}
      />
    </>
  );
}

export default App;
