import React, { useEffect, useRef, useState } from "react";
import ServiceBanner from "../../components/ServicesBanner";
import mainImage from "../../assets/servicesImages/IT-assets/mainImage.png";
import assetsImage from "../../assets/servicesImages/IT-assets/assetsImage.png";
import icon1 from "../../assets/servicesImages/IT-assets/icon1.png";
import icon2 from "../../assets/servicesImages/IT-assets/icon2.png";
import icon3 from "../../assets/servicesImages/IT-assets/icon3.png";
import icon4 from "../../assets/servicesImages/IT-assets/icon4.png";
import icon5 from "../../assets/servicesImages/IT-assets/icon5.png";
import BorderLine from "../../components/BorderLine";

const ITAssets = () => {
  const imageRef = useRef(null);
  const [imageInView, setImageInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setImageInView(entry.isIntersecting);
      },
      {
        threshold: 0.4,
      }
    );

    const currentRef = imageRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  const itadServices = [
    {
      title: "Data Destruction",
      description: [
        "with Security Expert-level data wiping Certified hard drive shredding Ensuring data privacy and regulatory compliance",
      ],
      bgColor: "bg-[#3EA3DE26]",
      image: icon1,
    },
    {
      title: "Eco-Friendly Recycling Solutions",
      description: [
        "Expert data wiping services",
        "Certified hard drive destruction",
        "Ensuring privacy protection and regulatory compliance",
      ],
      bgColor: "bg-[#FCB81326]",
      image: icon2,
    },
    {
      title: "Asset Value Recovery",
      description: [
        "Effective remarketing techniques",
        "Optimizing returns on retired equipment",
        "Clear and competitive pricing",
      ],
      bgColor: "bg-[#3EA3DE26]",
      image: icon3,
    },
    {
      title: "IT Equipment Transportation & Handling",
      description: [
        "Safe collection and delivery",
        "Complete tracking system",
        "Flexible scheduling for convenience",
      ],
      bgColor: "bg-[#3EA3DE26]",
      image: icon4,
    },
    {
      title: "Asset Disposal Reports & Certification",
      description: [
        "Comprehensive asset reports",
        "Certificate of Destruction/Recycling ",
        "Adherence to international compliance standards.",
      ],
      bgColor: "bg-[#3EA3DE26]",
      image: icon5,
    },
  ];

  return (
    <article>
      {/* Banner section */}
      <ServiceBanner
        image={mainImage}
        title={
          <>
            Complete IT Asset Disposition 
            <br />
            (ITAD) Solutions. Secure. Sustainable. Streamlined.
          </>
        }
        description="A sequence of IT devices like computers, servers, and mobile phones evolving into a green, eco-conscious symbol, representing sustainable recycling practices."
      />

      <section className="max-w-5xl mx-auto px-6 lg:ps-20 pt-10 sm:pt-14">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-[600] text-[#FCB813] font-kannada text-center mb-6 sm:mb-10">
        Your Hassle-Free Path to IT Asset Retirement
        </h1>
        <p className="text-[#5E5E5E] text-center max-w-3xl mx-auto leading-7">
          We provide a comprehensive, hassle-free solution that guarantees your
          IT assets are handled securely, responsibly, and sustainably.
        </p>
        <img
          ref={imageRef}
          src={assetsImage}
          alt="Assets"
          className={`w-[45rem] mx-auto pt-5 transition-all duration-700 ease-out 
    ${
      imageInView
        ? "sm:opacity-100 sm:translate-x-0"
        : "sm:opacity-0 sm:translate-x-80"
    }
  `}
        />
      </section>

      <div className="max-w-7xl mx-auto px-6 pt-5 sm:pt-8">
        <BorderLine />
      </div>

      <section className="flex flex-col items-center my-16 max-w-7xl mx-auto">
        <h2 className="text-xl sm:text-2xl font-semibold text-[#1D51A2] sm:mb-10 uppercase tracking-widest">
        Reliable ITAD Solutions for Your Business Needs
        </h2>

        {/* First Row - 3 Cards */}
        <div className="flex flex-wrap justify-center gap-8 pt-10 px-4">
          {itadServices.slice(0, 3).map((service, index) => (
            <div
              key={index}
              className={`${service.bgColor} rounded-tl-3xl rounded-br-3xl py-10 w-full sm:w-96 flex flex-col items-center 
        transition duration-300 transform hover:scale-105 hover:shadow-xl`}
            >
              <img
                src={service.image}
                alt="Icon"
                className="w-32 mb-4 bg-[#D9D9D9] rounded-full p-4"
              />
              <div className="px-16 sm:px-20">
                <h3 className="font-semibold text-[#5D5A5A] my-5">
                  {service.title}
                </h3>
                <ul className="text-sm text-[#5D5A5A] list-disc space-y-1 ps-8 leading-6">
                  {service.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row - 2 Cards */}
        <div className="flex justify-center gap-8 mt-10 flex-wrap px-4">
          {itadServices.slice(3).map((service, index) => (
            <div
              key={index + 3}
              className={`${service.bgColor} rounded-tl-3xl rounded-br-3xl py-10 w-full sm:w-96 flex flex-col items-center 
        transition duration-300 transform hover:scale-105 hover:shadow-xl`}
            >
              <img
                src={service.image}
                alt="Icon"
                className="w-32 mb-4 bg-[#D9D9D9] rounded-full p-4"
              />
              <div className="px-16 sm:px-20">
                <h3 className="font-semibold text-[#5D5A5A] my-5">
                  {service.title}
                </h3>
                <ul className="text-sm text-[#5D5A5A] list-disc space-y-1 ps-8 leading-6">
                  {service.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
};

export default ITAssets;
