import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    numberOfPeople: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Trigger validation immediately when the user types in the input
    validateForm(name, value);
  };

  const validateForm = (name, value) => {
    let formErrors = { ...errors };

    switch (name) {
      case "name":
        if (!value) formErrors.name = "Name is required.";
        else if (!/^[A-Za-z\s]+$/.test(value))
          formErrors.name = "Name can only contain letters and spaces.";
        else delete formErrors.name; // Remove error if valid
        break;
      case "email":
        if (!value) formErrors.email = "Email is required.";
        else if (
          !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)
        ) {
          formErrors.email = "Please enter a valid email address.";
        } else delete formErrors.email; // Remove error if valid
        break;
      case "phone":
        if (!/^\d{10}$/.test(value))
          formErrors.phone = "Valid 10-digit phone number is required.";
        else delete formErrors.phone; // Remove error if valid
        break;
      case "numberOfPeople":
        if (!/^\d+$/.test(value))
          formErrors.numberOfPeople =
            "Number of people must be a valid number.";
        else delete formErrors.numberOfPeople; // Remove error if valid
        break;
      default:
        break;
    }

    setErrors(formErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      console.log("Form submitted:", formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-sm mx-auto">
      {/* Name Field */}
      <div>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className="p-2 w-full text-sm"
        />
        {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
      </div>

      {/* Email Field */}
      <div>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="p-2 w-full text-sm"
        />
        {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
      </div>

      {/* Phone Field */}
      <div>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          maxLength="10"
          className="p-2 w-full text-sm"
        />
        {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
      </div>

      {/* Number of People Field */}
      <div>
        <input
          type="number"
          name="numberOfPeople"
          value={formData.numberOfPeople}
          onChange={handleChange}
          placeholder="Number of People"
          className="p-2 w-full text-sm"
        />
        {errors.numberOfPeople && (
          <p className="text-red-500 text-xs">{errors.numberOfPeople}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 w-full text-sm"
      >
        Submit
      </button>
    </form>
  );
}
