import React from 'react'

const Footer = ({dark}) => {
  return (
    <div className="mt-20">
      <div className="text-center">
        {/* <img
            src={
              "https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt="test"
            className="w-36 mx-auto mb-2"
          /> */}
        <h3>LOGO</h3>
        <div className="w-max flex items-center gap-2 mx-auto cursor-pointer">
          {!dark ? (
            <img
              src={require("../assets/images/mail_icon.png")}
              alt="test"
              className="w-6"
            />
          ) : (
            <img
              src={require("../assets/images/mail_icon_dark.png")}
              alt="test"
              className="w-6"
            />
          )}
          <a href="mailto:jeevaofficialjob@gmail.com" className="text-inherit">
            jeevaofficialjob@gmail.com
          </a>
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>© 2024 Jeeva. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a href="https://www.linkedin.com/in/jeeva-v-937749262/">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/meJeeva">GitHub</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/jeeva-v-937749262/">Twitter</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer