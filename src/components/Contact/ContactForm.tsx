"use client";

import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill out all fields.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Save to Local Storage (Temporary)
    const savedMessages = JSON.parse(localStorage.getItem("messages") || "[]");
    localStorage.setItem("messages", JSON.stringify([...savedMessages, formData]));

    // Reset form and show success message
    setFormData({ name: "", email: "", message: "" });
    setSuccess(true);

    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white dark:bg-gray-900 shadow-lg rounded-xl mt-10">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-5">
        Contact Me
      </h2>

      {success && (
        <p className="text-green-600 text-center mb-4">
          Message sent successfully!
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Input */}
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg dark:bg-gray-800 dark:text-white"
        />

        {/* Email Input */}
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg dark:bg-gray-800 dark:text-white"
        />

        {/* Message Textarea */}
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows={5}
          className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg dark:bg-gray-800 dark:text-white"
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
