import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import $ from "jquery";
import "jquery-validation";

export default function AddSubCategory() {
  // State for form data including the parent category
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    images: [],
    parentCategory: "", // Added parent category field
  });

  // Example list of parent categories (could come from an API)
  const parentCategories = [
    { id: "1", name: "Technology" },
    { id: "2", name: "Fashion" },
    { id: "3", name: "Sports" },
    { id: "4", name: "Health" },
  ];

  // Initialize jQuery Validation after the component mounts
  useEffect(() => {
    // jQuery Validation Setup
    $("#addSubCategoryForm").validate({
      rules: {
        name: {
          required: true,
          minlength: 3,
        },
        description: {
          required: true,
          minlength: 10,
        },
        parentCategory: {
          required: true,
        },
      },
      messages: {
        name: {
          required: "Please enter the subcategory name",
          minlength: "Name must be at least 3 characters long",
        },
        description: {
          required: "Please enter a description",
          minlength: "Description must be at least 10 characters long",
        },
        parentCategory: {
          required: "Please select a parent category",
        },
      },
      submitHandler: function (form) {
        handleSubmit(); // Manually call the handleSubmit function
        return false; // Prevent the default form submission
      },
    });
  }, []); // Empty dependency array so it runs only once when component mounts

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle file drop for images
  const onDrop = (acceptedFiles) => {
    setFormData({
      ...formData,
      images: [...formData.images, ...acceptedFiles],
    });
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/jpeg, image/png, image/webp",
  });

  // Form submission handler to log form data
  const handleSubmit = () => {
    // Log form data to the console
    console.log("Subcategory Form Data Submitted:", formData);
  };

  return (
    <div className="subcategory-section">
      <div className="container mt-5">
        <h2 className="mb-4">Add New Subcategory</h2>
        <form id="addSubCategoryForm" onSubmit={(e) => e.preventDefault()}>
          {/* Subcategory Name Field */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter subcategory name"
            />
          </div>

          {/* Subcategory Description Field */}
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter subcategory description"
              rows="4"
            ></textarea>
          </div>

          {/* Parent Category Dropdown */}
          <div className="mb-3">
            <label htmlFor="parentCategory" className="form-label">
              Parent Category
            </label>
            <select
              className="form-control"
              id="parentCategory"
              name="parentCategory"
              value={formData.parentCategory}
              onChange={handleChange}
            >
              <option value="">Select a Parent Category</option>
              {parentCategories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          {/* Subcategory Images Field */}
          <div className="mb-3">
            <label className="form-label">Subcategory Images</label>
            <div
              {...getRootProps()}
              style={{
                border: "2px dashed #E7AF17",
                padding: "20px",
                borderRadius: "8px",
                textAlign: "center",
                cursor: "pointer",
              }}
            >
              <input {...getInputProps()} />
              <p>Drag your images here or click to select files</p>
              <p>(Only *.jpeg, *.webp, *.png images will be accepted)</p>
            </div>
            {formData.images.length > 0 && (
              <div className="mt-3">
                <h5>Images Preview:</h5>
                <div
                  style={{
                    border: "1px solid #ddd",
                    padding: "10px",
                    borderRadius: "8px",
                    maxHeight: "200px",
                    overflowY: "scroll",
                  }}
                >
                  <div className="d-flex flex-wrap">
                    {formData.images.map((image, index) => (
                      <img
                        key={index}
                        src={URL.createObjectURL(image)}
                        alt={`Preview ${index + 1}`}
                        style={{
                          width: "100px",
                          height: "100px",
                          margin: "10px",
                          borderRadius: "8px",
                          objectFit: "cover",
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button type="submit" className="subcategory-btn btn btn-primary w-100">
            Add Subcategory
          </button>
        </form>
      </div>
    </div>
  );
}
