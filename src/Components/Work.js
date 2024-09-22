import React from 'react'
import workImage from "../assets/images/work-1.png";
import workImageOne from "../assets/images/work-2.png";
import workImageTwo from "../assets/images/work-3.png";
import workImageThree from "../assets/images/work-4.png";

const Work = ({dark}) => {
  return (
    <div className="w-full px-[12%] py-10 scroll-mt-10" id="work">
      <h4 className="text-center mb-2 text-lg font-poppins">My portfolio</h4>
      <h2 className="text-center text-5xl font-poppins">My latest work</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's
      </p>

      <div
        className={`grid grid-cols-auto my-10 gap-5 ${
          dark ? `text-black` : ``
        }`}
      >
        <div
          className={`aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group`}
          style={{
            backgroundImage: `url(${workImage})`,
            backgroundSize: "cover",
          }}
        >
          <div
            className={`bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 cursor-pointer group-hover:bottom-7 transition-all`}
          >
            <div className="group relative">
              <h2 className="font-semibold">Frontend project</h2>
              <p className="text-sm text-gray-700">App Design</p>
            </div>
            <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition group-hover:scale-110">
              <img
                src={require("../assets/images/send-icon.png")}
                alt="test"
                className="w-5"
              />
            </div>
          </div>
        </div>

        <div
          className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
          style={{
            backgroundImage: `url(${workImageOne})`,
            backgroundSize: "cover",
          }}
        >
          <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 cursor-pointer group-hover:bottom-7 transition-all">
            <div className="group relative">
              <h2 className="font-semibold">Frontend project</h2>
              <p className="text-sm text-gray-700">App Design</p>
            </div>
            <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition group-hover:scale-110">
              <img
                src={require("../assets/images/send-icon.png")}
                alt="test"
                className="w-5"
              />
            </div>
          </div>
        </div>

        <div
          className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
          style={{
            backgroundImage: `url(${workImageTwo})`,
            backgroundSize: "cover",
          }}
        >
          <div
            className={`bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 cursor-pointer group-hover:bottom-7 transition-all`}
          >
            <div className="group relative">
              <h2 className="font-semibold">Frontend project</h2>
              <p className="text-sm text-gray-700">App Design</p>
            </div>
            <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition group-hover:scale-110">
              <img
                src={require("../assets/images/send-icon.png")}
                alt="test"
                className="w-5"
              />
            </div>
          </div>
        </div>
        <div
          className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
          style={{
            backgroundImage: `url(${workImageThree})`,
            backgroundSize: "cover",
          }}
        >
          <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 cursor-pointer group-hover:bottom-7 transition-all">
            <div className="group relative">
              <h2 className="font-semibold">Frontend project</h2>
              <p className="text-sm text-gray-700">App Design</p>
            </div>
            <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition group-hover:scale-110">
              <img
                src={require("../assets/images/send-icon.png")}
                alt="test"
                className="w-5"
              />
            </div>
          </div>
        </div>
      </div>
      <a
        href="#"
        className={`w-max flex items-center justify-center gap-2 border border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 ${
          dark ? `text-white border-white hover:bg-[#2a002a]` : `text-black`
        }`}
      >
        Show more
        <img
          src={require("../assets/images/right-arrow-bold.png")}
          alt="test"
          className="w-4"
        />
      </a>
    </div>
  );
}

export default Work