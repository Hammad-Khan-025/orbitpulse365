import React, { useState } from "react";
import mainImage from "../../assets/servicesImages/IT-infrastructure-services/mainImage.png";
import settingsIcon from "../../assets/servicesImages/IT-infrastructure-services/settings-icon.png";
import summaryImage1 from "../../assets/servicesImages/IT-infrastructure-services/summaryImage1.png";
import summaryImage2 from "../../assets/servicesImages/IT-infrastructure-services/summaryImage2.png";
import bgGroup from "../../assets/servicesImages/IT-infrastructure-services/bgGroup.png";
import bgGroupMobile from "../../assets/servicesImages/IT-infrastructure-services/bgGroupMobile.png";
import endUser from "../../assets/servicesImages/IT-infrastructure-services/endUserImage.png";
import platformer from "../../assets/servicesImages/IT-infrastructure-services/platformerImage.png";
import Lottie from "lottie-react";
import animation from "../../assets/Animation/IT-Infrastructure/Animation.json";
import BorderLine from "../../components/BorderLine";
import ServiceBanner from "../../components/ServicesBanner";
import { FaPlus, FaMinus } from "react-icons/fa6";

const ITInfrastructureServices = () => {
  const questions = [
    {
      title: "What is infrastructure management?",
      description:
        "Infrastructure management is the maintenance and upkeep of IT environments. It often includes change, patch and security management. Some businesses choose to outsource the management of their infrastructure as it requires close attention and internal IT teams often prefer to focus on innovative IT solutions rather than business as usual maintenance.",
    },
    {
      title: "Why is infrastructure management important?",
      description:
        "Infrastructure management requires frequent attention. Patching, updating, securing and monitoring performance are all key to keeping the business running. If left unattended, infrastructure environments will inevitably fail, costing the business time, money and reputational damage.",
    },
    {
      title: "What are the components of infrastructure management?",
      description:
        "The common components of infrastructure management are patch management, change management, asset management, capacity management, security management and on occasion, supplier management.",
    },
    {
      title: "What causes poor infrastructure?",
      description:
        "Poor infrastructure is often the result of poor planning and maintenance. Your infrastructure will impact which tools your employees can use, often creating or preventing competitive advantage. Poor maintenance results in security vulnerabilities and reduced performance, holding the business back from performing at its best.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const columns = [[], []];
  questions.forEach((item, index) => {
    columns[index % 2].push({ ...item, originalIndex: index });
  });

  return (
    <article>
      {/* Banner section */}
      <ServiceBanner
        image={mainImage}
        title="IT Infrastructure Solutions"
        description="Our expert team will partner with you to strategically plan, implement, and manage your data center migration, ensuring seamless transitions with minimal impact on your operations and no data loss."
      />

      <section className="flex flex-col items-center text-center mt-10  bg-white font-kannada px-5">
        <h2 className="text-lg md:text-3xl font-bold text-[#FCB813] uppercase">
          Building the Backbone of Your Business with{" "}
          <br className="hidden sm:block" /> Robust IT Infrastructure.
        </h2>
        <p className="mt-6 text-gray-600 max-w-5xl">
          In a world where technology evolves at lightning speed, your business
          needs an IT infrastructure that adapts just as fast. Orbit Pulse goes
          beyond simple IT management—we fine-tune, secure, and elevate your IT
          ecosystem, making it a strategic asset that grows with your business.
        </p>
        <p className="mt-4 text-gray-600 max-w-5xl">
          Our comprehensive IT solutions ensure that your systems are always
          optimized and ready for the next challenge. From network reliability
          to data security, we keep your infrastructure strong, agile, and
          future-proof, giving you the freedom to focus on what truly
          matters—innovation and success.
        </p>
        <p className="mt-4 text-gray-600 max-w-5xl">
          We offer continuous support, round-the-clock, so your operations never
          miss a beat. With Orbit Pulse, your IT infrastructure isn't just
          running—it's thriving.
        </p>

        {/* image section for desktop*/}
        {/* <div className="relative mt-8 w-full max-w-5xl hidden md:block">
          <img src={bgGroup} alt="" />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col sm:flex-row items-center justify-center">
            <img src={endUser} alt="" className="w-72" />
            <img src={platformer} alt="" className="w-72" />
          </div>
        </div> */}

        {/* image section for mobile */}
        {/* <div>
          <div className="relative my-8 w-full max-w-5xl md:hidden">
            <img src={bgGroupMobile} alt="" className="max-w-[18rem]" />
            <div className="absolute top-10 left-0 w-full h-full flex flex-col items-center justify-center">
              <img src={endUser} alt="" />
            </div>
          </div>
          <div className="relative my-8 w-full max-w-5xl md:hidden">
            <img src={bgGroupMobile} alt="" className="max-w-[18rem]" />
            <div className="absolute top-10 left-0 w-full h-full flex flex-col items-center justify-center">
              <img src={platformer} alt="" />
            </div>
          </div>
        </div> */}
      </section>

      <div className="max-w-3xl mx-auto">
        <BorderLine />
      </div>

      <section className="flex flex-col items-center justify-center mt-10 mx-5">
        <h2 className="text-xl sm:text-2xl font-semibold text-[#1D51A2] text-center sm:text-start">
          End-to-End IT Infrastructure Management for Seamless Business
          Operations
        </h2>
        <p className="text-[#5E5E5E] text-sm sm:text-base mt-2 mb-4 font-bold">
          We specialize in optimizing and maintaining every aspect of your IT
          infrastructure, focusing on:
        </p>

        <div className="bg-[#1D51A2] text-white rounded-4xl px-5 sm:px-10 py-8 sm:py-10 mt-4 w-full max-w-3xl flex flex-col sm:flex-row sm:justify-around sm:gap-10">
          <div className="sm:hidden mb-5 flex justify-center">
            <Lottie
              animationData={animation}
              loop={true}
              autoplay={true}
              className="w-32 sm:w-36"
            />
          </div>

          {/* First list */}
          <ul className="list-disc pl-5 text-sm leading-8 sm:mb-6">
            <li>Comprehensive Networking and Hardware Solutions</li>
            <li>Scalable IT Solutions to Grow with Your Business</li>
            <li>Thorough Pre-Migration Assessment for Smooth Transitions</li>
            <li>Strategic IT Planning and Design</li>
            <li>Optimizing Networking Components for Maximum Efficiency</li>
            <li>Advanced Software Application Management</li>
            <li>Seamless Migration Execution for Minimal Downtime</li>
          </ul>
          {/* Image and second list (mobile) */}
          <div className="">
            {/* <img src={settingsIcon} alt="icon" className="w-32 mb-2" /> */}
            <div className="hidden sm:block">
              <Lottie
                animationData={animation}
                loop={true}
                autoplay={true}
                className="w-32 sm:w-36"
              />
            </div>

            <ul className="list-disc pl-5 text-sm leading-8 sm:mt-6">
              <li>Reducing Risk with Reliable IT Management</li>
              <li>Unmatched Expertise for IT Infrastructure Success</li>
              <li>Ensuring Minimal Disruption During IT Transformations</li>
              <li>Ongoing Post-Migration Support to Ensure Stability</li>
            </ul>
          </div>
        </div>
      </section>

      {/* border line */}
      <div className="max-w-4xl mx-auto mt-14 hidden sm:block">
        <hr className="  border border-gray-300 " />
      </div>

      <section className="flex flex-col items-center justify-center mt-8 px-5 sm:px-0 mb-10 sm:mb-20">
        <h2 className="text-xl sm:text-2xl font-semibold text-[#1D51A2] text-center sm:text-start">
          Transforming Your IT Infrastructure with Orbit Pulse Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-20 mt-5 w-full max-w-4xl">
          <ul className="list-disc pl-5 text-sm text-[#5E5E5E] leading-7">
            <li>
              Designing and maintaining highly adaptive and reliable network
              infrastructures that cater to the evolving needs of modern
              businesses.
            </li>
            <li>
              Leveraging advanced technology to identify and resolve potential
              challenges ahead of time, minimizing downtime and safeguarding
              business continuity.
            </li>
            <li>
              End-to-end visibility and continuous oversight of all critical
              infrastructure elements to ensure consistent, peak performance
              across the board.
            </li>
            <li>
              Strategic planning and execution to ensure your infrastructure
              scales effortlessly as your business expands, without disruptions.
            </li>
          </ul>
          <ul className="list-disc pl-5 text-sm text-[#5E5E5E] leading-7">
            <li>
              Fortifying your infrastructure with stringent security measures,
              continuous audits, and adherence to the highest compliance
              standards, ensuring the protection of your business assets.
            </li>
            <li>
              Expertise in seamless cloud migrations, managing hybrid
              environments, and optimizing cloud infrastructures to maximize
              performance and cost-efficiency.
            </li>
            <li>
              Preserving data integrity through routine backups and swift
              disaster recovery solutions to ensure no critical information is
              ever lost.
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 sm:mt-10 w-full max-w-4xl">
          <img src={summaryImage1} alt="working on laptop" />
          <img src={summaryImage2} alt="working on laptop" />
        </div>
      </section>

      {/* border line */}
      {/* <div className="max-w-4xl mx-auto mt-14 hidden sm:block">
        <hr className="  border border-gray-300 " />
      </div> */}

      {/* FAQS section */}
      {/* <h1 className="text-center text-[#1D51A2] text-xl sm:text-2xl font-bold py-6 sm:py-10">
        FAQ
      </h1>
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 px-5 sm:px-16 max-w-5xl mx-auto mb-16">
        {columns.map((column, colIndex) => (
          <div key={colIndex} className="space-y-6">
            {column.map((item) => (
              <div
                key={item.originalIndex}
                className="border-b border-[#464646] pb-4"
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-md font-semibold">{item.title}</h3>
                  <button
                    className="w-8 sm:w-10 h-8 sm:h-10 flex items-center justify-center border rounded-full cursor-pointer hover:bg-gray-100 shrink-0"
                    onClick={() => toggleAccordion(item.originalIndex)}
                  >
                    <span className="text-gray-600 text-base sm:text-lg font-bold">
                      {activeIndex === item.originalIndex ? <FaMinus/> : <FaPlus/>}
                    </span>
                  </button>
                </div>
                {activeIndex === item.originalIndex && (
                  <p className="mt-2 text-sm text-[#272727] leading-7">
                    {item.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        ))}
      </section> */}
    </article>
  );
};

export default ITInfrastructureServices;
