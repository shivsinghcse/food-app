import React, {useState} from "react";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";
import {CirclesWithBar} from "react-loader-spinner";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    // Prepare the data for EmailJS
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: "Namaste React Team", // You can change this as needed
    };

    // Send email using EmailJS
    emailjs
      .send(
        "service_95u2xq5", // Your EmailJS service ID
        "template_w2i8g49", // Your EmailJS template ID
        templateParams, // Data to send in the email
        "ivc0Ak8nVV9blB5Ly", // Your EmailJS user ID
      )
      .then(
        (response) => {
          toast.success("Your message has been sent!");
          setFormData({name: "", email: "", message: ""}); // Clear form
        },
        (error) => {
          console.error("Error sending email:", error);
          toast.error(
            "Sorry, there was an error sending your message. Please try again.",
          );
        },
      )
      .finally(() => {
        setSending(false);
      });
  };

  return (
    <div className='bg-gray-100 dark:bg-gray-500 min-h-screen flex flex-col items-center py-10'>
      <div className='bg-white dark:bg-gray-700 shadow-lg rounded-lg p-8 max-w-2xl w-full'>
        <h1 className='text-3xl font-bold text-gray-800 dark:text-gray-100 text-center mb-8'>
          Contact Us
        </h1>
        <form onSubmit={handleSubmit} className='space-y-6'>
          <div>
            <label
              htmlFor='name'
              className='block text-lg font-medium text-gray-700 dark:text-gray-200'
            >
              Your Name
            </label>
            <input
              type='text'
              id='name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              required
              className='mt-2 block w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-orange-500 focus:border-orange-500 bg-gray-50 dark:bg-gray-600 dark:text-gray-200'
            />
          </div>

          <div>
            <label
              htmlFor='email'
              className='block text-lg font-medium text-gray-700 dark:text-gray-200'
            >
              Your Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
              className='mt-2 block w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-orange-500 focus:border-orange-500 bg-gray-50 dark:bg-gray-600 dark:text-gray-200'
            />
          </div>

          <div>
            <label
              htmlFor='message'
              className='block text-lg font-medium text-gray-700 dark:text-gray-200'
            >
              Your Message
            </label>
            <textarea
              id='message'
              name='message'
              value={formData.message}
              onChange={handleChange}
              required
              rows='4'
              className='mt-2 block w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-orange-500 focus:border-orange-500 bg-gray-50 dark:bg-gray-600 dark:text-gray-200'
            />
          </div>

          <button
            type='submit'
            className='w-full py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition duration-300 flex justify-center items-center'
          >
            {sending ? (
              <CirclesWithBar
                height='30'
                width='30'
                color='#ffffff'
                wrapperStyle={{}}
                wrapperClass=''
                visible={true}
                outerCircleColor=''
                innerCircleColor=''
                barColor=''
                ariaLabel='loading-indicator'
              />
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>

      <footer className='mt-10 text-center text-gray-600 dark:text-gray-400'>
        <p>© 2024 Namaste React. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Contact;
