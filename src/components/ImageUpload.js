import React, { useState } from "react";
import "./ImageUpload.css";

const ImageUpload = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="upload-container">
      <h2>Upload an Image</h2>
      <div className="image-upload">
        <label htmlFor="file-input">
          <div className="upload-placeholder">
            {image ? (
              <img src={image} alt="Uploaded" className="uploaded-image" />
            ) : (
              <span>Click to Upload Image</span>
            )}
          </div>
        </label>
        <input
          id="file-input"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
      </div>
    </div>
  );
};

export default ImageUpload;
