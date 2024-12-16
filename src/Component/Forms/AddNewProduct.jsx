

import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import $ from "jquery";
import "jquery-validation";

export default function AddNewProduct() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    images: [],
    galleryImages: [],
    sku: "",
    category: "",
    productPrice: "",
    salePrice: "",
    quantity: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onDropImages = (acceptedFiles) => {
    setFormData((prevData) => ({
      ...prevData,
      images: [...prevData.images, ...acceptedFiles],
    }));
  };

  const onDropGalleryImages = (acceptedFiles) => {
    setFormData((prevData) => ({
      ...prevData,
      galleryImages: [...prevData.galleryImages, ...acceptedFiles],
    }));
  };

  const {
    getRootProps: getRootPropsImages,
    getInputProps: getInputPropsImages,
  } = useDropzone({
    onDrop: onDropImages,
    accept: ".jpeg,.jpg,.png,.webp", 
  });

  const {
    getRootProps: getRootPropsGallery,
    getInputProps: getInputPropsGallery,
  } = useDropzone({
    onDrop: onDropGalleryImages,
    accept: ".jpeg,.jpg,.png,.webp", 
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  // jQuery Validation Setup
  useEffect(() => {
    // Validate form using jQuery validation
    $("#addProductForm").validate({
      rules: {
        title: {
          required: true,
        },
        description: {
          required: true,
        },
        sku: {
          required: true,
        },
        category: {
          required: true,
        },
        productPrice: {
          required: true,
          number: true,
        },
        productSellPrice: {
          required: true,
          number: true,
        },
        quantity: {
          required: true,
          number: true,
        },
      },
      messages: {
        title: {
          required: "Please enter the product title",
        },
        description: {
          required: "Please enter a product description",
        },
        sku: {
          required: "Please enter the product SKU",
        },
        category: {
          required: "Please select a category",
        },
        productPrice: {
          required: "Please enter the product price",
          number: "Please enter a valid price",
        },
        productSellPrice: {
          required: "Please enter the product sell price",
          number: "Please enter a valid price",
        },
        quantity: {
          required: "Please enter the product quantity",
          number: "Please enter a valid quantity",
        },
      },
      submitHandler: handleSubmit,
    });
  }, [formData]); // Re-run the effect when formData changes

  return (
    <div className="add-product-section">
      <div className="container my-5">
        <h2>Add New Product</h2>
        <form id="addProductForm" onSubmit={handleSubmit}>
          {/* Product Title */}
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Product Title/Name
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="form-control"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          {/* Product Description */}
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Product Description
            </label>
            <textarea
              id="description"
              name="description"
              className="form-control"
              rows="4"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>
          AddSubCategory
          {/* Product Images */}
          <div className="mb-3">
            <label htmlFor="images" className="form-label">
              Product Images
            </label>
            <div
              {...getRootPropsImages()}
              style={{
                border: "2px dashed #E7AF17",
                padding: "20px",
                borderRadius: "8px",
                textAlign: "center",
                cursor: "pointer",
              }}
            >
              <input {...getInputPropsImages()} />
              <p>Drag your images here or click to select files</p>
              <p>(Only *.jpeg, *.webp, *.png images will be accepted)</p>
              {formData.images.length > 0 && (
                <div className="preview">
                  <h5>Images Preview:</h5>
                  {formData.images.map((image, index) => (
                    <img
                      key={index}
                      src={URL.createObjectURL(image)}
                      alt={`Product Image ${index + 1}`}
                      style={{
                        width: "100px",
                        height: "100px",
                        margin: "10px",
                        borderRadius: "8px",
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Product Gallery Images */}
          <div className="mb-3">
            <label htmlFor="galleryImages" className="form-label">
              Product Gallery Images
            </label>
            <div
              {...getRootPropsGallery()}
              style={{
                border: "2px dashed #E7AF17",
                padding: "20px",
                borderRadius: "8px",
                textAlign: "center",
                cursor: "pointer",
              }}
            >
              <input {...getInputPropsGallery()} />
              <p>Drag your gallery images here or click to select files</p>
              <p>(Only *.jpeg, *.webp, *.png images will be accepted)</p>
              {formData.galleryImages.length > 0 && (
                <div className="preview">
                  <h5>Gallery Images Preview:</h5>
                  {formData.galleryImages.map((image, index) => (
                    <img
                      key={index}
                      src={URL.createObjectURL(image)}
                      alt={`Gallery Image ${index + 1}`}
                      style={{
                        width: "100px",
                        height: "100px",
                        margin: "10px",
                        borderRadius: "8px",
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Product SKU */}
          <div className="mb-3">
            <label htmlFor="sku" className="form-label">
              Product SKU
            </label>
            <input
              type="text"
              id="sku"
              name="sku"
              className="form-control"
              value={formData.sku}
              onChange={handleChange}
              required
            />
          </div>

          {/* Category */}
          <div className="mb-3">
            <label htmlFor="category" className="form-label">
              Category
            </label>
            <select
              id="category"
              name="category"
              className="form-select"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="">Select Category</option>
              <option value="electronics">Electronics</option>
              <option value="clothing">Clothing</option>
              <option value="home">Home</option>
              {/* Add more categories as needed */}
            </select>
          </div>

          {/* Product Price */}
          <div className="mb-3">
            <label htmlFor="productPrice" className="form-label">
              Regular Price
            </label>
            <input
              type="number"
              id="productPrice"
              name="productPrice"
              className="form-control"
              value={formData.productPrice}
              onChange={handleChange}
              required
              min="0"
            />
          </div>

          {/* Sale Price */}
          <div className="mb-3">
            <label htmlFor="productSellPrice" className="form-label">
              Sale Price
            </label>
            <input
              type="number"
              id="salePrice"
              name="productSellPrice"
              className="form-control"
              value={formData.productSellPrice}
              onChange={handleChange}
              min="0"
            />
          </div>

          {/* Product Quantity */}
          <div className="mb-3">
            <label htmlFor="quantity" className="form-label">
              Product Quantity
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              className="form-control"
              value={formData.quantity}
              onChange={handleChange}
              required
              min="0"
            />
          </div>

          {/* Submit Button */}
          <div className="mb-3">
            <button
              type="submit"
              className="product-add-btn btn btn-success w-100"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

