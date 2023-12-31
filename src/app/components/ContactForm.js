"use client";
import React from "react";
import { useState } from "react";

const ContactForm = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState(null);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: user.username,
          email: user.email,
          phone: user.phone,
          message: user.message,
        }),
      });
      if (response.status === 200) {
        setUser({
          username: "",
          email: "",
          phone: "",
          message: "",
        });
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <form className="p-5" onSubmit={handleSubmit}>
        <div className="text-center">
          <p className="text-xl mb-2">You may also write to us.</p>
          <h1 className="text-4xl font-bold mb-8">Send Us a Message</h1>
        </div>
        <div>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Name"
            className="w-full rounded-lg bg-blue-300 mb-2 p-2 focus:outline-none"
            value={user.username}
            onChange={handleChange}
            autoComplete="off"
            required
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="w-full rounded-lg bg-blue-300 mb-2 p-2 focus:outline-none"
            value={user.email}
            onChange={handleChange}
            autoComplete="off"
            required
          />
        </div>
        <div>
          <input
            type="number"
            name="phone"
            id="phone"
            placeholder="Mobile"
            className="w-full rounded-lg bg-blue-300 mb-2 p-2 focus:outline-none"
            value={user.phone}
            onChange={handleChange}
            autoComplete="off"
            required
          />
        </div>
        <div>
          <textarea
            name="message"
            id="message"
            rows={4}
            placeholder="Message"
            className="w-full rounded-lg bg-blue-300 mb-2 p-2 focus:outline-none"
            value={user.message}
            onChange={handleChange}
            autoComplete="off"
            required
          />
        </div>
        <div className="cursor-pointer">
          {status === "success" && (
            <p className="text-[#a8e48a]">Thank You for your message!</p>
          )}
          {status === "error" && (
            <p className="text-red-500 mb-2">
              There was a error submitting your message. Please Try Again.
            </p>
          )}
          <button type="submit" className="w-full rounded-lg bg-blue-300 p-2">
            Send
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
