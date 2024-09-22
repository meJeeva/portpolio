import React from 'react'

const Services = ({ dark }) => {
  return (
    <div className="w-full px-[12%] py-10 scroll-mt-10" id="service">
      <h4 className="text-center mb-2 text-lg font-poppins">What i offer</h4>
      <h2 className="text-center text-5xl font-poppins">My services</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's
      </p>

      <div className="grid grid-cols-auto gap-6 my-10">
        <div
          className={`border border-gray-400 rounded-lg px-8 py-12 cursor-pointer duration-500
   hover:-translate-y-1
  ${dark
              ? "hover:bg-darkHover hover:boxShadow-white"
              : "hover:bg-lightHover hover:shadow-[4px_4px_0_#000]"
            }`}
        >
          <img
            src={require("../assets/images/mobile-icon.png")}
            className="w-10"
          />
          <h3
            className={`text-lg my-4 text-gray-700 ${dark ? `text-white` : ``}`}
          >
            App Design
          </h3>
          <p
            className={`text-sm text-gray-600 leading-5 ${dark ? `text-white/80` : ``
              }`}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <a href="" className="flex items-center gap-2 text-sm mt-5">
            Read more
            <img
              src={require("../assets/images/right-arrow.png")}
              className="w-4"
            />
          </a>
        </div>
        <div
          className={`border border-gray-400 rounded-lg px-8 py-12 cursor-pointer duration-500
   hover:-translate-y-1
  ${dark
              ? "hover:bg-darkHover hover:boxShadow-white"
              : "hover:bg-lightHover hover:shadow-[4px_4px_0_#000]"
            }`}
        >
          {" "}
          <img
            src={require("../assets/images/web-icon.png")}
            className="w-10"
          />
          <h3
            className={`text-lg my-4 text-gray-700 ${dark ? `text-white` : ``}`}
          >
            Web Design
          </h3>
          <p
            className={`text-sm text-gray-600 leading-5 ${dark ? `text-white/80` : ``
              }`}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <a href="" className="flex items-center gap-2 text-sm mt-5">
            Read more
            <img
              src={require("../assets/images/right-arrow.png")}
              className="w-4"
            />
          </a>
        </div>
        <div
          className={`border border-gray-400 rounded-lg px-8 py-12 cursor-pointer duration-500
   hover:-translate-y-1
  ${dark
              ? "hover:bg-darkHover hover:boxShadow-white"
              : "hover:bg-lightHover hover:shadow-[4px_4px_0_#000]"
            }`}
        >
          {" "}
          <img src={require("../assets/images/ui-icon.png")} className="w-10" />
          <h3
            className={`text-lg my-4 text-gray-700 ${dark ? `text-white` : ``}`}
          >
            App Design
          </h3>
          <p
            className={`text-sm text-gray-600 leading-5 ${dark ? `text-white/80` : ``
              }`}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <a href="" className="flex items-center gap-2 text-sm mt-5">
            Read more
            <img
              src={require("../assets/images/right-arrow.png")}
              className="w-4"
            />
          </a>
        </div>
        <div
          className={`border border-gray-400 rounded-lg px-8 py-12 cursor-pointer duration-500
   hover:-translate-y-1
  ${dark
              ? "hover:bg-darkHover hover:shadow-white"
              : "hover:bg-lightHover hover:shadow-[4px_4px_0_#000]"
            }`}
        >
          {" "}
          <img
            src={require("../assets/images/graphics-icon.png")}
            className="w-10"
          />
          <h3
            className={`text-lg my-4 text-gray-700 ${dark ? `text-white` : ``}`}
          >
            App Design
          </h3>
          <p
            className={`text-sm text-gray-600 leading-5 ${dark ? `text-white/80` : ``
              }`}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <a href="" className="flex items-center gap-2 text-sm mt-5">
            Read more
            <img
              src={require("../assets/images/right-arrow.png")}
              className="w-4"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Services