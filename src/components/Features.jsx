import React from "react";
import bookingIcon from "../assets/Features-icons/appointment-02-stroke-rounded 1.svg";
import trackingIcon from "../assets/Features-icons/chart-average-stroke-rounded 1.svg";
import analyticsIcon from "../assets/Features-icons/gps-01-solid-standard 1.svg";
import shieldIcon from "../assets/Features-icons/shield-01-stroke-standard 1.svg";

const featuresData = [
  {
    id: 1,
    icon: bookingIcon,
    title: "Easy Service Booking",
    description:
      "Streamlined booking process for clients with service catalogs and availability.",
  },
  {
    id: 2,
    icon: trackingIcon,
    title: "Real-Time Tracking",
    description:
      "Monitor job progress, employee hours, and project timelines with live updates.",
  },
  {
    id: 3,
    icon: analyticsIcon,
    title: "Performance Analytics",
    description:
      "Comprehensive reporting and insights to improve business operations and efficiency.",
  },
  {
    id: 4,
    icon: shieldIcon,
    title: "Secure & Reliable",
    description:
      "Enterprise-grade security with 99.9% uptime guarantee and data protection.",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {featuresData.map((feature, index) => (
            <div
              key={feature.id}
              className={`flex flex-col items-start p-8 border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300
                ${index !== featuresData.length - 1 ? "border-r" : ""}`}
            >
              <div className="p-2 bg-[#ECFCEB] rounded-lg">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-6 h-6"
                />
              </div>
              <h3 className="text-lg font-semibold text-[#202922] mt-4">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
