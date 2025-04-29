import React, {useEffect, useState} from "react";
// import homeVideo from "../assets/homeImages/homeVid2.mp4";
import companyProfile from "../assets/homeImages/companyProfileLogo.png";
import feature1Img from "../assets/homeImages/feature1Img.png";
import feature2Img from "../assets/homeImages/feature2Img.png";
import feature3Img from "../assets/homeImages/feature3Img.png";
import mapImg from "../assets/homeImages/mapImg.png";
import ServiceCard from "../components/ServiceCard";
import ServiceBanner from "../components/ServicesBanner";
import animation1 from "../assets/Animation/1/Frame 41.json";
import animation2 from "../assets/Animation/2/Frame 50.json";
import animation3 from "../assets/Animation/3/Frame 58.json";
import animation4 from "../assets/Animation/4/Frame 66.json";
import animation5 from "../assets/Animation/5/Frame 72.json";
import animation6 from "../assets/Animation/6/Frame 76.json";
import animation7 from "../assets/Animation/7/Frame 80.json";
import animation8 from "../assets/Animation/8/Frame 87.json";
import animation9 from "../assets/Animation/9/Frame 94.json";

import logo1 from "../assets/homeImages/logo1.png";
import logo2 from "../assets/homeImages/logo2.png";
import logo3 from "../assets/homeImages/logo3.png";
import logo4 from "../assets/homeImages/logo4.png";
import logo5 from "../assets/homeImages/logo5.png";
import logo6 from "../assets/homeImages/logo6.png";
import logo7 from "../assets/homeImages/logo7.png";
import logo8 from "../assets/homeImages/logo8.png";
import logo9 from "../assets/homeImages/logo9.png";
import logo10 from "../assets/homeImages/logo10.png";
import logo11 from "../assets/homeImages/logo11.png";
import logo12 from "../assets/homeImages/logo12.png";
import logo13 from "../assets/homeImages/logo13.png";
import logo14 from "../assets/homeImages/logo14.png";
import logo15 from "../assets/homeImages/logo15.png";
import logo16 from "../assets/homeImages/logo16.png";

const Home = () => {
  const services = [
    {
      image: animation1,
      title: "24/7 End-User Assistance",
      description: "Offering prompt and reliable IT support to streamline daily operations. From setup to troubleshooting, we ensure a seamless tech experience for maximum efficiency.",
      path: "/services/IT-end-user-support",
    },
    {
      image: animation2,
      title: "Scalable IT Infrastructure Solutions",
      description: "Designing scalable and resilient technology solutions to support your business growth and stability. From network infrastructure to data security, we ensure a seamless and secure IT environment.",
      path: "/services/IT-infrastructure-management",
    },
    {
      image: animation3,
      title: "WIFI SURVEYS",
      description: "Improving wireless connectivity with comprehensive site surveys for seamless coverage and performance. We detect and fix signal issues, ensuring fast and dependable WiFi across your environment.",
      path: "/services/wireless-survey",
    },
    {
      image: animation4,
      title: "Dynamic Onsite Assistance",
      description: "Providing flexible on-site support to align with your operational requirements. Our team ensures seamless integration and prompt solutions, keeping your business running smoothly.",
      path: "/services/flexible-on-support",
    },
    {
      image: animation5,
      title: "SECURITY SERVICES",
      description: "Building secure and scalable technology frameworks to drive your business’s growth and stability. From network infrastructure to data security, we ensure a reliable and seamless IT environment.",
      path: "/services/managed-security",
    },
    {
      image: animation6,
      title: "IT Outsourcing",
      description: "Need expert support and a skilled team to keep your daily operations running smoothly? We offer scalable, round-the-clock assistance to ensure uninterrupted business performance.",
      path: "/services/IT-outsourcing",
    },
    {
      image: animation7,
      title: "WEB & APP DESIGN & DEVELOPMENT ",
      description: "We design and develop modern, responsive websites and apps that elevate your brand and engage your audience.",
    },
    {
      image: animation8,
      title: "SOFTWARE DEVELOPMENT",
      description: "We specialize in building custom software tailored to your unique business needs.From concept to deployment, we ensure seamless performance and scalability. ",
    },
    {
      image: animation9,
      title: "E-LEARNING TRAINING",
      description: "Interactive and engaging digital training solutions designed to educate, inspire, and empower learners anytime, anywhere.",
    }
  ];
  

  const features = [
    {
      image: `${feature1Img}`,
      title: "365 GLOBAL COVERAGE",
      description:
        "Anytime, Anywhere – Our services span the globe, ensuring you have support day or night.",
    },
    {
      image: `${feature2Img}`,
      title: "EXPERT ENGINEER",
      description:
        "Experience You Can Trust – Our seasoned professionals provide swift responses and detailed insights to keep your operations running smoothly.",
    },
    {
      image: `${feature3Img}`,
      title: "ONE-SITE-SUPPORT",
      description:
        "Your Eyes and Hands – Our engineers act as an extension of your team, expertly handling on-site challenges to ensure end-user satisfaction.",
    },
  ];

  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11, logo12, logo13, logo14, logo15, logo16];

  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(
    typeof window !== 'undefined' && window.innerWidth < 640 ? 2 : 8
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prevIndex) => (prevIndex + 1) % logos.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [logos.length]);

  useEffect(() => {
    const updateVisibleCount = () => {
      setVisibleCount(window.innerWidth < 640 ? 2 : 8);
    };

    updateVisibleCount(); // run once initially

    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const getVisibleLogos = () => {
    const extendedLogos = [...logos, ...logos]; // duplicate to avoid slicing issue
    return extendedLogos.slice(startIndex, startIndex + visibleCount);
  };

  return (
    <article>
      {/* Banner section */}
      <ServiceBanner
      video="https://orbitpulse365.com/Video/homepagevideo.mp4"
        title="STRENGTHEN YOUR BUSINESS WITH OUR RELIABLE IT SUPPORT!"
        description="Identifying challenges and implementing tailored solutions, every step aligns seamlessly with your business vision."
      />

      {/* Header Section */}
      <section className="text-center my-14 font-bangla px-3  max-w-6xl mx-auto">
        <h1 className="text-2xl sm:text-4xl font-bold text-[#FCB813] uppercase">
        Enabling your future with innovative IT solutions
        </h1>
        <div className="">
          <p className="text-lg sm:text-2xl text-[#00BDFF] mt-4 uppercase">
          With every stage of your business growth, our IT solutions evolve in sync—empowering you to stay focused on driving innovation.
          </p>
          <p className="mt-6 text-gray-700 text-base md:text-lg">
            As "<b>you</b>" focus on innovation to grow your business, "
            <b>we</b>" help you speed up your time to market, boost operational
            efficiency, and maintain a competitive edge. Companies worldwide
            trust Orbit Pulse for our extensive experience, deep industry
            knowledge, and commitment to integrity.
          </p>
          <div className="max-w-4xl mx-auto">
            <hr className="mt-10 border-gray-300 " />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-3 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-[#047BAF] text-center mb-8">
          SUPPORTING YOUR JOURNEY
        </h2>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 items-stretch px-2 sm:px-0">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                image={service.image}
                path={service.path} // only defined for the first 6
              />
            ))}
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center py-10 px-3">
        {/* Title Section */}
        <h2 className="text-xl md:text-2xl lg:text-3xl text-[#047BAF] font-bold mb-4 mt-10 text-center">
          DOWNLOAD OUR COMPANY PROFILE
        </h2>

        {/* Download Button */}
        <button className="bg-[#1D51A2] hover:bg-[#2E69D6] text-white font-semibold py-2 px-6 rounded-lg mb-10 cursor-pointer text-sm sm:text-base">
          DOWNLOAD PROFILE
        </button>

        {/* Profile Image */}
        <div className="flex justify-center bg-[#EAEAEA80] w-full">
          <img
            src={companyProfile}
            alt="Company Profile"
            className="w-full sm:max-w-[35rem] h-auto"
          />
        </div>
      </section>

      {/* why choose me section */}
      <section className="px-3">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-4xl mx-auto">
            <hr className="mt-10 border-gray-300 " />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#047BAF] text-center mb-6 sm:mb-8 mt-12">
            Orbit Pulse
          </h2>
          <p className="text-[#5E5E5E] text-center">
            We understand your business processes inside and out, ensuring every
            detail is addressed. Whether it's meeting SLAs or dispatching expert
            engineers to remote locations for hardware support, we deliver
            seamless solutions.
          </p>
        </div>

        <div className="flex justify-center pt-8 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-5">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group flex flex-col items-center text-center w-full"
              >
                <div className="bg-[#F5F5F5] w-full flex justify-center items-center h-40 py-32 group-hover:bg-[#00BDFF] group-hover:rotate-y-180 transform transition duration-500 perspective-1000">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-60 group-hover:rotate-y-180 transform transition duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#00BDFF] mb-2 mt-8 group-hover:text-[#005A99] transition duration-300">
                  {feature.title}
                </h3>
                <p className="text-[#5E5E5E] text-sm group-hover:text-[#333333] transition duration-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="my-8 max-w-4xl mx-auto">
          <hr className="mt-10 border-gray-300" />
        </div>
      </section>

      {/* Flexible on-site/map section */}
      <section className="flex flex-col md:flex-row justify-center items-center gap-10 sm:gap-20 sm:p-6 px-3 text-sm mb-10 sm:mb-16">
        <div className="flex flex-col space-y-8 w-72">
          <div className="border-b border-gray-300 pb-4">
            <h3 className="text-xl font-bold text-[#00BDFF] uppercase">
              united kingdom
            </h3>
            <p className="text-gray-600 flex flex-col gap-1 mt-1">
              <span>ORBIT PULSE 365 Ltd.</span>
              <span>St Helens 1 Undershaft, London</span>
              <span>EC3P 3DQ</span>
            </p>
            {/* <button className="mt-4 bg-[#F0B138] text-white font-semibold px-4 py-1 rounded-full hover:bg-yellow-500 cursor-pointer">
              Learn More
            </button> */}
          </div>

          <div className="border-b border-gray-300 pb-4">
            <h3 className="text-xl font-bold text-[#00BDFF] uppercase">
              united state of america
            </h3>
            <p className="text-gray-600 flex flex-col gap-1 mt-1">
              <span>ORBIT PULSE 365 Ltd.</span>
              <span>2421 69th Street Galveston</span>
              <span>TX 77551</span>
            </p>
            {/* <button className="mt-4 bg-[#F0B138] text-white font-semibold px-4 py-1 rounded-full hover:bg-yellow-500 cursor-pointer">
              Learn More
            </button> */}
          </div>
        </div>

        <div>
          <img
            src={mapImg}
            alt="World Map with Icons"
            className="w-full max-w-3xl"
          />
        </div>
      </section>
      
      {/* TECHNOLOGIES WE SUPPORT */}
      <div className="py-8 bg-white overflow-hidden max-w-6xl mx-auto">
      <h2 className="text-center text-[#047BAF] text-xl md:text-3xl font-bold mb-8">TECHNOLOGIES WE SUPPORT</h2>

      <div className="flex justify-center gap-8 sm:gap-12 transition-all duration-500 ease-in-out">
        {getVisibleLogos().map((logo, index) => (
          <div key={index} className="flex justify-center items-center">
            <img
              src={logo}
              alt={`Logo ${index}`}
              className=" rounded-full object-cover w-24 sm:w-auto"
            />
          </div>
        ))}
      </div>
    </div>

    </article>
  );
};

export default Home;
