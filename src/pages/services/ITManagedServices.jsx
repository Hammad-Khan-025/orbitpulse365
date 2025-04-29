import React, { useState } from "react";
import mainImage from "../../assets/servicesImages/IT-managed-services/IT-managed-services-img.png";
import keyOfferingImage from "../../assets/servicesImages/IT-managed-services/keyOfferingImage.png";
import image1 from "../../assets/servicesImages/IT-managed-services/image1.png";
import image2 from "../../assets/servicesImages/IT-managed-services/image2.png";
import ITimage from "../../assets/servicesImages/IT-managed-services/IT-service-benefits-img.png";
import ITimageMobile from "../../assets/servicesImages/IT-managed-services/IT-benefits-mobile-img.png";
import step1Icon from "../../assets/servicesImages/IT-managed-services/step1-icon.png";
import step2Icon from "../../assets/servicesImages/IT-managed-services/step2-icon.png";
import step3Icon from "../../assets/servicesImages/IT-managed-services/step3-icon.png";
import step4Icon from "../../assets/servicesImages/IT-managed-services/step4-icon.png";
import BorderLine from "../../components/BorderLine";
import ServiceBanner from "../../components/ServicesBanner";
import { FaPlus, FaMinus } from "react-icons/fa6";

const Services = () => {
  const onboardingSteps = [
    {
      step: "Step 1",
      title: "Project Kickoff",
      description:
        "Delivering dependable and responsive IT support to empower users in their everyday operations. From initial setup to troubleshooting, we ensure smooth, hassle-free technology experiences that drive productivity.",
      icon: step1Icon,
    },
    {
      step: "Step 2",
      title: "Knowledge Sharing",
      description:
        "Offering consistent and reliable IT support to equip users in their daily activities. From setup to troubleshooting, we deliver smooth tech experiences that enhance efficiency and productivity.",
      icon: step2Icon,
    },
    {
      step: "Step 3",
      title: "On-Demand Technical Assistance",
      description:
        "Providing reliable and responsive IT support to keep users productive during transitional phases. Whether it’s setup or troubleshooting, we ensure seamless tech operations every step of the way.",
      icon: step3Icon,
    },
    {
      step: "Step 4",
      title: "Operational Rollout",
      description:
        "Ensuring dependable and proactive IT support to empower users in their daily workflows. From initial setup to issue resolution, we deliver smooth and efficient tech experiences that boost overall productivity.",
      icon: step4Icon,
    },
  ];

  const questions = [
    {
      title: "Advantages Of Orbit Pulse Support Services",
      description: (
        <ul className="list-disc list-inside ps-3 leading-7">
          <li>You can access professional skills and resources</li>
          <li>Allows you to customize your own IT service</li>
          <li>You can shift from variable costs to monthly fee</li>
          <li>Users can log tickets and request for services</li>
        </ul>
      ),
    },
    {
      title: "NOC & SOC Monitoring",
      description: `Network Operations Center (NOC) and the System and Organization Controls (SOC) Monitoring enhances the security and IT integrity of your organization. These monitoring services play a significant role in helping your organization predict potential IT threats and prevent them from causing problems. Orbit Pulse possesses the right tools and resources that identify, manage, and take care of all your IT problems. We will effectively monitor the problems in your IT ecosystem.`,
    },
    {
      title: "Network Operation Centers (NOC)",
      description: `NOC specifically controls, manages, and monitors network infrastructures. This monitoring service manages the technological equipment including router, server, switch, firewall, storage system, device management system, telecommunication system, wireless system, database system, and Internet of Things (IoT) device. Orbit Pulse personnel at NOCs constantly monitors 24/7/365 for any abnormalities, faults, critical events, and outages within the network.`,
    },
    {
      title: "Security Operations Center (SOC)",
      description: `The SOC is a facility comprising the security team responsible for the analysis and monitoring of enterprise information systems including websites, applications, networks, desktops, servers and data centers. The main objective of this team is to detect, analyze, and respond to cybersecurity incidents or threats occurring within an enterprise network. Orbit Pulse takes care of all aspects of your security strategy including security strategy, security architecture, and protective measures.`,
    },
    {
      title: "Key Responsibilities of The SOC",
      description: (
        <ul className="list-disc list-inside ps-3 leading-7">
          <li>Real-time triage and monitoring</li>
          <li>Cyber Intel collection analysis</li>
          <li>Creation, fusion, and distribution</li>
          <li>
            Examining event feeds, incident data, and collected malware for
            proof of malicious activity.
          </li>
          <li>Malware and implant analysis</li>
        </ul>
      ),
    },
  ];

  const servicesLeft = [
    "Expert Consulting, IT Leadership & Strategic Management",
    "Proactive Risk Assessment & Mitigation",
    "Optimized IT Systems for Peak Performance",
    "24/7/365 IT Helpdesk Support",
    "Skilled IT Staff Augmentation",
    "Remote Hands IT Support",
    "Global Coverage Across 190+ Countries",
  ];

  const servicesRight = [
    "Global Warehousing & Inventory Solutions",
    "Secure IT Asset Disposition (ITAD)",
    "Wireless Surveys as a Service (Ekahau WsaaS)",
    "One-Stop Shop for Network, Storage & Server Solutions",
    "End-to-End Infrastructure Management",
    "Next-Gen Data Center Support & Operations",
    "Proven Reliability and Extensive Industry Experience",
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
        title="Managed IT Solutions"
        description="Your all-in-one solution for IT challenges and a trusted partner in managing service requests—backed by a 24/7 team of dedicated experts."
      />

      {/* Manage IT services section */}
      <section className="flex flex-col lg:flex-row items-center justify-center gap-6 px-6 lg:px-16 py-10 max-w-[90rem] mx-auto">
        {/* Left Content */}
        <div className=" text-center lg:text-left max-w-[45rem]">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-[600] text-[#FCB813] mb-4 font-kannada text-center uppercase">
            Why Choose Managed <br /> IT Solutions
          </h2>
          <p className="text-[#5E5E5E] mb-4">
            At Orbit Pulse, we recognize the game-changing impact of managed IT
            services. Our solutions are designed to help businesses run at their
            best—freeing them from the complexities of day-to-day IT management.
          </p>
          <p className="text-[#047BAF] mb-4 font-semibold">
            By partnering with Orbit Pulse, organizations can focus on their
            core goals while trusting that their IT infrastructure is expertly
            handled.
          </p>
          <p className="text-[#5E5E5E] mb-4">
            Our services offer a cost-effective alternative to building large
            in-house IT teams, helping reduce overhead and avoid unexpected
            expenses.
            <br />
            <br />
            With 24/7 support, we ensure maximum uptime, strong data protection,
            and rapid issue resolution. Choosing Orbit Pulse isn’t just
            outsourcing IT—it’s a smart move toward greater efficiency and
            operational excellence.
          </p>
        </div>

        {/* Right Content - Placeholder for Image */}
        <div className="mt-8 lg:mt-0 lg:ml-8 max-w-[45rem]">
          <img
            src={ITimage}
            alt="Benefits of Managed IT Services"
            className="w-full max-w-lg hidden sm:block"
          />
          <img
            src={ITimageMobile}
            alt="Benefits of Managed IT Services"
            className="w-full max-w-lg sm:hidden"
          />
        </div>
      </section>

      <div className="px-5 max-w-4xl mx-auto">
        <BorderLine />
      </div>

      {/* onboarding process */}
      <section className="flex justify-center mx-5">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#047BAF] text-center my-10 sm:my-14">
            Your Easy Gateway to Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 sm:gap-6 place-items-center items-stretch">
            {onboardingSteps.map((service, index) => (
              <div className="group flex flex-col w-full sm:max-w-[19rem] h-full">
                <div className="bg-[#F4F4F4] shadow-md rounded-tl-4xl rounded-br-4xl p-6 flex flex-col flex-1 px-8 sm:px-10 transition-all duration-300 transform group-hover:-translate-y-2 group-hover:bg-[#047BAF]">
                  {/* Icon Image Above Step Number */}
                  <div className="flex justify-end">
                    <img
                      src={service.icon}
                      alt={`Step ${index + 1} Icon`}
                      className="w-20 h-20 mb-4 bg-gray-200 rounded-full p-2"
                    />
                  </div>
                  <h1 className="text-[#F0B138] mb-2 font-semibold">
                    {service.step}
                  </h1>
                  <h3 className="text-xl font-bold text-[#047BAF] mb-4 group-hover:text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 mb-6 group-hover:text-white">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* key offering section */}
      <section className="relative mb-10 sm:mb-20">
        <h2 className="text-2xl md:text-3xl font-bold text-[#047BAF] text-center my-12 sm:my-18">
          Core Services
        </h2>
        <img src={image1} alt="" className="h-auto w-full sm:hidden" />
        <img src={image2} alt="" className="h-auto w-full sm:hidden" />
        <div className="bg-[#1D51A2CC]">
          <img
            src={keyOfferingImage}
            alt=""
            className="h-72 sm:h-auto object-cover hidden sm:block max-w-7xl mx-auto"
          />
          <div className="bg-[#1D51A2CC] absolute bottom-16 sm:bottom-0 left-0 w-full text-white py-14 sm:py-8  px-5 flex flex-col sm:flex-row justify-center gap-5 sm:gap-16 text-sm">
            {/* Left List */}
            <ul className="space-y-5 sm:space-y-4">
              {servicesLeft.map((service, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>{service}</span>
                </li>
              ))}
            </ul>

            {/* Right List */}
            <ul className="space-y-2 sm:space-y-4">
              {servicesRight.map((service, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Questions section */}
      {/* <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-20 px-5 sm:px-20 py-12 sm:py-20 max-w-[90rem] mx-auto">
        {columns.map((column, colIndex) => (
          <div key={colIndex} className="space-y-6">
            {column.map((item, index) => (
              <div key={index} className="border-b pb-4">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-base sm:text-lg font-semibold">
                    {item.title}
                  </h3>
                  <button
                    className="w-8 sm:w-10 h-8 sm:h-10 flex items-center justify-center border rounded-full cursor-pointer hover:bg-gray-100 shrink-0"
                    onClick={() => toggleAccordion(item.originalIndex ?? index)}
                  >
                    <span className="text-gray-600 text-lg sm:text-xl font-bold">
                      {activeIndex === (item.originalIndex ?? index) ? (
                        <FaMinus />
                      ) : (
                        <FaPlus />
                      )}
                    </span>
                  </button>
                </div>
                {activeIndex === (item.originalIndex ?? index) && (
                  <div className="mt-2 text-sm text-[#272727]">
                    {typeof item.description === "string" ? (
                      <p className="leading-7">{item.description}</p>
                    ) : (
                      item.description
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </section> */}
    </article>
  );
};

export default Services;
