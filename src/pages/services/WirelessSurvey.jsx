import React from "react";
import mainImage from "../../assets/servicesImages/Wireless-survey/mainImage.png";
import WirelessImage from "../../assets/servicesImages/Wireless-survey/wirelessSurveyImage.png";
import WifiConnect from "../../assets/servicesImages/Wireless-survey/wifiConnectImage.png";
import WirelessConnect from "../../assets/servicesImages/Wireless-survey/wirelessConnectImage.png";
import authorizedImage from "../../assets/servicesImages/Wireless-survey/authorizedImage.png";
import predictiveImage from "../../assets/servicesImages/Wireless-survey/predictiveImage.png";
import activeImage from "../../assets/servicesImages/Wireless-survey/activeImage.png";
import passiveImage from "../../assets/servicesImages/Wireless-survey/passiveImage.png";
import bgGroup from "../../assets/servicesImages/IT-infrastructure-services/bgGroup.png";
import Lottie from "lottie-react";
import animation from "../../assets/Animation/Wireless-Survey/Animation.json";
import BorderLine from "../../components/BorderLine";
import ServiceBanner from "../../components/ServicesBanner";

const WirelessSurvey = () => {
  return (
    <article>
      {/* Banner section */}
      <ServiceBanner
        image={mainImage}
        title="Wireless Survey Solutions"
        description=""
      />

      {/* SERVICES THAT MEET ALL YOUR NEEDS */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-[600] text-[#FCB813] mb-4 font-kannada text-center mt-12">
        Optimizing Wireless Connectivity for Your Business
      </h2>
      <section className="flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-0 py-6 max-w-5xl mx-auto px-5 sm:px-0">
        {/* Left Content */}
        <div className="max-w-lg text-start lg:text-left">
          <p className="text-[#5E5E5E] leading-7">
            At Orbit Pulse, we deliver precision-driven wireless site surveys
            using Ekahau’s state-of-the-art technology. Our mission is to create
            wireless networks that are not only reliable but tailored to support
            your business operations without interruption.
            <br />
            <br />
            We don’t just assess signal strength—we dive deep into your wireless
            environment to detect hidden interference, pinpoint dead zones, and
            ensure every access point is placed for maximum performance.
            <br />
            <br />
            A well-executed wireless survey lays the foundation for a seamless
            user experience, better connectivity, and fewer disruptions. With
            improved coverage and minimized downtime, your teams can stay
            productive and focused.
            <br />
            <br />
            Our approach gives you a complete picture of your network’s
            performance and potential, enabling smarter infrastructure decisions
            and long-term resilience.
            <br />
            <br />
            Partner with Orbit Pulse and experience the difference of a wireless
            network that’s optimized from the ground up—designed with insight,
            built for performance.
          </p>
        </div>
        {/* Right Content - Placeholder for Image */}
        <div className="">
          <img
            src={WirelessImage}
            alt="Benefits of Managed IT Services"
            className="w-full max-w-xl"
          />
        </div>
      </section>

      <div className="px-5 max-w-4xl mx-auto">
        <BorderLine />
      </div>

      <section className="flex flex-col items-center justify-center mt-10 mx-5">
        <h2 className="text-xl sm:text-2xl font-semibold text-[#1D51A2] text-center sm:text-start">
          Achieve Optimal Wi-Fi Performance with Ekahau Connect
        </h2>
        {/* <p className="text-[#5E5E5E] text-base mt-1 font-bold">Start Anwhere</p> */}

        <div className="relative mt-16 w-full max-w-5xl">
          <img src={bgGroup} alt="" />
          <div className="absolute -top-8 left-0 w-full h-full flex flex-col sm:flex-row items-center justify-center">
            <img src={WifiConnect} alt="" className="w-[50rem]" />
          </div>
        </div>
      </section>

      <div className="sm:hidden mt-6 sm:mt-0 px-5">
        <BorderLine />
      </div>

      {/* border line */}
      <div className="max-w-5xl mx-auto mt-14 hidden sm:block">
        <hr className="  border border-gray-300 " />
      </div>

      <section className="flex flex-col items-center justify-center mt-10  max-w-5xl mx-auto px-5 sm:px-0">
        <h2 className="text-xl sm:text-2xl font-semibold text-[#1D51A2] text-center sm:text-start">
          Ekahau-Powered Wireless Site Survey Services
        </h2>
        <p className="text-[#5E5E5E] text-base font-bold mt-5 leading-7">
          With deep expertise in wireless technologies and Ekahau-driven
          precision, our certified engineers design and deploy robust wireless
          networks tailored to meet the demands of various industries.
        </p>

        <div className="  w-full max-w-4xl">
          <img src={WirelessConnect} alt="" />
        </div>
      </section>

      <div className="sm:hidden mt-6 sm:mt-0 px-5">
        <BorderLine />
      </div>

      <section className="flex flex-col items-center justify-center mt-10 mx-5">
        <h2 className="text-xl sm:text-2xl font-semibold text-[#1D51A2] text-center">
          Our Range of Site Survey Services :
        </h2>

        <div className="mt-6 max-w-5xl w-full grid md:grid-cols-[2fr_25rem] items-center gap-6">
          {/* Active Surveys */}
          <div>
            <h3 className="text-[#1D51A2] font-bold text-lg">Active Surveys</h3>
            <p className="text-[#5E5E5E] text-sm mt-1 leading-7">
              These surveys are performed while the network is fully
              operational, focusing on specific signals or sets of signals.
              <br />
              They gather key metrics like signal strength, throughput,
              round-trip time, packet loss, and retransmission rates throughout
              the coverage area.
            </p>
          </div>
          <img
            src={activeImage}
            alt="Predictive Survey"
            className="w-full h-44 object-cover"
          />

          {/* Passive Surveys */}
          <div>
            <h3 className="text-[#1D51A2] font-bold text-lg">
              Passive Surveys
            </h3>
            <p className="text-[#5E5E5E] text-sm mt-1 leading-7">
              Conducted after the site is built, passive surveys capture data
              from all signals present in the environment.
              <br />
              The aim is to evaluate both the installed network signals and any
              interference from neighboring networks or devices that could
              affect wireless performance.
            </p>
          </div>
          <img
            src={passiveImage}
            alt="Predictive Survey"
            className="w-full h-44 object-cover"
          />

          {/* Predictive Surveys */}
          <div>
            <h3 className="text-[#1D51A2] font-bold text-lg">
              Predictive Surveys
            </h3>
            <p className="text-[#5E5E5E] text-sm mt-1 leading-7">
              Carried out before moving into a new location, predictive surveys
              are designed to determine the best placement for access points
              (APs) to ensure maximum coverage and performance across the area.
            </p>
          </div>
          <img
            src={predictiveImage}
            alt="Predictive Survey"
            className="w-full h-44 object-cover"
          />
        </div>
      </section>

      <div className="sm:hidden mt-10 px-5">
        <BorderLine />
      </div>

      <h3 className="text-[#1D51A2] font-bold text-lg text-center mt-10">
        What We Offer Through Our Wireless Site Survey Expertise
      </h3>

      <section className="flex flex-col items-center justify-center mt-6 mb-10 sm:mt-10 sm:mb-14 mx-5">
        <div className="max-w-5xl w-full -mb-10">
          {/* First Row - Three Equal Text Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-[#1D51A2] font-bold text-lg">
                Discovery & Requirements Analysis
              </h3>
              <p className="text-[#5E5E5E] text-sm leading-7">
                We begin by aligning with your business goals—gathering insights
                on device density, user expectations, and physical environment
                to lay the groundwork for a tailored wireless solution.
              </p>
            </div>
            <div>
              <h3 className="text-[#1D51A2] font-bold text-lg">
                Real-Time Site Assessment
              </h3>
              <p className="text-[#5E5E5E] text-sm leading-7">
                Using industry-leading Ekahau tools, our engineers perform a
                meticulous wireless assessment to uncover signal blind spots,
                interference sources, and performance bottlenecks in your
                environment.
              </p>
            </div>
            <div>
              <h3 className="text-[#1D51A2] font-bold text-lg">
                Intelligent Network Design
              </h3>
              <p className="text-[#5E5E5E] text-sm leading-7">
                Based on survey data, we craft an optimized network layout,
                determining strategic access point locations to maximize
                coverage, minimize overlap, and ensure a seamless user
                experience.
              </p>
            </div>
          </div>

          {/* Second & Third Row - 2 Column Text + Image (2-row span) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
            {/* Left Side - Text spans 2 columns */}
            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h3 className="text-[#1D51A2] font-bold text-lg">
                  Comprehensive Survey Reports
                </h3>
                <p className="text-[#5E5E5E] text-sm leading-7">
                  You’ll receive an in-depth visual report, including heatmaps,
                  coverage analysis, and actionable recommendations to fine-tune
                  your wireless infrastructure.
                </p>
              </div>
              <div>
                <h3 className="text-[#1D51A2] font-bold text-lg">
                  Ongoing Optimization & Support
                </h3>
                <p className="text-[#5E5E5E] text-sm leading-7">
                  Our job doesn’t end after the report. We offer continuous
                  support to ensure your network evolves with your
                  business—maintaining strong performance and adaptability over
                  time.
                </p>
              </div>

              {/* Full-width text below */}
              {/* <div className="sm:col-span-2">
                <h3 className="text-[#1D51A2] font-bold text-lg">
                  Global Authorized Ekahau Partners and Resellers
                </h3>
                <p className="text-[#5E5E5E] text-sm  mt-2 leading-7">
                  As authorized Ekahau partners and resellers worldwide, we
                  offer the highly popular Ekahau Connect package, the most
                  comprehensive Wi-Fi measurement solution available today.
                </p>
                <h1 className="mt-2 text-[#1D51A2] font-bold">
                  Our Offerings include:
                </h1>
                <ul className="list-disc ps-5 sm:ps-10 text-[#5E5E5E] text-sm  mt-1 leading-7">
                  <li>
                    <span className="font-bold text-gray-800">Ekahau Pro:</span>{" "}
                    A powerful software for planning, radio coverage analysis,
                    and reporting.
                  </li>
                  <li>
                    <span className="font-bold text-gray-800">
                      Ekahau Sidekick:
                    </span>{" "}
                    A hardware device designed for accurate measurements,
                    including a built-in spectrum analyzer.
                  </li>
                  <li>
                    <span className="font-bold text-gray-800">
                      Ekahau Subscription:
                    </span>{" "}
                    A maintenance contract that provides all software updates
                    and upgrades to ensure your system remains up to date.
                  </li>
                </ul>
              </div> */}
            </div>

            {/* Right Side - Image spanning 2 rows */}
            <div className="row-span-2 flex justify-center -mt-8">
              <Lottie
                animationData={animation}
                loop={true}
                autoplay={true}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default WirelessSurvey;
