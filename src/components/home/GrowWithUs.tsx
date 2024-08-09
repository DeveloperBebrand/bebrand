import Image from "next/image";
import useImages from "../../hooks/useImages";
import LinkButton from "../buttons/LinkButton";
import { useModal } from "../context/ModalContext";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function GrowWithUs() {
  const { resentProject, teamMember, happyClient, fullImage } = useImages();
  const { openModal } = useModal();
  const { ref, inView } = useInView({ triggerOnce: true });
  const { scrollYProgress } = useScroll();
  const translateYTop = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const translateYBottom = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const translateXRight = useTransform(scrollYProgress, [0, 1], [0, 50]);

  const imageVariants = {
    hidden: (direction: string) => ({
      opacity: 0,
      y: direction === "top" ? -100 : direction === "bottom" ? 100 : 0,
      x: direction === "right" ? 100 : 0,
    }),
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 1 },
    },
    exit: (direction: string) => ({
      opacity: 0,
      y: direction === "top" ? -50 : direction === "bottom" ? 50 : 0,
      x: direction === "right" ? 50 : 0,
      transition: { duration: 1 },
    }),
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        // Trigger exit animation when the user scrolls to the top
        document.querySelectorAll(".motion-div").forEach((el) => {
          el.classList.add("exit");
        });
      } else {
        // Remove exit animation class when the user scrolls down
        document.querySelectorAll(".motion-div").forEach((el) => {
          el.classList.remove("exit");
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    if (!inView) {
      // Trigger exit animation when the element is out of view
      document.querySelectorAll(".motion-div").forEach((el) => {
        el.classList.add("exit");
      });
    } else {
      // Remove exit animation class when the element is in view
      document.querySelectorAll(".motion-div").forEach((el) => {
        el.classList.remove("exit");
      });
    }
  }, [inView]);

  return (
    <>
     <section className=" lg:py-64 py-10" id="blossom-with-us" >
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-primary text-sm" ref={ref}>Blossom with Us:</span>

              <h2 className="text-secondary text-4xl font-bold mt-5" >
                From the artful design craft to the intricate world of digital innovation.
              </h2>

              <p className="text-primarylight text-base mt-10">
                The digital world is a domain in which ideas can be brought to life through algorithms and
                code, where the creation of virtual experiences peers the artistry of the physical.
              </p>

              <div className="flex flex-row items-center gap-5 mt-10 sm:hidden">
                <LinkButton
                  onClick={() => openModal()}
                  buttontype="button"
                  type="dark"
                  text="Learn More"
                  url="javascript:void(0)"
                  icon={true}
                />
              </div>
            </div>
            <div className="block lg:hidden">
              <Image src={fullImage} alt="Grow with us" />
            </div>

            <div className="container relative hidden lg:block">
              <motion.div
                custom="top"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                exit="exit"
                variants={imageVariants}
                className="absolute -top-72 left-0 motion-div"
              >
                <Image
                  width={650}
                  height={650}
                  src={resentProject}
                  alt="Grow with us"
                  className="object-cover"
                />
              </motion.div>
              <motion.div
                custom="bottom"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                exit="exit"
                variants={imageVariants}
                className="absolute -left-10 motion-div"
              >
                <Image
                  width={379}
                  height={350}
                  src={happyClient}
                  alt="Grow with us"
                  className="object-cover"
                />
              </motion.div>
              <motion.div
                custom="right"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                exit="exit"
                variants={imageVariants}
                className="absolute -top-20 right-8 motion-div"
              >
                <Image
                  width={379}
                  height={400}
                  src={teamMember}
                  alt="Grow with us"
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
     
    </>
  );
}