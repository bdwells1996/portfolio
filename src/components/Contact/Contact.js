import { motion } from "framer-motion";
import React, { useState } from "react";

import "./Contact.scss";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interests: "General Inquiry",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here (e.g., sending data to server)
    console.log("Form submitted:", formData);
  };

  return (
    <motion.div
      enter={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="c-contact o-wrapper"
    >
      <h2 className="c-contact__title">
        I’d love to hear from you if you’re interested!
      </h2>
      <form className="c-contact__form" onSubmit={handleSubmit}>
        <div className="c-contact__form__item">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="You name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="c-contact__form__item">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="example@gmail.com"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="c-contact__form__item">
          <label htmlFor="interests">What are you interested in?</label>
          <select
            id="interests"
            name="interests"
            value={formData.interests}
            onChange={handleInputChange}
          >
            <option value="General Inquiry" disabled>
              Please select...
            </option>
            <option value="General Inquiry">General Inquiry</option>
            <option value="Front End Development">Front End Development</option>
            <option value="UX UI Design">UX UI Design</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="c-contact__form__item c-contact__form__item--full">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Let me know all about what your project is and your requirements!"
            value={formData.message}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <button className="c-contact__form__button" type="submit">
          Submit
        </button>
      </form>
    </motion.div>
  );
};

export default Contact;
