import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ImageLoader = (props) => {
  const category = props.category;
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(`https://picsum.photos/v2/list?page=${category}&limit=12   `);
        setImages(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchImages();
  }, [category]);

  if (loading) {
    return <div>Ładowanie...</div>;
  }

  if (error) {
    return <div>Błąd: {error}</div>;
  }

  return (
    <div>
      <div>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image.download_url} alt={`Obrazek ${index}`}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageLoader;