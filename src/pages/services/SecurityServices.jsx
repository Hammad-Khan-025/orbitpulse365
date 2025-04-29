import React from "react";
import ServiceBanner from "../../components/ServicesBanner";
import mainImage from "../../assets/servicesImages/Security-services/mainImage.png";
import overview from "../../assets/servicesImages/Security-services/overview.png";
import approach from "../../assets/servicesImages/Security-services/approach.png";
import icon1 from "../../assets/servicesImages/Security-services/icon1.png";
import icon2 from "../../assets/servicesImages/Security-services/icon2.png";
import icon3 from "../../assets/servicesImages/Security-services/icon3.png";
import BorderLine from "../../components/BorderLine";

const SecurityServices = () => {
  const services = [
    "Threat Management",
    "Managed Detection And Response",
    "Managed Cloud Security",
    "Managed Endpoint Security",
    "Managed Identity",
    "Security Command Center",
  ];

  const networkSecurityData = [
    {
      title: "Secure Access Service Edge (SASE)",
      description:
        "Transform your networking and network security with a unified, cloud-based service model, managed and optimized by a global leader in cybersecurity.",
      bgColor: "bg-[#3EA3DE4D]",
      image: icon1,
    },
    {
      title: "Advanced Managed Firewall Services",
      description:
        "Leverage comprehensive monitoring and management, enhanced with advanced analytics and near-real-time data correlation across industry-leading firewall technologies.",
      bgColor: "bg-[#D9D9D94D]",
      image: icon2,
    },
    {
      title: "Intrusion Detection and Prevention Services",
      description:
        "Safeguard your network from unauthorized access and data theft through continuous monitoring, alerting, and support for Network IDPS across your entire infrastructure.",
      bgColor: "bg-[#3EA3DE4D]",
      image: icon3,
    },
  ];

  return (
    <article>
      {/* Banner section */}
      <ServiceBanner
        image={mainImage}
        title="Comprehensive Security Management Services"
        description="More organizations and enterprises are increasingly choosing managed security services to gain access to specialized security expertise while easing the burden on their internal security teams. A key concern for many businesses is finding a trusted and reliable security provider that can ensure the protection of their valuable assets and data."
      />

      <section className="flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-10 px-5 lg:px-10 py-6 sm:py-10 max-w-7xl mx-auto mt-2 sm:mt-10">
        {/* Left Content */}
        <div className="mx-5">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-[600] text-[#FCB813] mb-4 font-kannada text-center">
            OVERVIEW
          </h2>
          <ul className="text-[#5E5E5E] leading-8 max-w-[40rem] lg:text-left list-disc">
            <li>
              We deliver a full spectrum of managed security solutions tailored
              to meet your business’s unique risk landscape.
            </li>
            <li>
              Whether it’s threat detection, response coordination, or
              infrastructure setup — our services are built to safeguard every
              layer of your operations.
            </li>
            <li>
              You can count on our experts to zero in on high-priority areas
              within your organization that demand focused protection.
            </li>
            <li>
              If needed, we can take complete responsibility for your security
              operations, offering a fully outsourced model for peace of mind.
            </li>
          </ul>
        </div>
        {/* Right Content - Placeholder for Image */}
        <div className="">
          <img
            src={overview}
            alt="Benefits of Managed IT Services"
            className="w-full max-w-md"
          />
        </div>
      </section>

      <section className="flex flex-col lg:flex-row-reverse items-center justify-center gap-6 sm:gap-20 px-5 lg:px-10 py-6 sm:py-0 max-w-7xl mx-auto">
        {/* Left Content */}
        <div className="mx-5">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-[600] text-[#FCB813] mb-4 font-kannada text-center sm:mt-12 uppercase">
            Behind the Shield
          </h2>
          <h2 className="text-[#1D51A2] font-bold mt-4 mb-2">
            Strategic Security Reinforcement
          </h2>
          <ul className="text-[#5E5E5E] leading-8 max-w-[40rem] lg:text-left list-disc list-inside">
            <li>
              Security isn’t just about defense — it’s about staying ahead. Our
              specialists continuously monitor, detect, and respond to threats
              around the clock, ensuring your business stays secure and
              uninterrupted.
            </li>
          </ul>

          <h2 className="text-[#1D51A2] font-bold mt-4 mb-2">
            Tailored Protection for Every Layer
          </h2>
          <ul className="text-[#5E5E5E] leading-8 max-w-[40rem] lg:text-left list-disc list-inside">
            <li>
              From cloud environments to data governance and identity access
              management, we craft security solutions that align precisely with
              your organization’s structure and goals.
            </li>
          </ul>

          <h2 className="text-[#1D51A2] font-bold mt-4 mb-2">
            Optimized for Long-Term Resilience
          </h2>
          <ul className="text-[#5E5E5E] leading-8 max-w-[40rem] lg:text-left list-disc list-inside">
            <li>
              We go beyond just setup — our experts fine-tune and evolve your
              security programs for sustained performance, adapting as your
              business and threats change.
            </li>
          </ul>

          <h2 className="text-[#1D51A2] font-bold mt-4 mb-2">World-Class Security Backbone</h2>
          <ul className="text-[#5E5E5E] leading-8 max-w-[40rem] lg:text-left list-disc list-inside">
            <li>
              Powered by state-of-the-art infrastructure, skilled professionals,
              and globally recognized practices, we deliver an enterprise-grade
              security ecosystem you can rely on.
            </li>
          </ul>
        </div>
        {/* Right Content - Placeholder for Image */}
        <div className="">
          <img
            src={approach}
            alt="Benefits of Managed IT Services"
            className="w-full max-w-md"
          />
        </div>
      </section>

      <div className="max-w-[75rem] mx-auto px-5 sm:px-0 pt-5 sm:pt-8">
        <BorderLine />
      </div>

      <div className="flex flex-col items-center px-4 py-5">
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl font-semibold text-blue-800 text-center">
          Comprehensive Managed Network Security Solutions
        </h2>

        {/* Service Cards */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 my-10 sm:my-20">
          {networkSecurityData.map((service, index) => (
            <div key={index} className="group">
              <div
                className={`max-w-80 sm:max-w-96 max-h-80 sm:max-h-96 ${service.bgColor} rounded-full flex flex-col items-center justify-center text-center p-10 sm:p-16 shrink-0 group-hover:shadow-xl shadow-[#3EA3DE4D] transition-shadow duration-300`}
              >
                {/* Image Icon */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-20 sm:w-32 h-20 sm:h-32 mb-3"
                />

                {/* Title */}
                <h3 className="text-base sm:text-lg font-semibold text-[#434242] mb-2">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#5E5E5E]">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};

export default SecurityServices;
