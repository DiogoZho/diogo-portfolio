"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Skilled web developer with expertise in creating responsive, user-friendly websites and web applications. Proficient in HTML, CSS, JavaScript, and modern frameworks. Open to opportunities—reach out to collaborate!",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "Passionate UI/UX designer focused on crafting intuitive and engaging user experiences. Skilled in wireframing, prototyping, and user research. Let’s connect to create impactful designs!",
    href: "",
  },
  {
    num: "03",
    title: "Logo Design",
    description:
      "Crafting unique and memorable logos that capture your brand’s essence. Expert in creating designs that stand the test of time. Let’s collaborate and create something unforgettable!.",
    href: "",
  },
  {
    num: "04",
    title: "c++",
    description:
      "Skilled C++ developer with a focus on building efficient, high-performance applications. Experienced in system-level programming, algorithms, and optimization. Let’s work together to bring your complex projects to life with C++!",
    href: "",
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
