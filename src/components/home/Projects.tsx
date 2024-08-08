"use client";
import Image from "next/image";
import useImages from "../../hooks/useImages";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useInView } from "react-intersection-observer";

export default function Projects() {
  const { ProjectOne, ProjectTwo, ProjectThree, ProjectFour, ProjectFive } =
    useImages();
  const [imageLoaded, setImageLoaded] = useState(false);

  type ImagePosition = "left" | "right";

  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const observers = useRef<any>([]);

  const [Projects, setProjects] = useState<
    Array<{
      id: number;
      title: string;
      description: string;
      image: string;
      imagePosition: ImagePosition;
    }>
  >([
    {
      id: 1,
      title: "TELEIOS GLOBAL",
      description:
        "Since its inception in Italy, Teleios has revolutionized the racing simulator industry. Merging professional expertise with technical know-how, the brand introduced a racing simulator unlike any other, creating a truly unique machine for both motorsport professionals and enthusiasts alike.",
      image: ProjectOne,
      imagePosition: "right",
    },
    {
      id: 2,
      title: "PARK UP, LESS SPACE MORE CITY",
      description:
        "The World's most compact and powerful rotary robotic parking ,blending urban aesthetic sith German-Korean engineering , all in the space of tow cars",
      image: ProjectTwo,
      imagePosition: "left",
    },
    {
      id: 3,
      title: "Hafiz Mustafa , THE MOST DELECIOUS DESSERTS ON EARTH ",
      description:
        "At Hafız Mustafa Confectionaries, we take great pride in our more than one-and-a-half-century history and our signature desserts’ cultural and historical significance.",
      image: ProjectFour,
      imagePosition: "right",
    },
    {
      id: 4,
      title: "BE VIP, FROM BOOKING TO DRIVING",
      description:
        " BE VIP is the Best luxury car rental Dubai starting from 1000 AED per day. Choose from our extensive fleet of the latest sports and luxury cars, including the iconic Ferrari, powerful Lamborghini, elegant Bentley, Mercedes, Porsche, Rolls Royce, and BMW. Experience the ultimate driving experience in Dubai with our 24/7 delivery and unbeatable prices. Book Luxury Cars for rent in Dubai.",
      image: ProjectFive,
      imagePosition: "left",
    },
    {
      id: 5,
      title: "BEYOND , FROM SOURCE TO INDUSTRIES ",
      description:
        "We deliver high-quality industrial minerals and construction materials across continents. Our network is for efficient logistics and distribution, enabling local markets to benefit from global resources ",
      image: ProjectThree,
      imagePosition: "right",
    },
  ]);

  const { ref: inViewRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  
// ... existing code ...
 // ... existing code ...

 useEffect(() => {
  refs.current.forEach((ref, index) => {
    if (ref) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            gsap.to(`.image-animation-${index}`, {
              clipPath: "inset(0 0% 0 0)",
              duration: 0.9,
              ease: "power2.out",
              onComplete: () => {
                gsap.to(`.text-animation-${index}`, {
                  opacity: 1,
                  duration: 0.3,
                  delay: 0.1,
                });
              },
            });
            gsap.to(`.number-animation-${index}`, {
              opacity: 1,
              duration: 0.8,
              delay: 1.2,
            });

            // Disconnect observer after first intersection
            observer.disconnect();
          } else {
            gsap.to(`.image-animation-${index}`, {
              clipPath: "inset(0 100% 0 0)",
              duration: 0,
            });
            gsap.to(`.text-animation-${index}`, {
              opacity: 0,
              duration: 0,
            });
            gsap.to(`.number-animation-${index}`, {
              opacity: 0,
              duration: 0.4,
            });
          }
        },
        { threshold: 0.1, rootMargin: "-100px" } // Adjust this threshold as needed
      );
      observer.observe(ref);
      observers.current.push(observer);
    }
  });

  const currentObservers = observers.current; // Copy observers.current to a variable

  return () => {
    currentObservers.forEach((observer: any) => observer.disconnect());
  };
}, []);

// ... existing code ...
// ... existing code ...
  return (
    <>
      <section className="py-20 bg-secondary" id="the-schemes-at-hand">
        <div className="container">
          <span className="text-primary text-sm">The Schemes at Hand </span>
          <h2 className="text-white text-4xl font-bold mt-5">
            Projects have dummy names, so please provide the real one
          </h2>

          {Projects.map((project, index) => (
  <div
    key={index}
    className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 md:gap-10 gap-3 md:mt-20 mt-10"
    ref={(el: any) => (refs.current[index] = el)}
  >
    {project.imagePosition === "left" ? (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2, delay: 0.8 }}
        className="flex items-center"
      >
          <h3 className={`text-[250px] md:block hidden outlined-number text-right number-animation-${index}`}>
          
  
          0{project.id}
        </ h3>
        <motion.div
          initial={{ opacity: 0 }} // Initially hidden
          animate={{ opacity: 1 }} // Fade in
          transition={{ duration: 0.4, delay: 1 }} // Delay to match image animation
        >
          <div>{/* Additional content can go here */}</div>
        </motion.div>
        <div>{/* Additional content can go here */}</div>
      </motion.div>
    ) : null}

    <div>
      <div className="relative  ">
        <div className=" inset-0 bg-black opacity-70 rounded-md">
          <Image
            onLoad={() => setImageLoaded(true)}
            src={project.image}
            alt={project.title}
            className={`lg:object-cover object-contain rounded-md w-full h-[450px] image-animation-${index} hover:transform hover:scale-90 hover:rotate-3 transition-transform duration-300`}
          />
        </div>
        <motion.h2
          className={`text-white md:text-6xl cap lg:text-4xl text-3xl md:px-0 px-4 font-bold  absolute lg:bottom-10 bottom-5  ${
            project.imagePosition === "left"
              ? "md:-left-[400px] left-[0px]"
              : "md:-right-[400px] right-[0px]"
          } md:min-w-[500px] md:max-w-[550px] text-animation-${index}`}
          initial={{ y: "100%" }} // النص يبدأ من الأسفل
          animate={{ y: "0%" }} // النص يتحرك إلى موضعه الطبيعي
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          {project.title}
        </motion.h2>
      </div>
      <p className="text-lightgray text-sm mt-5">
        {project.description}
      </p>
    </div>
    {project.imagePosition === "right" ? (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.2, delay: 0.8 }}
  >
         <h3
        className={`md:block hidden text-[250px] outlined-number number-animation-${index} ${
          project.imagePosition === "right" ? "text-right" : "text-left"
        }`}
      >
          0{project.id}
          </h3>
          </motion.div>
    ) : null}
  </div>
))}
        </div>
      </section>
    </>
  );
}
