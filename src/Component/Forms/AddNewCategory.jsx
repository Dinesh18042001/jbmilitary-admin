import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import $ from "jquery";
import "jquery-validation";

export default function AddNewCategory() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    images: [],
  });

  // Initialize jQuery Validation only after the component mounts
  useEffect(() => {
    // jQuery Validation Setup
    $("#addCategoryForm").validate({
      rules: {
        name: {
          required: true,
          minlength: 3,
        },
        description: {
          required: true,
          minlength: 10,
        },
      },
      messages: {
        name: {
          required: "Please enter the category name",
          minlength: "Name must be at least 3 characters long",
        },
        description: {
          required: "Please enter a description",
          minlength: "Description must be at least 10 characters long",
        },
      },
      // Prevent form submission and call React's handleSubmit method
      submitHandler: function (form) {
        handleSubmit(); // React's form submit handler
        return false; // Prevent form submission (because we're using React state)
      },
    });
  }, []);

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
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="category-section">
      <div className="container mt-5">
      <div className="page-tittle">
      <h4 className="mb-4">Add New Category</h4>
      </div>
        <form id="addCategoryForm" onSubmit={(e) => e.preventDefault()}>
          {/* Name Field */}
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
              placeholder="Enter category name"
            />
          </div>

          {/* Description Field */}
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
              placeholder="Enter category description"
              rows="4"
            ></textarea>
          </div>

          {/* Category Images Field */}
          <div className="mb-3">
            <label className="form-label">Category Images</label>
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
          <button type="submit" className="category-btn btn btn-primary w-100">
            Add Category
          </button>
        </form>
      </div>
    </div>
  );
}
