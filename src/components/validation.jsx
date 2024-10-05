import React, { useState } from "react";

const SimpleForm = () => {
  // State to handle input values
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // State to handle error messages
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Validate form data
  const validate = () => {
    let formErrors = {};

    // Email validation
    if (!formData.email) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Email address is invalid";
    }

    // Password validation
    if (!formData.password) {
      formErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      formErrors.password = "Password must be at least 6 characters";
    }

    return formErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      console.log("Form submitted successfully", formData);
      // Perform any additional actions like sending the data to the server
    } else {
      setErrors(formErrors); // Set validation errors if any
    }
  };

  return (
    <div className="flex justify-center mt-[-5cm] mb-5">
      <form onSubmit={handleSubmit} className="w-96 p-6 border bg-gray-100 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Login Form</h2>

        {/* Email Field */}
        <div className="mb-4">
          <label className="block text-gray-700">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
          {errors.email && <p className="text-red-500 mt-1">{errors.email}</p>}
        </div>

        {/* Password Field */}
        <div className="mb-4">
          <label className="block text-gray-700">Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
          {errors.password && <p className="text-red-500 mt-1">{errors.password}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SimpleForm;
