"use client";
import { useState } from "react";
import Services from "../components/Services";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    query: "", 
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const characterLimit = 200; 

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Handle character limit for the query field
    if (name === "query" && value.length > characterLimit) return;

    setFormData({ ...formData, [name]: value });

    // Trigger validation
    validateForm(name, value);
  };

  const validateForm = (name, value) => {
    let formErrors = { ...errors };

    switch (name) {
      case "name":
        if (!value) formErrors.name = "Name is required.";
        else if (!/^[A-Za-z\s]+$/.test(value))
          formErrors.name = "Name can only contain letters and spaces.";
        else delete formErrors.name;
        break;
      case "email":
        if (!value) formErrors.email = "Email is required.";
        else if (
          !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)
        ) {
          formErrors.email = "Please enter a valid email address.";
        } else delete formErrors.email;
        break;
      case "phone":
        if (!/^\d{10}$/.test(value))
          formErrors.phone = "Valid 10-digit phone number is required.";
        else delete formErrors.phone;
      default:
        break;
    }

    setErrors(formErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      setIsSubmitted(true);
      console.log("Form submitted:", formData);
    }
  };

  return (
    <div className="pt-20 pb-20 min-h-screen font-poppins bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Contact Information */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">Contact Us</h1>
          <p className="text-lg text-gray-600 mt-4">
            Have any questions? Feel free to reach out to us!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
              Our Office
            </h2>
            <div className="mt-5 text-center">
            <p className="text-lg text-gray-700">
              123 Travel St, Adventure City, ABC 12345
            </p>
            <p className="text-lg text-gray-700 mt-4">
              <strong>Phone: </strong>+1 (234) 567-8901
            </p>
            <p className="text-lg text-gray-700 mt-2">
              <strong>Email: </strong>contact@travelexplorer.com
            </p>
            </div>
            
            <div className="mt-1">    <Services/></div>
         
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Send Us a Message
            </h2>
            {isSubmitted && (
              <p className="text-center text-green-500 mb-6">
                Your message has been sent successfully!
              </p>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Field */}
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="p-3 w-full border border-gray-300 rounded-md"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs">{errors.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="p-3 w-full border border-gray-300 rounded-md"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs">{errors.email}</p>
                )}
              </div>

              {/* Phone Field */}
              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Phone Number"
                  className="p-3 w-full border border-gray-300 rounded-md"
                  maxLength="10"
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs">{errors.phone}</p>
                )}
              </div>

              {/* Query Text Box with Character Limit */}
              <div>
                <textarea
                  name="query"
                  value={formData.query}
                  onChange={handleChange}
                  placeholder="Your Query"
                  rows="4"
                  className="p-3 w-full border border-gray-300 rounded-md"
                />
                <div className="text-xs text-gray-500 text-right">
                  {formData.query.length}/{characterLimit} characters
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-blue-600 text-white w-full p-3 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
