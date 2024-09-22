import React, { useEffect, useState } from "react";
import Header from "../Components/header";
import AboutMe from "../Components/AboutMe";
import Services from "../Components/Services";
import Work from "../Components/Work";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";

const Dashboard = () => {
  const [showSideMenu, setShowSideMenu] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    if (
      currentTheme === "dark" ||
      (!currentTheme &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const setLightMode = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.classList.remove("dark");
    setDark(false);
  };

  const setDarkMode = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.classList.add("dark");
    setDark(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`leading-8 ${
        dark ? "bg-darkTheme text-white" : "bg-lightTheme text-black"
      }`}
    >
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-80">
        <img
          src={require("./../assets/images//header-bg-color.png")}
          alt="logo"
          className="w-full"
        />
      </div>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between transition-colors duration-300 z-50 ${
          scroll
            ? `bg-white bg-opacity-50 backdrop-blur-lg shadow ${
                dark ? `bg-darkTheme shadow-white/20` : ``
              }`
            : "bg-transparent"
        }`}
      >
        <h3 className="w-28 cursor-pointer mr-14">LOGO</h3>
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            !scroll ? `bg-white shadow-sm bg-opacity-50` : ``
          } font-poppins ${
            dark
              ? `dark:border dark:border-white/50 dark:bg-transparent `
              : "bg-opacity-50 dark:border dark:border-white/70 dark:bg-transparent "
          }`}
        >
          <li>
            <a href="#top">Home</a>
          </li>
          <li>
            <a href="#about">About me</a>
          </li>
          <li>
            <a href="#service">Services</a>
          </li>
          <li>
            <a href="#work">My Work</a>
          </li>
          <li>
            <a href="#contact">Contact me</a>
          </li>
        </ul>

        <div className="flex items-center">
          <button
            onClick={() => {
              const currentTheme = localStorage.getItem("theme");
              console.log("currentTheme", currentTheme);
              if (currentTheme === "dark") {
                setLightMode();
              } else {
                setDarkMode();
              }
            }}
          >
            {!dark ? (
              <img
                src={require("./../assets/images/moon_icon.png")}
                alt="logo"
                className="w-6"
              />
            ) : (
              <img
                src={require("./../assets/images/sun_icon.png")}
                alt="logo"
                className="w-6"
              />
            )}
          </button>
          <a
            className={`hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-poppins ${
              dark ? `border-white/50` : ``
            }`}
            href="#contact"
          >
            Contact{" "}
            {dark ? (
              <img
                src={require("./../assets/images/arrow-icon-dark.png")}
                alt="logo"
                className="w-3 "
              />
            ) : (
              <img
                src={require("./../assets/images/arrow-icon.png")}
                alt="logo"
                className="w-3 "
              />
            )}
          </a>
          <button
            className="block md:hidden ml-3"
            onClick={() => setShowSideMenu(!showSideMenu)}
          >
            {!dark ? (
              <img
                src={require("./../assets/images/menu-black.png")}
                alt="logo"
                className="w-6"
              />
            ) : (
              <img
                src={require("./../assets/images/menu-white.png")}
                alt="logo"
                className="w-6"
              />
            )}
          </button>
        </div>

        {/* mobile menu */}
        <ul
          className={`flex md:hidden flex-col py-20 px-10 fixed ${
            showSideMenu ? `right-0` : `-right-64`
          } top-0 bottom-0 w-64 z-50 h-screen bg-slate-50 transition duration-1000 gap-5 font-poppins ${
            dark ? `bg-[#2a004a] text-white` : ``
          }`}
          id="sideMenu"
        >
          <div className="absolute right-6 top-6">
            {dark ? (
              <img
                onClick={() => setShowSideMenu(!showSideMenu)}
                src={require("./../assets/images/close-white.png")}
                alt="logo"
                className="w-5 cursor-pointer hover:text-red-500"
              />
            ) : (
              <img
                onClick={() => setShowSideMenu(!showSideMenu)}
                src={require("./../assets/images/close-black.png")}
                alt="logo"
                className="w-5 cursor-pointer hover:text-red-500"
              />
            )}
          </div>
          <li className="hover:text-rose-700 ">
            <a onClick={() => setShowSideMenu(!showSideMenu)} href="#top">
              Home
            </a>
          </li>
          <li className="hover:text-rose-700 ">
            <a onClick={() => setShowSideMenu(!showSideMenu)} href="#about">
              About me
            </a>
          </li>
          <li className="hover:text-rose-700 ">
            <a onClick={() => setShowSideMenu(!showSideMenu)} href="#service">
              Services
            </a>
          </li>
          <li className="hover:text-rose-700 ">
            <a onClick={() => setShowSideMenu(!showSideMenu)} href="#work">
              My Work
            </a>
          </li>
          <li className="hover:text-rose-700 ">
            <a onClick={() => setShowSideMenu(!showSideMenu)} href="#contact">
              Contact me
            </a>
          </li>
        </ul>
      </nav>
      <Header
        dark={dark}
        showSideMenu={showSideMenu}
        setShowSideMenu={setShowSideMenu}
      />
      <AboutMe dark={dark} />
      <Services dark={dark} />
      <Work dark={dark}/>
      <Contact dark={dark}/>
      <Footer dark={dark} />
    </div>
  );
};

export default Dashboard;
