'use client'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    const serviceID = "service_pu0huzp";
    const templateID = "template_bs3vtq6";
    const publicKey = "SVwM-CPv6nvolRb78";

    emailjs
      .sendForm(serviceID, templateID, form.current, publicKey)
      .then(
        (result) => {
          toast.success('Message sent successfully!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          form.current.reset();
        },
        (error) => {
          toast.error('Failed to send message. Please try again.', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      );
  };

  return (
    <div className="min-h-screen py-20" id="contact">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text">
            Get in Touch
          </span>
        </h2>

        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 backdrop-blur-sm border border-cyan-500/20">
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label htmlFor="user_name" className="block text-white mb-2">Name</label>
                <input
                  type="text"
                  name="user_name"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-cyan-500/20 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="user_email" className="block text-white mb-2">Email</label>
                <input
                  type="email"
                  name="user_email"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-cyan-500/20 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white mb-2">Message</label>
                <textarea
                  name="message"
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-cyan-500/20 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="Enter your message"
                  required
                ></textarea>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="group relative inline-flex items-center px-8 py-3 overflow-hidden text-lg font-medium text-white border-2 border-cyan-400 rounded-full hover:scale-105 transition-transform duration-300"
                >
                  <span className="absolute left-0 w-full h-0 transition-all bg-gradient-to-r from-cyan-500 to-blue-500 opacity-100 group-hover:h-full group-hover:top-0 duration-400 ease"></span>
                  <span className="relative flex items-center gap-2">
                    Send Message
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
