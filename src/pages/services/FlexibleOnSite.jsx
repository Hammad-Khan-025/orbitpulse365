import React, { useState } from "react";
import ServiceBanner from "../../components/ServicesBanner";
import mainImage from "../../assets/servicesImages/Flexible-onsite/mainImage.png";
import img1 from "../../assets/servicesImages/Flexible-onsite/img1.png";
import img2 from "../../assets/servicesImages/Flexible-onsite/img2.png";
import icon1 from "../../assets/servicesImages/Flexible-onsite/icon1.png";
import icon2 from "../../assets/servicesImages/Flexible-onsite/icon2.png";
import icon3 from "../../assets/servicesImages/Flexible-onsite/icon3.png";
import icon4 from "../../assets/servicesImages/Flexible-onsite/icon4.png";
import icon5 from "../../assets/servicesImages/Flexible-onsite/icon5.png";
import BorderLine from "../../components/BorderLine";
import { FaCheck } from "react-icons/fa";

const FlexibleOnSite = () => {
  // const tabs = [
  //   {
  //     title: "Local IT Support",
  //     content: (
  //       <>
  //         Your users need comprehensive support, including on-site. We are happy
  //         to provide specialists (or teams) who support and advise your users
  //         on-site with technical questions and problem solving. Your local IT is
  //         relieved and can focus on other activities.
  //         <br />
  //         <br />
  //         By choosing Orbit Pulse, you’re not just opting for an IT solution;
  //         you’re partnering with a community-focused ally who understands your
  //         unique challenges. Let our local expertise bring peace of mind to your
  //         business operations, ensuring your technology works seamlessly and
  //         efficiently. With Orbit Pulse at your side, you’ve got a local IT
  //         champion, dedicated to empowering your success.
  //       </>
  //     ),
  //     image: img1,
  //   },
  //   {
  //     title: "Helping Smarthands",
  //     content: (
  //       <>
  //         Regardless of the expanse of your data center, having a competent
  //         on-site technical support team to provide immediate assistance in
  //         times of technical failure and service disruptions will always be of
  //         great help. While you have the option to hire a certified technician
  //         who will be stationed inside your company’s data center, it is not
  //         always the perfect choice.
  //         <br />
  //         <br />
  //         One of the most efficient and popular alternatives to hiring certified
  //         technicians is getting Smart Hands services. Aside from being
  //         versatile and highly reliable, Smart Hands services are also less
  //         expensive to maintain since these qualified data center technicians
  //         are capable of performing a number of tasks instantly and with
  //         accuracy.
  //       </>
  //     ),
  //     image: img2,
  //   },
  //   {
  //     title: "Retail IT Services",
  //     content: (
  //       <>
  //         We have proved ourselves best in the installation of people counter
  //         and footfall solutions for retail industry. Our expertise includes
  //         People/Traffic Counters installation, Footfall Solutions, Pre and Post
  //         Install Surveys, Maintenance/Troubleshooting, Hardware & Software
  //         Installation.
  //         <br />
  //         <br />
  //         Orbit Pulse stands by retailers, offering tailored IT support that
  //         drives sales, satisfies customers, and streamlines operations. Let
  //         Orbit Pulse be your partner in retail success, where technology meets
  //         commerce seamlessly.
  //       </>
  //     ),
  //     image: img3,
  //   },
  //   {
  //     title: "IMAC",
  //     content: (
  //       <>
  //         Orbit Pulse provides One-Stop solution for all your business
  //         requirements such as upgradations and relocations, our specially
  //         designed IMAC services are cost effective, flexible and completes well
  //         on time to fulfil your organization’s needs.
  //         <br />
  //         <br />
  //         Whether you’re setting up a new system, relocating your business,
  //         expanding your network, or making pivotal changes, Orbit Pulse stands
  //         ready to assist with precision and efficiency. With our experienced
  //         team overseeing your IMAC needs, you’re guaranteed minimized downtime
  //         and seamless transitions. Trust Orbit Pulse to handle the complexities
  //         of IMAC, so you can stay focused on propelling your business forward.
  //       </>
  //     ),
  //     image: img4,
  //   },
  //   {
  //     title: "DATA CENTER SUPPORT",
  //     content: (
  //       <>
  //         Orbit Pulse provides on-site Data Center Hardware / Software
  //         installation and troubleshooting services to our valued clients with
  //         our Centralized highly qualified offshore support team.
  //         <br />
  //         <br />
  //         From infrastructure management to round-the-clock monitoring, our
  //         dedicated team prioritizes the integrity, security, and efficiency of
  //         your data assets. With a keen understanding of the intricacies of
  //         modern data centers, Orbit Pulse offers tailored solutions to meet the
  //         unique demands of your enterprise. Align with us, and empower your
  //         business with a robust data backbone, upheld by industry-leading
  //         expertise and unwavering commitment.
  //       </>
  //     ),
  //     image: img5,
  //   },
  //   {
  //     title: "ITAD Services",
  //     content: (
  //       <>
  //         Reduce complexity and recover additional value with Orbit Pulse’
  //         complete IT asset disposition (ITAD) services: refurbishment, data
  //         erasure and compliant e-cycling.
  //         <br />
  //         <br />
  //         In a rapidly evolving digital landscape, managing the lifecycle of IT
  //         assets is more critical than ever. Orbit Pulse presents its premier IT
  //         Asset Disposition (ITAD) services, meticulously designed to safeguard
  //         your company’s reputation and the environment. We ensure that outdated
  //         or redundant IT equipment is disposed of securely, ethically, and in
  //         an eco-friendly manner. From data sanitization to responsible
  //         recycling, Orbit Pulse stands as your trusted partner, mitigating
  //         risks and ensuring compliance with global standards. Embrace a
  //         sustainable and secure future with Orbit Pulse’s ITAD services, where
  //         every asset is treated with the utmost responsible.
  //       </>
  //     ),
  //     image: img6,
  //   },
  //   {
  //     title: "Lifecycle Support",
  //     content: (
  //       <>
  //         With our tried-and-tested onsite IT services, we are at your side
  //         on-site – be it permanently or at fixed intervals – and take over the
  //         support for you. We look after your end devices throughout their
  //         entire lifecycle: from installation and setup to support and
  //         dismantling. We also take care of peripheral devices, servers, and
  //         networks. Another plus: With their excellent knowledge of technology,
  //         our support staff are not only prepared for any situation, but also
  //         proactively and effectively prevent faults and failures. For maximum
  //         efficiency, we integrate our onsite IT services into our central
  //         service desk. In this way, we bring structure and orderly processes to
  //         local support activities. The downstream central 2nd level support
  //         teams ensure that no problem remains unsolved, and your employees can
  //         concentrate fully on their tasks.
  //       </>
  //     ),
  //     image: img7,
  //   },
  //   {
  //     title: "Retainers Model",
  //     content: (
  //       <>
  //         Retainer is one highly useful form of equipment coverage that we
  //         provide to our valued clients. We have multiple SLAs and retainer
  //         contracts that we offer to our clients.
  //         <br />
  //         <br />
  //         Our retainer model ensures that you have dedicated specialists at your
  //         disposal, always ready to address challenges, optimize processes, and
  //         introduce innovations. This proactive approach ensures uninterrupted
  //         operations, minimized downtimes, and a technological edge over
  //         competitors. Partner with Orbit Pulse and integrate our Retainers
  //         Service into your strategy, ensuring your IT infrastructure remains
  //         robust, compliant, and future-ready.
  //       </>
  //     ),
  //     image: img8,
  //   },
  // ];

  // const [activeTab, setActiveTab] = useState(tabs[0]);

  // const features = [
  //   {
  //     number: 1,
  //     title: "Countries",
  //     description: "Over 10000+ resource in more than 190 Countries.",
  //   },
  //   {
  //     number: 2,
  //     title: "Staff",
  //     description: "Includes a well-trained staff that guarantees capacity",
  //   },
  //   {
  //     number: 3,
  //     title: "Terms",
  //     description: "Offers flexible engagement terms",
  //   },
  //   {
  //     number: 4,
  //     title: "Best Practice",
  //     description: "Provides access to the best practice methodologies",
  //   },
  //   {
  //     number: 5,
  //     title: "Contractors",
  //     description:
  //       "Combines stability and control of permanent staff through the flexibility of contractors",
  //   },
  //   {
  //     number: 6,
  //     title: "Partnerships",
  //     description: "Development of long-term partnership",
  //   },
  //   {
  //     number: 7,
  //     title: "Resources",
  //     description: "Access to high quality IT resources and skills",
  //   },
  // ];

  const services = [
    {
      icon: icon1,
      title: "On-Demand Dispatch",
    },
    {
      icon: icon2,
      title: "Cabling & Wireless Solutions",
    },
    {
      icon: icon3,
      title: "Recurring On-Site Services",
    },
    {
      icon: icon4,
      title: "Depot Services",
    },
    {
      icon: icon5,
      title: "On-Site Projects",
    },
  ];

  return (
    <article>
      {/* Banner section */}
      <ServiceBanner
        image={mainImage}
        title={<>Dynamic On-Site Support Services</>}
        description="Our certified IT experts are available to deliver on-site assistance for a wide range of technical challenges."
      />

      <section className="max-w-6xl mx-auto py-10 sm:py-16 px-5 sm:px-0">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-[600] text-[#FCB813] mb-4 sm:mb-6 font-kannada text-center uppercase">
          Quick Look
        </h2>
        <p className="text-[#5E5E5E] leading-8">
          We know how crucial uninterrupted technology is to your operations,
          and we’re committed to ensuring that your systems remain functional
          with minimal disruption. Our on-site support (ranging from L1 to L4)
          is backed by our in-house NOC and SOC teams, offering you
          comprehensive coverage across all levels of IT management.
          <br />
          <span className="font-bold text-[#1D51A2]">
            Hardware Diagnostics and Repairs:
          </span>{" "}
          We’ll quickly identify and resolve issues affecting your physical
          devices—desktops, laptops, servers, printers, and more—getting them
          back online fast.
          <br />
          <span className="font-bold text-[#1D51A2]">
            Software Troubleshooting:
          </span>{" "}
          Whether it’s a minor bug or a larger software conflict, we work to
          ensure your software environment operates smoothly.
          <br />
          <span className="font-bold text-[#1D51A2]">
            Network Management:
          </span>{" "}
          We handle network disruptions, ensuring stable connections by
          diagnosing issues related to routers, switches, and firewalls,
          allowing you to maintain seamless communication.
          <br />
          <span className="font-bold text-[#1D51A2]">
            Data Recovery and Backup:
          </span>{" "}
          Our team ensures that your vital data is safely backed up and can be
          recovered swiftly in case of an unexpected event, minimizing downtime.
          <br />
          <span className="font-bold text-[#1D51A2]">
            Security Fortification:
          </span>{" "}
          We safeguard your infrastructure with proactive security solutions,
          defending against external threats like malware and phishing, to
          protect your business data.
        </p>
      </section>

      <div className="px-5 sm:px-0 max-w-6xl mx-auto">
        <BorderLine />
      </div>

      {/* <section>
        <div className=" max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-[#1D51A2] my-6 sm:my-10">
            Managed Cybersecurity Services
          </h2>

          <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm">
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`py-2 px-2 rounded shadow font-semibold cursor-pointer ${
                  activeTab.title === tab.title
                    ? "bg-[#FCB8134D] text-[#5E5E5E]"
                    : "bg-[#3EA3DE4D] text-[#5E5E5E]"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.title}
              </button>
            ))}
          </div>

          <div className="px-5 sm:px-0">
            <h3 className="text-xl font-bold text-[#1D51A2] my-6 sm:my-8 text-center">
              {activeTab.title.toUpperCase()}
            </h3>
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 my-6">
              <p className="text-[#5E5E5E] mb-4 max-w-xl leading-7 sm:w-1/2">
                {activeTab.content}
              </p>
              <div className="sm:w-1/2">
                <img
                  src={activeTab.image}
                  alt={activeTab.title}
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <div className="max-w-6xl mx-auto py-6 sm:py-10 px-5 sm:px-0">
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
          {features.map(({ number, title, description }) => (
            <div key={number} className="space-y-1 flex gap-5 sm:gap-8">
              <h3 className="text-[#1D51A2] text-xl sm:text-3xl font-semibold">
                {number}
              </h3>
              <div>
                <p className="font-semibold text-gray-900 my-1 sm:my-2">
                  {title}
                </p>
                <p className="text-gray-600 text-sm">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div> */}

      <h2 className="text-2xl sm:text-3xl font-bold text-[#1D51A2] mb-4 text-center mt-12">
        Why Choose Our On-Site IT Support?
      </h2>
      <section className="flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-10 py-6 max-w-6xl mx-auto px-5 sm:px-0">
        {/* Left Content */}
        <div className="sm:max-w-1/2 text-start lg:text-left">
          <p className="text-[#5E5E5E] leading-7">
            <span className="text-[#1D51A2] font-bold">Certified Experts:</span> Our technicians are certified and highly trained,
            ensuring that you receive professional-grade assistance every time.
            <br />
            <br />
            <span className="text-[#1D51A2] font-bold">Minimal Disruption:</span> We focus on resolving issues quickly and
            efficiently so that your daily operations remain uninterrupted.
            <br />
            <br />
            <span className="text-[#1D51A2] font-bold">Proactive Solutions:</span> Beyond resolving issues, we aim to prevent
            future challenges by identifying potential weak points and offering
            proactive solutions. 
            <br />
            <br />
            <span className="text-[#1D51A2] font-bold">24/7 Availability:</span> Our on-site support is
            available around the clock, ensuring that no matter the time, we are
            there to provide timely assistance.
          </p>
        </div>
        {/* Right Content - Placeholder for Image */}
        <div className="sm:max-w-1/2">
          <img
            src={img1}
            alt="Benefits of Managed IT Services"
            className="w-full"
          />
        </div>
      </section>

      <div className="px-5 sm:px-0 max-w-6xl mx-auto">
        <BorderLine />
      </div>

      <h2 className="text-2xl sm:text-3xl font-bold text-[#1D51A2] mb-4 text-center mt-12">
      Our On-Site IT Support Process
      </h2>
      <section className="flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-10 py-6 max-w-6xl mx-auto px-5 sm:px-0">
        {/* Left Content */}
        <div className="sm:max-w-1/2 text-start lg:text-left">
          <p className="text-[#5E5E5E] leading-7">
            <span className="text-[#1D51A2] font-bold">Initial Assessment:</span> We begin with a thorough evaluation of your technical issues, whether they are hardware, software, or network-related.
            <br />
            <br />
            <span className="text-[#1D51A2] font-bold">Resolution and Support:</span> Our team provides hands-on support, resolving issues and addressing any concerns in real-time.
            <br />
            <br />
            <span className="text-[#1D51A2] font-bold">Ongoing Monitoring: </span> Post-resolution, we continue monitoring your systems to ensure everything is running smoothly and free of further disruptions.
          </p>
        </div>
        {/* Right Content - Placeholder for Image */}
        <div className="sm:max-w-1/2">
          <img
            src={img2}
            alt="Benefits of Managed IT Services"
            className="w-full"
          />
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-0 py-6 sm:py-10 pb-10">
        <div className="md:flex justify-between items-start mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1D51A2] mb-4 md:mb-0">
            Our Onsite IT Engineer
          </h2>
          <p className="md:w-1/2 text-gray-600 text-sm leading-7">
            Orbit Pulse assigns you an onsite engineer to help you in the case
            of an emergency.
            <br />
            Our onsite engineer is well-trained to offer you first-line support
            to help you resume your business operations expeditiously.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 px-5 sm:px-0 sm:mb-5">
          {services.map((service, index) => (
            <div
              key={index}
              className="group flex flex-col items-center sm:items-start rounded-lg px-6 sm:px-10 py-10 sm:py-12 shadow-md border border-gray-100 hover:bg-[#3EA3DE] transition duration-300"
            >
              <img
                src={service.icon}
                alt={service.title}
                className="w-16 h-16 "
              />
              <p className="mt-6 sm:mt-8 text-sm font-medium text-gray-800 group-hover:text-white">
                {service.title}
              </p>
            </div>
          ))}
        </div>

        {/* <div className="flex flex-col sm:flex-row justify-between gap-6 sm:gap-20 mt-12 sm:mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:w-60 text-[#1D51A2]">
            Our Strategy
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="bg-[#3EA3DE] p-1 rounded-full text-white text-xs shrink-0">
                <FaCheck />
              </span>
              <p className="ml-3 text-gray-700 text-sm leading-6">
                We analyze usage by assessing the number of requests, problems,
                and incidents to understand how your business operates.
              </p>
            </li>
            <li className="flex items-start">
              <span className="bg-[#3EA3DE] p-1 rounded-full text-white text-xs shrink-0">
                <FaCheck />
              </span>
              <p className="ml-3 text-gray-700 text-sm leading-6">
                We evaluate your objectives to ensure that they can accommodate
                any fluctuations.
              </p>
            </li>
          </ul>
        </div> */}
      </div>
    </article>
  );
};

export default FlexibleOnSite;
