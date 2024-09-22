import React from 'react'

const Header = ({dark,showSideMenu,setShowSideMenu}) => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <img
        src={
          "https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        alt="logo"
        className="rounded-full w-32"
      />
      <h3 className="flex items-center gap-2 text-xl md:text-2xl mb-3 font-poppins">
        Hi!, I'm Jeeva Venkatesan{" "}
        <img
          onClick={() => setShowSideMenu(!showSideMenu)}
          src={require("./../assets/images/hand-icon.png")}
          alt="logo"
          className="w-6"
        />
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-poppins">
        frontend app developer based in salem
      </h1>
      <p className="max-w-2xl mx-auto font-poppins">
        I am a frontend app developer from salem, Tamil Nadu with 1.4 years of
        experience in single company.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href="#contact"
          className={`px-10 py-3 border rounded-full bg-gradient-to-r to-[#ff3352] from-[#ffb3bf] text-wrap flex items-center gap-2 text-white ${
            !dark ? `border-transparent` : ``
          }`}
        >
          Contact me{" "}
          <img
            src={require("./../assets/images/right-arrow-white.png")}
            alt="logo"
            className="w-4 text-white"
          />{" "}
        </a>

        <a
          href="./../assets/images/dev-icon.jpg"
          download
          className={`px-10 py-3 border rounded-full border-gray-500 text-wrap flex items-center gap-2   ${
            dark ? `text-white` : `text-black`
          }`}
        >
          my resume{" "}
          <img
            src={require("./../assets/images/download-icon.png")}
            alt="logo"
            className={`w-4 `}
          />{" "}
        </a>
      </div>
    </div>
  );
}

export default Header;