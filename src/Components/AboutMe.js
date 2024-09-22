import React from 'react'

const AboutMe = ({dark}) => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-10">
      <h4 className="text-center mb-2 text-lg font-poppins">Introduction</h4>
      <h2 className="text-center text-5xl ">About me</h2>

      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div className="max-w-max mx-auto relative ">
          <img
            src={
              "https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt="test"
            className="w-64 sm:w-80 rounded-3xl max-w-none"
          />

          <div className="bg-white w-24 aspect-square absolute right-0 bottom-0 rounded-full translate-x-1/4 translate-y-1/3 shadow-[0_4px_55px_rgba(149,0,162,0.15)] flex items-center justify-center overflow-hidden">
            <img
              src={require("../assets/images/dev-icon.jpg")}
              className="w-full h-full object-cover"
              alt="test"
            />
          </div>
        </div>
        <div className="flex-1">
          <p className="mb-10 max-w-2xl ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            <li
              className={`border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:-translate-y-1 duration-500  ${
                dark
                  ? `border-white hover:shadow-white hover:bg-darkHover `
                  : `hover:bg-lightHover hover:shadow-black`
              }`}
            >
              {dark ? (
                <img
                  src={require("../assets/images/code-icon-dark.png")}
                  className="w-7 mt-3"
                  alt="test"
                />
              ) : (
                <img
                  src={require("../assets/images/code-icon.png")}
                  className="w-7 mt-3"
                  alt="test"
                />
              )}

              <h3
                className={`my-4 font-semibold text-gray-700 ${
                  dark ? `text-white` : ``
                }`}
              >
                Languages
              </h3>
              <p
                className={`text-gray-600 text-sm ${
                  dark ? `text-white/80` : ``
                }`}
              >
                HTML, CSS, Javascript, React Native, Node.js, ExpressJs, MongoDB
              </p>
            </li>

            <li
              className={`border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer  hover:-translate-y-1 duration-500 hover:shadow-black ${
                dark
                  ? `border-white hover:shadow-white hover:bg-darkHover text-white`
                  : `hover:bg-lightHover`
              }`}
            >
              {dark ? (
                <img
                  src={require("../assets/images/edu-icon-dark.png")}
                  className="w-7 mt-3"
                  alt="test"
                />
              ) : (
                <img
                  src={require("../assets/images/edu-icon.png")}
                  className="w-7 mt-3"
                  alt="test"
                />
              )}

              <h3
                className={`my-4 font-semibold text-gray-700 ${
                  dark ? `text-white` : ``
                }`}
              >
                Education
              </h3>
              <p
                className={`text-gray-600 text-sm ${
                  dark ? `text-white/80` : ``
                }`}
              >
                M.Sc Computer Science
              </p>
            </li>

            <li
              className={`border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer  hover:-translate-y-1 duration-500 hover:shadow-black ${
                dark ? `hover:bg-darkHover/50` : `hover:bg-lightHover`
              }`}
            >
              {!dark ? (
                <img
                  src={require("../assets/images/project-icon.png")}
                  className="w-7 mt-3"
                  alt="test"
                />
              ) : (
                <img
                  src={require("../assets/images/project-icon-dark.png")}
                  className="w-7 mt-3"
                  alt="test"
                />
              )}
              <h3
                className={`my-4 font-semibold text-gray-700 ${
                  dark ? `text-white` : ``
                }`}
              >
                Projects
              </h3>
              <p
                className={`text-gray-600 text-sm ${
                  dark ? `text-white/80` : ``
                }`}
              >
                Built a one project
              </p>
            </li>
          </ul>

          <h4 className={`my-6 text-gray-700 ${dark ? `text-white/80` : ``}`}>
            Tools i use
          </h4>

          <ul className="flex items-center gap-3 sm:gap-5">
            <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer  hover:bg-lightHover hover:-translate-y-1 duration-500 ">
              <img
                src={require("../assets/images/vscode.png")}
                alt="test"
                className="w-5 sm:w-7"
              />
            </li>
            <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer  hover:bg-lightHover hover:-translate-y-1 duration-500 ">
              <img
                src={require("../assets/images/firebase.png")}
                alt="test"
                className="w-5 sm:w-7"
              />
            </li>
            <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer  hover:bg-lightHover hover:-translate-y-1 duration-500 ">
              <img
                src={require("../assets/images/mongodb.png")}
                alt="test"
                className="w-5 sm:w-7"
              />
            </li>
            <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer  hover:bg-lightHover hover:-translate-y-1 duration-500 ">
              <img
                src={require("../assets/images/figma.png")}
                alt="test"
                className="w-5 sm:w-7"
              />
            </li>
            <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer  hover:bg-lightHover hover:-translate-y-1 duration-500 ">
              <img
                src={require("../assets/images/git.png")}
                alt="test"
                className="w-5 sm:w-7"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutMe