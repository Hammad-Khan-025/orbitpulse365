import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/homeImages/orbitpulse-logo.png";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { RiMenu3Line } from "react-icons/ri";
import { MdClose } from "react-icons/md";

const Header = () => {
  const menu = [
    {
      category: "Managed IT Solutions",
      services: [
        { name: "Overview", path: "/services/IT-managed-services" },
        { name: "Smart End-User Solutions", path: "/services/IT-end-user-support" },
        {
          name: "IT Asset Disposition Services",
          path: "/services/IT-assets-disposition",
        },
        {
          name: "Wireless Survey Solutions",
          path: "/services/wireless-survey",
        },
        {
          name: "Managed Security Services",
          path: "/services/managed-security",
        },
        {
          name: "IT Infrastructure Solutions",
          path: "/services/IT-infrastructure-management",
        },
        { name: "Dynamic On-Site Support", path: "/services/flexible-on-support" },
        { name: "IT Outsourcing", path: "/services/IT-outsourcing" },
      ],
    },
    // {
    //   category: "Workspace Space Solutions",
    //   services: [
    //     { name: "Overview", path: "/services/workspace-solutions" },
    //     { name: "Microsoft 365", path: "/services/microsoft-365" },
    //     {
    //       name: "Enterprise Mobility & Security",
    //       path: "/services/enterprise-mobility",
    //     },
    //     {
    //       name: "Workspace as a Service",
    //       path: "/services/workspace-as-a-service",
    //     },
    //     {
    //       name: "Business Central and Dynamics",
    //       path: "/services/business-central",
    //     },
    //   ],
    // },
    // {
    //   category: "Cloud Migration",
    //   services: [
    //     { name: "Overview", path: "/services/cloud-migration" },
    //     { name: "Microsoft Azure", path: "/services/microsoft-azure" },
    //     { name: "Amazon Web Services", path: "/services/aws" },
    //   ],
    // },
  ];

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 500);
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState(null);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  return (
    <header className="flex justify-between items-center h-32 sm:h-40 tracking-wider font-semibold px-6 lg:px-20 relative z-40 bg-white max-w-screen-xl mx-auto">
      <NavLink to="/" className="flex-shrink-0">
        <img src={logo} alt="OrbitPulse Logo" className="w-48 lg:w-56" />
      </NavLink>

      <div className="flex items-center">
        <button
          className="lg:hidden text-2xl text-[#1D51A2] cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <MdClose /> : <RiMenu3Line />}
        </button>

        <div className="relative hidden lg:flex items-center gap-32">
          <ul className="flex gap-12 text-[#8D8D8D] items-center">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `hover:text-white hover:bg-[#1D51A2] px-3 py-2 rounded-md transition-colors duration-300 ${
                    isActive ? "bg-[#2E69D6] text-white" : "text-[#8D8D8D]"
                  }`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex items-center gap-2 cursor-pointer hover:text-[#1D51A2]">
                <span>Services</span>
                {isDropdownOpen ? <IoIosArrowDown /> : <IoIosArrowForward />}
              </div>

              {isDropdownOpen && (
                <div
                  className="absolute top-10 -left-32 mt-2 w-auto min-w-[12rem] lg:w-[25rem] bg-[#EEEEEE] shadow-lg rounded-lg p-4 z-50 text-sm"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="grid grid-cols-1  gap-8 p-5">
                    {menu.map((section) => (
                      <div key={section.category}>
                        <h4 className="font-bold text-[#1D51A2] mb-5 text-lg">
                          {section.category}
                        </h4>
                        <ul className="space-y-3 text-gray-600">
                          {section.services.map(({ name, path }) => (
                            <li key={name}>
                              <NavLink
                                to={path}
                                className={({ isActive }) =>
                                  `block transition-all duration-300 font-semibold  px-2 py-1 rounded-lg ${
                                    isActive
                                      ? "bg-[#1D51A2] text-white "
                                      : "hover:bg-[#6588c0] hover:text-white"
                                  }`
                                }
                              >
                                {name}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </li>
            <li>
              <NavLink
                to="/contact-us"
                className={({ isActive }) =>
                  `hover:text-white hover:bg-[#1D51A2] px-3 py-2 rounded-md transition-colors duration-300 ${
                    isActive ? "bg-[#2E69D6] text-white" : "text-[#8D8D8D]"
                  }`
                }
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <button className="bg-[#1D51A2] hover:bg-[#2E69D6] text-white px-4 py-2 rounded-2xl cursor-pointer">
            Switching to OrbitPulse
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute top-32 left-0 w-full bg-white shadow-md lg:hidden p-5 z-50">
          <ul className="flex flex-col gap-4 text-[#8D8D8D]">
            <li>
              <NavLink
                to="/"
                className="hover:text-[#1D51A2]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <span
                className="flex justify-between cursor-pointer hover:text-[#1D51A2]"
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
              >
                Services{" "}
                {isMobileServicesOpen ? (
                  <IoIosArrowDown />
                ) : (
                  <IoIosArrowForward />
                )}
              </span>
              {isMobileServicesOpen && (
                <ul className="pl-4 text-gray-600">
                  {menu.map((section) => (
                    <li key={section.category} className="mt-4">
                      <span
                        className="flex justify-between cursor-pointer font-bold text-[#1D51A2]"
                        onClick={() =>
                          setOpenCategory(
                            openCategory === section.category
                              ? null
                              : section.category
                          )
                        }
                      >
                        {section.category}{" "}
                        {openCategory === section.category ? (
                          <IoIosArrowDown />
                        ) : (
                          <IoIosArrowForward />
                        )}
                      </span>
                      {openCategory === section.category && (
                        <ul className="pl-4">
                          {section.services.map(({ name, path }) => (
                            <li key={name}>
                              <NavLink
                                to={path}
                                className={({ isActive }) =>
                                  `block py-2 px-3 rounded-md text-sm ${
                                    isActive
                                      ? "bg-[#1D51A2] text-white"
                                      : "hover:text-[#1D51A2]"
                                  }`
                                }
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {name}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li>
              <NavLink
                to="/contact-us"
                className="hover:text-[#1D51A2]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </NavLink>
            </li>
            <li className="mt-2">
              <button
                className="bg-[#1D51A2] hover:bg-[#2E69D6] text-white px-4 py-2 rounded-2xl cursor-pointer text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Switching to OrbitPulse
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
