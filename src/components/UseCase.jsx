import React from "react"; 
import { motion } from "framer-motion"; //eslint-disable-line
import frame1 from "../assets/use-case-images/Frame-1.svg";
import userImage from "../assets/use-case-images/userImage.png";
import ownerImage from "../assets/use-case-images/ownerImage.png";
import employeeImage from "../assets/use-case-images/employeeImage.png";
import userSVG from "../assets/use-case-images/userSVG.svg";
import ownerSVG from "../assets/use-case-images/ownerSVG.svg";
import employeeSVG from "../assets/use-case-images/employeeSVG.svg";

const useCases = [
  {
    tag: "Users",
    title: "Book services, track progress and stay updated",
    description:
      "Easily schedule appointments, get real-time updates, and enjoy a smooth, transparent service experience.",
    features: [
      "Book services in seconds",
      "Track real-time job updates",
      "Schedule appointments at your convenience",
    ],
    image: userImage,
  },
  {
    tag: "Business Owners",
    title: "Assign jobs, monitor performance, and streamline operations.",
    description:
      "Gain full control of your workforce with real-time tracking, smart scheduling, and service management in one app.",
    features: [
      "Assign jobs to the right team member",
      "Monitor performance in real time",
      "Manage clients and services seamlessly",
    ],
    image: ownerImage,
  },
  {
    tag: "Employees",
    title: "See tasks, track time, and navigate routes with ease.",
    description:
      "Everything you need to manage your workday from job assignments to optimized routes and time logging.",
    features: [
      "Assign jobs to the right team member",
      "Monitor performance in real time",
      "Manage clients and services seamlessly",
    ],
    image: employeeImage,
  },
];

// Animation variants
const textVariants = (index) => ({
  hidden: { x: index % 2 === 0 ? -100 : 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
});

const imageVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const featureVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: (i) => ({
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, delay: i * 0.2, ease: "easeOut" },
  }),
};

const UseCase = () => {
  return (
    <section className="pt-28 px-4 sm:px-6 lg:px-0">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="relative">
          <div className="text-center relative">
            <h1 className="text-4xl sm:text-5xl font-bold">
              Build for Everyone
            </h1>
            <div className="absolute right-4/12 -bottom-3 -z-10">
              <img src={frame1} alt="" />
            </div>
          </div>
          <div className="text-center mt-6">
            <p className="text-gray-600">
              Whether you're booking services, managing tasks, or running
              operations, we've <br /> designed the perfect experience for you.
            </p>
          </div>
          <div className="absolute left-52 hidden lg:block">
            <img src={userSVG} alt="" />
          </div>
          <div className="absolute -right-10 hidden lg:block">
            <img src={ownerSVG} alt="" />
          </div>
          <div className="absolute left-96 z-10 top-40 hidden lg:block">
            <img src={employeeSVG} alt="" />
          </div>
        </div>

        {/* Use Cases */}
        <div className="space-y-16 py-24">
          {useCases.map((useCase, index) => (
            <div
              key={useCase.tag}
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Text Content */}
              <motion.div
                className="md:w-1/2 space-y-4 relative"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={textVariants(index)}
              >
                {/* Glow */}
                <div
                  className={`w-[190px] h-[295px] absolute bg-[#3BA334]/30 rounded-full blur-[100px] transform -z-10 hidden xl:block ${
                    index % 2 === 0
                      ? "-left-[400px] top-0 rotate-[55.51deg]"
                      : "-right-[400px] top-0 -rotate-[55.51deg]"
                  }`}
                />
                <span className="inline-block border-2 border-[#3BA334] text-[#3BA334] text-sm font-medium px-4 py-1 rounded-full">
                  {useCase.tag}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                  {useCase.title}
                </h2>
                <p className="text-gray-600 text-base sm:text-lg">
                  {useCase.description}
                </p>

                {/* Features with vertical line */}
                <ul className="mt-8 space-y-3">
                  {useCase.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      className="relative"
                      custom={i}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.3 }}
                      variants={featureVariants}
                    >
                      <div className="flex">
                        <span className="w-1 bg-[#3BA334]"></span>
                        <span className="block pl-4 sm:pl-6 text-gray-700">
                          {feature}
                        </span>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Image Content */}
              <motion.div
                className="md:w-1/2 flex justify-center md:justify-end relative"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={imageVariants}
              >
                <img
                  src={useCase.image}
                  alt={`${useCase.tag} view`}
                  className="rounded-lg max-w-full h-auto"
                />
                <div className="top-10 right-[200px] w-[190px] h-[295px] absolute bg-[#3BA334]/50 rounded-full blur-[200px] transform -rotate-[55.51deg] -z-10 hidden xl:block" />
                <div
                  className="w-[700px] h-[250px] absolute bottom-0"
                  style={{
                    background:
                      "linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)",
                  }}
                />
                <div
                  className="w-[700px] h-[140px] absolute -bottom-32 rotate-180"
                  style={{
                    background:
                      "linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)",
                  }}
                />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCase;
