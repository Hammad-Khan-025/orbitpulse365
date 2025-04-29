import React, { useEffect } from "react";
import { FaCheck } from "react-icons/fa6";

const ContactModal = ({ message, onClose }) => {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return (
    <div
      className="fixed inset-0 flex justify-center items-center z-50 px-3"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
    >
      <div className="bg-white rounded-lg shadow-lg w-auto px-3 sm:px-20 py-12">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="text-green-600 p-2 sm:p-3 rounded-full  text-3xl sm:text-4xl border-4 border-gray-300">
            <FaCheck />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold">Form Submitted!</h2>
          <p className="text-gray-800">You have successfully submitted your form</p>
          <button
            className=" text-white bg-green-700 py-2 px-4 rounded-md hover:bg-green-600 hover:text-white font-bold cursor-pointer text-sm sm:text-base uppercase"
            onClick={onClose}
          >
            ok
          </button>
          </div>
      </div>
    </div>
  );
};

export default ContactModal;
