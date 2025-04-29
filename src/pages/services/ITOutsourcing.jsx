import React, { useEffect, useRef, useState } from "react";
import mainImage from "../../assets/servicesImages/IT-outsourcing/mainImage.png";
import clockImage from "../../assets/servicesImages/IT-outsourcing/clockImage.png";
import icon1 from "../../assets/servicesImages/IT-outsourcing/icon1.png";
import icon2 from "../../assets/servicesImages/IT-outsourcing/icon2.png";
import icon3 from "../../assets/servicesImages/IT-outsourcing/icon3.png";
import icon4 from "../../assets/servicesImages/IT-outsourcing/icon4.png";
import icon5 from "../../assets/servicesImages/IT-outsourcing/icon5.png";
import icon6 from "../../assets/servicesImages/IT-outsourcing/icon6.png";
import icon7 from "../../assets/servicesImages/IT-outsourcing/icon7.png";
import icon8 from "../../assets/servicesImages/IT-outsourcing/icon8.png";
import icon9 from "../../assets/servicesImages/IT-outsourcing/icon9.png";
import icon10 from "../../assets/servicesImages/IT-outsourcing/icon10.png";
import talentPool from "../../assets/servicesImages/IT-outsourcing/talentPool.png";
import Lottie from "lottie-react";
import animation from "../../assets/Animation/IT-Outsourcing/Animation.json";
import ServiceBanner from "../../components/ServicesBanner";
import BorderLine from "../../components/BorderLine";

const ITOutsourcing = () => {
  const clockImageRef = useRef(null);
  const [clockInView, setClockInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setClockInView(entry.isIntersecting);
      },
      { threshold: 0.4 }
    );

    const current = clockImageRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  const services = [
    {
      img: icon1,
      title: "Scalable Infrastructure Services",
    },
    {
      img: icon2,
      title: "End-to-End Software Solutions",
    },
    {
      img: icon3,
      title: "Dedicated Technical Assistance",
    },
    {
      img: icon4,
      title: "Reliable Database Architecture & Management",
    },
    {
      img: icon5,
      title: "Web & App Lifecycle Support",
    },
    {
      img: icon6,
      title: "Smart Communication Systems",
    },
  ];

  const outsourcingModels = [
    {
      title: "Staff Augmentation",
      description:
        "It is a strategy for filling skill gaps that allows businesses to hire top-level specialists for short- or long-term projects while also being able to avoid the costs of hiring new full-time workers.",
      image: icon7,
    },
    {
      title: "Project-Based Outsourcing",
      description:
        "Clients refer to project outsourcing meaning that they would like to partner with vendors that have exclusive expertise that is lacking in-house and delegate a part of functions to them.",
      image: icon8,
    },
    {
      title: "Staff Augmentation",
      description:
        "Clients who are interested in long term co-operation because their projects require a significant volume of work. Within the dedicated team model, the vendor provides you with full time staff required to complete your project.",
      image: icon9,
    },
    {
      title: "Offshore Development Center (ODC)",
      description:
        "It is a strategy for filling skill gaps that allows businesses to hire top-level specialists for short- or long-term projects while also being able to avoid the costs of hiring new full-time workers.",
      image: icon10,
    },
  ];

  const features = [
    "Flexibility",
    "Predictable costs",
    "Predictable timing",
    "Potential risks included in price",
    "Long-term cooperation",
    "Personal interviews with developers",
    "Direct communication with developers",
    "High developer commitment",
  ];

  const contractTypes = [
    {
      name: "Time and Materials",
      values: [true, false, false, true, false, false, false, true],
    },
    {
      name: "Fixed Price",
      values: [false, true, true, true, false, false, false, true],
    },
    {
      name: "Rate Card",
      values: [true, true, false, false, true, true, true, true],
    },
    {
      name: "Cost+",
      values: [true, true, true, false, true, true, true, true],
    },
  ];
  return (
    <article>
      {/* Banner section */}
      <ServiceBanner
        image={mainImage}
        title="IT Outsourcing"
        description="Offering specialized experts and dedicated support teams to efficiently manage and enhance your day-to-day business operations."
      />

      <section className="max-w-5xl mx-auto px-6 lg:ps-20 pt-10 sm:pt-14">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-[600] text-[#FCB813] font-kannada text-center mb-6 sm:mb-10">
          24/7 IT Outsourcing
        </h1>
        <p className="text-[#5E5E5E]">
          No matter if it’s nearshoring, offshoring, or onshoring, all
          outsourcing models share a common goal: bringing in a third-party
          service provider to manage specific business functions.
          <br /> <br />
          At Orbit Pulse, we offer 24/7 IT outsourcing services to ensure your
          business operates smoothly at all times.
          <br /> <br />
          With the time zone differences between your in-house team and our
          outsourcing partners, your operations can continue seamlessly around
          the clock.
        </p>
        <img
          ref={clockImageRef}
          src={clockImage}
          alt="Clock"
          className={`w-[45rem] mx-auto pt-5 transition-all duration-700 ease-out 
    ${
      clockInView
        ? "sm:opacity-100 sm:translate-x-0"
        : "sm:opacity-0 sm:translate-x-80"
    }`}
        />
      </section>

      <div className="mt-8 px-5 max-w-4xl mx-auto">
        <BorderLine />
      </div>

      <section className="py-12 pt-5 px-4 text-center">
        <h2 className="text-xl md:text-3xl font-semibold text-[#047BAF] mb-5">
          Our IT Outsourcing Services
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
          Outsourcing your IT operations can bring immense value to your
          business — from cost savings to gaining access to a broader range of
          technical expertise. It’s a smart way to enhance service quality while
          leveraging skilled professionals that may not be available within your
          internal team.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const isHighlighted = index % 2 === 0; // index 0, 2, 4 → cards 1, 3, 5

            return (
              <div
                key={index}
                className={`${
                  isHighlighted ? "bg-[#3EA3DE4D]" : "bg-[#F4F4F4]"
                } p-6 rounded-tl-4xl rounded-br-4xl hover:shadow-lg hover:scale-105 transition duration-300 flex flex-col items-center justify-center sm:justify-start h-full`}
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="h-24 w-24 object-contain"
                />
                <p className="mt-4 text-gray-800 font-medium text-center">
                  {service.title}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* border line */}
      <div className="max-w-5xl mx-auto mt-14 hidden sm:block">
        <hr className="  border border-gray-300 " />
      </div>

      <div className="sm:hidden px-5">
        <BorderLine />
      </div>

      <section className="max-w-7xl mx-auto px-4 py-12 sm:pb-20">
        <h2 className="text-center text-2xl sm:text-3xl font-semibold text-[#047BAF] mb-10">
          Access to Our Global Network of Talent
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          {/* Left Text Content */}
          <div className="text-gray-700 text-sm leading-7">
            <p>
              Our global talent pool gives you access to experts that may be
              hard to find or unavailable locally, including bilingual
              specialists. Partnering with Orbit Pulse saves your time by
              eliminating the need for lengthy recruitment, interviews,
              selection, and training of new internal staff.
            </p>
          </div>

          {/* Center Image */}
          <div className="flex justify-center">
            {/* <img
              src={talentPool}
              alt="Global Talent Pool Illustration"
              className="w-[250px] sm:w-[300px]"
            /> */}
            <div className="-mb-16 sm:-mb-0 -mt-10 sm:-mt-0 ">
              <Lottie
                animationData={animation}
                loop={true}
                autoplay={true}
                className="w-full sm:w-72"
              />
            </div>
          </div>

          {/* Right Info Card */}
          <div className="bg-[#3EA3DE] text-white rounded-tl-3xl rounded-br-3xl px-6 py-6 text-sm leading-7">
            <h3 className="font-semibold mb-4">What We Offer</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Reduced Expenses</li>
              <li>Access to Global Talent Pool</li>
              <li>Significant Time Savings</li>
              <li>Ability to Upscale Fast</li>
              <li>Uninterrupted Workflow</li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
};

export default ITOutsourcing;
