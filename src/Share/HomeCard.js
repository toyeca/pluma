import React from "react";
import {
  FaCalendarAlt,
  FaEnvelopeOpenText,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaMobileAlt,
  FaWhatsapp,
} from "react-icons/fa";
import img from "../assets/images/about/avatar.jpg";
import downloadIcon from "../assets/images/download.png";

const HomeCard = () => {
  return (
    <div>
      <div className="w-full mb-6 lg:mb-0  mx-auto   relative bg-white text-center dark:bg-[#111111] px-6 rounded-[20px] mt-[180px] md:mt-[220px] lg:mt-0 ">
        <img
          src={img}
          className="w-[240px] absolute left-[50%] transform -translate-x-[50%] h-[240px] drop-shadow-xl mx-auto  rounded-[20px] -mt-[140px]"
          alt=""
        />
        {/* Social card */}
        <div className="pt-[100px] pb-8">
          <h1 className="mt-6 mb-1 text-5xl font-semibold  dark:text-white">
            Alvaro Mayoral
          </h1>
          <h3 className="mb-4 text-[#7B7B7B] inline-block dark:bg-[#1D1D1D] px-5 py-1.5 rounded-lg dark:text-[#A6A6A6]  ">
            Entrenador Personal
          </h3>

          {/* Social Links */}

          <div className="flex justify-center space-x-3">

            <a
              href="https://wa.me/34687533386"
              target="_blank"
              rel="noopener noreferrer"
            >
            <span className="socialbtn text-[#25d366]">
              <FaWhatsapp />
            </span>
            </a>
            <a
              href="https://instagram.com/alvaro_mayoral_fit"
              target="_blank"
              rel="noopener noreferrer"
            >
            <span className="socialbtn text-[#e14a84] ">
              <FaInstagram />
            </span>
            </a>
            <a
              href="https://www.linkedin.com/in/alvaro-mayoral-palancar-45a92a32/"
              target="_blank"
              rel="noopener noreferrer"
            >
            <span className="socialbtn text-[#0072b1]">
              <FaLinkedinIn />
            </span>
            </a>
          </div>

          {/* personal information */}
          <div className="p-7 rounded-2xl mt-7  bg-[#F3F6F6] dark:bg-[#1D1D1D]">
            <div className="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] pb-2.5">
              <span className="socialbtn bg-white dark:bg-black text-[#E93B81] shadow-md">
                <FaMobileAlt />
              </span>
              <div className="text-left ml-2.5">
                <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">
                  Phone
                </p>
                <p className="dark:text-white">+34 687 533 386</p>
              </div>
            </div>
            <div className="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] py-2.5">
              <span className="socialbtn bg-white dark:bg-black text-[#6AB5B9] shadow-md">
                <FaEnvelopeOpenText />
              </span>
              <div className="text-left ml-2.5">
                <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">
                  Email
                </p>
                <p className="dark:text-white">alvaromayoral@gmail.com</p>
              </div>
            </div>
            <div className="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] py-2.5">
              <span className="socialbtn bg-white dark:bg-black text-[#FD7590] shadow-md">
                <FaMapMarkerAlt />
              </span>
              <div className="text-left ml-2.5">
                <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">
                  Location
                </p>
                <p className="dark:text-white">Madrid</p>
              </div>
            </div>
            <div className="flex  py-2.5">
              <span className="socialbtn bg-white dark:bg-black text-[#C17CEB] shadow-md">
                <FaCalendarAlt />
              </span>
              <div className="text-left ml-2.5">
                <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">
                  Birthday
                </p>
                <p className="dark:text-white">29 noviembre 1979</p>
              </div>
            </div>
          </div>
          <button className="flex items-center mx-auto bg-gradient-to-r from-[#FA5252] to-[#DD2476] duration-200 transition ease-linear hover:bg-gradient-to-l from-[#DD2476]  to-[#fa5252ef] px-8 py-3 text-lg text-white rounded-[35px] mt-6">
            <img src={downloadIcon} alt="icon" className="mr-2" />
            Descargar CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
