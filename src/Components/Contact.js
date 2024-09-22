import React from 'react'
import footerBgImg from "../assets/images/footer-bg-color.png";

const Contact = ({dark}) => {
  return (
    <div
      className="w-full px-[12%] py-10 scroll-mt-10 bg-no-repeat bg-[length : 90%_auto] bg-center"
      id="contact"
      style={{
        backgroundImage: ` ${!dark ? `url(${footerBgImg})` : `none`}`,
        backgroundSize: "cover",
      }}
    >
      <h4 className="text-center mb-2 text-lg font-poppins">Connect with me</h4>
      <h2 className="text-center text-5xl font-poppins">Get in touch</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's
      </p>

      <form
        method="POST"
        className="max-w-2xl mx-auto"
        action="https://api.web3forms.com/submit"
        onSubmit={(e) => {
          e.preventDefault(); // Prevent default submission behavior
          e.target.reset(); // Reset the form fields
          // Optional: you can still submit the form manually if needed
          fetch(e.target.action, {
            method: "POST",
            body: new FormData(e.target),
          })
            .then((response) => response.json())
            .then((result) => {
              console.log("Form successfully submitted:", result);
            })
            .catch((error) => {
              console.error("Error submitting the form:", error);
            });
        }}
      >
        <input
          type="hidden"
          name="access_key"
          value="d344ca29-7006-4438-bfd2-0e5cff34cbcf"
        />

        <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
          <input
            type="text"
            placeholder="Enter your name"
            className={`flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md  ${
              dark ? "bg-darkHover" : "bg-white"
            }`}
            required
            name="name"
          />
          <input
            type="email"
            placeholder="Enter your email"
            className={`flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md  ${
              dark ? "bg-darkHover" : "bg-white"
            }`}
            required
            name="email"
          />
        </div>

        <textarea
          rows={6}
          placeholder="Enter your message"
          className={`w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md  mb-6 ${
            dark ? "bg-darkHover" : "bg-white"
          }`}
          required
          name="message"
        ></textarea>

        <button
          type="submit"
          className={`py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 ${
            dark ? "bg-darkHover/60 border-[0.5px]" : ""
          }`}
        >
          Submit now
          <img
            src={require("../assets/images/right-arrow-white.png")}
            alt="test"
            className="w-4"
          />
        </button>
      </form>
    </div>
  );
}

export default Contact