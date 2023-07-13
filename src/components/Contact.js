import React from "react";

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic
  };

  return (
    <section className="ContactSection border border-black bg-dark">
      <div className="containerContact mx-auto">
        <h2 className="ContactHeader text-center text-2xl font-bold mb-4 italic">
          Contact Me
        </h2>
        <div className="Boxes">
          <div className="w-1/2">
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              onSubmit={handleSubmit}
            >
              <div className="mb-4 px-4 ">
                <label htmlFor="name" className="block mb-1 font-bold">
                  Name
                </label>
                <div>
                  <input
                    type="text"
                    className="w-200 px-4 py-2 border border-black-300 rounded"
                    id="name"
                    required
                  />
                </div>
              </div>
              <div className="mb-4 px-4">
                <label htmlFor="email" className="block mb-1 font-bold">
                  Email
                </label>
                <div>
                  <input
                    type="email"
                    className="w-200 px-4 py-2 border border-black-300 rounded"
                    id="email"
                    required
                  />
                </div>
              </div>
              <div className="mb-4 ">
                <label htmlFor="message" className="block mb-1 font-bold">
                  Message
                </label>
                <div>
                  <textarea
                    className="w-200 px-4 py-2 border border-gray-300 rounded"
                    id="message"
                    required
                  ></textarea>
                </div>
              </div>
              <div className="text-center px-4">
                <button
                  type="submit"
                  className="bg-black text-white py-2 px-4 rounded"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
