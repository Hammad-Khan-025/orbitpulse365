import React from "react";
import { Link } from "react-router-dom";
import facebook from "../assets/homeImages/facebook.png";
import instagram from "../assets/homeImages/instagram.png";
import linkedIn from "../assets/homeImages/linkedIn.png";
import whatsapp from "../assets/homeImages/whatsapp.png";

const Footer = () => {
  return (
    <footer className="bg-[#3EA3DE] text-white py-14 px-6 font-malayalam">
      <div className="mx-auto max-w-6xl">
        <h3 className="mb-4 sm:mb-6  text-center">
          Join our newsletter to stay up to date on features and releases.
        </h3>

        <div className="flex flex-col sm:flex-row justify-between">
          <div className="flex flex-col justify-center items-center md:items-start">
            <div className="flex items-center flex-wrap gap-4 sm:gap-10 space-x-2 my-5">
              <input
                type="email"
                placeholder="Enter your email"
                className="sm:w-96 px-6 py-3 sm:py-4 rounded-full text-black bg-white focus:outline-none"
              />
              <button className="bg-[#F2C146] text-white px-6 py-3 sm:py-4 rounded-full font-semibold hover:bg-yellow-500 cursor-pointer">
                Subscribe
              </button>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex flex-col items-center mb-6 sm:mb-0">
            <div className="flex flex-wrap mt-6 gap-8">
              {/* Example social icons - replace src with your own images */}
              <a
                href="https://www.facebook.com/profile.php?id=61576014021173"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="border border-white px-2 py-1.5 rounded-lg">
                  <img
                    src={facebook}
                    alt="Facebook"
                    className="h-6 sm:h-8 w-6 sm:w-8"
                  />
                </div>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="border border-white px-2 py-1.5 rounded-lg">
                  <img
                    src={instagram}
                    alt="Twitter"
                    className="h-6 sm:h-8 w-6 sm:w-8"
                  />
                </div>
              </a>
              <a
                href="https://www.linkedin.com/company/orbit-pulse-365/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="border border-white px-2 py-1.5 rounded-lg">
                  <img
                    src={linkedIn}
                    alt="LinkedIn"
                    className="h-6 sm:h-8 w-6 sm:w-8"
                  />
                </div>
              </a>
              <a
                href="https://wa.me/447878776438"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="border border-white px-2 py-1.5 rounded-lg">
                  <img
                    src={whatsapp}
                    alt="WhatsApp"
                    className="h-6 sm:h-8 w-6 sm:w-8"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>

        <p className="text-sm md:text-base text-center sm:my-5">
          By subscribing you agree to with our{" "}
          <span className="underline">Privacy Policy</span> and provide consent
          to receive updates from our company.
        </p>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t-[3px] border-white/30 pt-6 text-center max-w-6xl mx-auto flex flex-col-reverse md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p className="text-sm md:text-base pt-8 sm:pt-0">
          © 2024 Orbitpulse365 Technologies Inc. All rights reserved.
        </p>
        <div className="flex space-x-6 text-sm md:text-base">
          <a href="#" className="hover:underline">
            Privacy
          </a>
          <a href="#" className="hover:underline">
            Terms of Service
          </a>
          <a href="#" className="hover:underline">
            Compliance
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
