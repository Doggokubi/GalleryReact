import React, { useState, useEffect } from "react";
import axios from "axios";

const ImageLoader = (props) => {
  const category = props.category;
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null); // przechowywanie wybranego zdjęcia w modal

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          `https://picsum.photos/v2/list?page=${category}&limit=12`
        );
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

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image.download_url}
              alt={`Obrazek ${index}`}
              onClick={() => handleImageClick(image.download_url)}
              style={{
                cursor: "pointer",
                width: "150px",
                height: "auto",
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="modal" onClick={handleCloseModal} style={{width: "50%", marginLeft: "25%"}}>
          <img
            src={selectedImage}
            alt="Podgląd"
            style={{
            height: "600px",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default ImageLoader;
