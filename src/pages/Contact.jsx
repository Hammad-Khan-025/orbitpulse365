import React, { useState } from "react";
import mainImage from "../assets/contactImages/mainImage.png";
import contactVideo from "../assets/contactImages/banner.mp4";
import ContactModal from "../components/ContactModal";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    jobTitle: "",
    phone: "",
    comments: "",
    itServices: false,
    cloudMigration: false,
    workspaceSolutions: false,
    notRobot: false,
  });

  const [errors, setErrors] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false); // State for showing the modal

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First Name is required*";
    if (!formData.lastName.trim())
      newErrors.lastName = "Last Name is required*";
    if (!formData.email.trim()) newErrors.email = "Email is required*";
    if (!formData.jobTitle.trim())
      newErrors.jobTitle = "Job Title is required*";
    if (!formData.notRobot)
      newErrors.notRobot = "Please confirm you are not a robot*";

    // Check that at least one checkbox is selected in the "Requesting" field
    if (
      !formData.itServices &&
      !formData.cloudMigration &&
      !formData.workspaceSolutions
    ) {
      newErrors.requesting = "Please select at least one service*";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Show the modal on successful form submission
    setIsModalOpen(true);

    // Reset the form data
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      phone: "",
      comments: "",
      itServices: false,
      cloudMigration: false,
      workspaceSolutions: false,
      notRobot: false,
    });
    setErrors({});
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <article>
      {/* banner section */}
      <div>
        <img src={mainImage} alt="" />
      </div>

      {/* contact section */}
      <section className="pt-10 sm:pt-20">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-[600] text-[#FCB813] sm:mb-6 font-kannada text-center uppercase">
          Contact Us
        </h2>
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-16 p-5 sm:p-8 max-w-6xl mx-auto">
          {/* Left Section */}
          <div className="lg:w-1/2 text-[#5D5A5A] leading-8 sm:leading-10">
            <p>
            Orbit Pulse is your reliable partner for resolving all IT challenges and efficiently managing service requests. Our expert team is available 24/7 to support you, ensuring seamless and uninterrupted service.

            </p>
            <div>
              <h2>Help Desk</h2>
              <p>
                Name: Operations Orbit Pulse
                <h1>Telephone Numbers:</h1>
                <p>
                  UK: +44 7878 776438‬
                  <br />
                  USA: +44 7878 776271‬

                </p>
                <h1>Email Us</h1>
                <p>info@orbitpulse365.com </p>
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="border border-gray-200 shadow-2xl">
            <video src={contactVideo} autoPlay loop muted></video>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section>
        <div className="lg:max-w-1/2 mx-auto bg-white px-6 py-8 sm:mt-8 mb-6 sm:mb-20 rounded-2xl sm:border border-gray-200 sm:shadow-md text-black">
          <p className="mb-4 font-bold">
            For any other inquiries, please fill out the form below to contact
            us.
          </p>
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Requesting Section */}
            <fieldset className="space-y-2">
              <legend className="font-bold sm:mt-3">
                Requesting <span className="text-red-600">*</span>
              </legend>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="itServices"
                  checked={formData.itServices}
                  onChange={handleInputChange}
                  className="form-checkbox text-blue-600"
                />
                <span className="ml-2">IT Managed Services</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="cloudMigration"
                  checked={formData.cloudMigration}
                  onChange={handleInputChange}
                  className="form-checkbox text-blue-600"
                />
                <span className="ml-2">Cloud Migration</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="workspaceSolutions"
                  checked={formData.workspaceSolutions}
                  onChange={handleInputChange}
                  className="form-checkbox text-blue-600"
                />
                <span className="ml-2">Work Space Solutions</span>
              </label>
              {errors.requesting && (
                <p className="text-red-600 text-sm mt-2">{errors.requesting}</p>
              )}
            </fieldset>

            {/* Name */}
            <div>
              <label className="block font-bold mb-3">
                Name <span className="text-red-600">*</span>
              </label>
              <div className="flex flex-col sm:flex-row gap-5">
                <div className="w-full">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First"
                    className="w-full border border-gray-300 p-2 rounded focus:ring-blue-500 focus:border-blue-500"
                  />
                  {errors.firstName && (
                    <p className="text-red-600 text-sm mt-2">
                      {errors.firstName}
                    </p>
                  )}
                </div>
                <div className="w-full">
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last"
                    className="w-full border border-gray-300 p-2 rounded focus:ring-blue-500 focus:border-blue-500"
                  />
                  {errors.lastName && (
                    <p className="text-red-600 text-sm mt-2">
                      {errors.lastName}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Work Email */}
            <div>
              <label className="block font-bold mt-6 mb-3">
                Work Email <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full border border-gray-300 p-2 rounded focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.email && (
                <p className="text-red-600 text-sm mt-2">{errors.email}</p>
              )}
            </div>

            {/* Job Title */}
            <div>
              <label className="block font-bold mt-6 mb-3">
                Job Title <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleInputChange}
                className="w-full border border-gray-300 p-2 rounded focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.jobTitle && (
                <p className="text-red-600 text-sm mt-2">{errors.jobTitle}</p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label className="block font-bold mt-6 mb-3">Phone Number</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full border border-gray-300 p-2 rounded focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Comments */}
            <div>
              <label className="block font-bold mt-6 mb-3">Comments</label>
              <textarea
                name="comments"
                value={formData.comments}
                onChange={handleInputChange}
                rows="4"
                className="w-full border border-gray-300 p-2 rounded focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>

            {/* CAPTCHA Placeholder */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="notRobot"
                checked={formData.notRobot}
                onChange={handleInputChange}
                className="form-checkbox text-blue-600"
              />
              <span>I'm not a robot</span>
            </div>
            {errors.notRobot && (
              <p className="text-red-600 text-sm mt-2">{errors.notRobot}</p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-auto bg-gray-200 font-bold text-sm sm:text-base px-5 py-3 rounded-lg shadow hover:bg-gray-300 active:bg-gray-700 cursor-pointer"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </section>

      {/* Custom Success Modal */}
      {isModalOpen && (
        <ContactModal
          onClose={closeModal}
        />
      )}
    </article>
  );
};

export default Contact;
