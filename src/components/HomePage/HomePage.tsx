"use client";
import Image from "next/image";
  
import HowWeWork from "../../components/home/HowWeWork";
import Services from "../../components/home/Services";
import GrowWithUs from "../../components/home/GrowWithUs";
import Projects from "../../components/home/Projects";
import Counter from "../../components/home/Counter";
import HireUs from "../../components/home/HireUs";
 
import useImages from "../../hooks/useImages";
import { motion } from "framer-motion";
import LinkButton from "../../components/buttons/LinkButton";
import Link from "next/link";
import {  ModalContext, useModal } from "@/components/context/ModalContext";
import Modal from "../Modal/Modal";
import Form from "../Form/Form";
import { useContext } from "react";
import SmoothScroll from "../scroll/SmoothScroll";

export default function HomePage() {
    const { AfterPay, BaseCamp, Maze, GeomatricMain, Icons } = useImages();
    const { openModal ,isModalOpen,closeModal} = useModal();
  return < >

       
 
 <div className="bg-secondary mt-10" id="home">
          <Modal isOpen={isModalOpen} closeModal={closeModal} >
            <Form  />
          </Modal>

            <div className="geomatric-background bg-no-repeat object-contain bg-right-bottom">
              <div className="container bg-main object-cover bg-center">
                <div className="h-[95vh]">
                  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 items-center gap-10">
                    <div className="flex flex-col justify-center gap-5 h-[95vh]">
                      <motion.h1
                        className="text-white lg:text-6xl text-4xl mt-20 font-bold lg:leading-18 leading-10"
                        initial={{ clipPath: "inset(100% 0 0 0)" }}
                        animate={{ clipPath: "inset(0% 0 0 0)" }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                      >
                        We create brands you want to be a customer of.
                      </motion.h1>
                      <motion.p
                        className="text-lightgray text-sm mt-5 leading-6"
                        initial={{ clipPath: "inset(100% 0 0 0)" }}
                        animate={{ clipPath: "inset(0% 0 0 0)" }}
                        transition={{ duration: 0.3, delay: 0.7 }}
                      >
                        Word spread quickly, not through grandiose advertising
                        but through the sincere, glowing recommendations of
                        those the magic had touched.
                      </motion.p>

                      <motion.div
                        className="flex flex-row items-center gap-5 mt-5"
                        initial={{ clipPath: "inset(0 100% 0 0)" }}
                        animate={{ clipPath: "inset(0 0 0 0)" }}
                        transition={{
                          duration: 0.3,
                          delay: 0.7,
                          ease: [0.175, 0.885, 0.32, 1.275], // custom bezier curve for elastic effect
                        }}
                      >
                        <LinkButton
                            buttontype="button"
                          type="dark"
                          url="javascript:void(0)"
                           text="Ready to get started"
                           onClick={openModal}
                         
                          icon={true}
                        />

                        <div>
                          <p className="text-lightgray text-sm md:block hidden">
                            Or call us at{" "}
                            <Link
                              href="tel:+2348123456789"
                              className="text-white text-sm"
                            >
                              +971568913509
                            </Link>
                          </p>
                        </div>
                      </motion.div>
                      {/* Trusted by world's best companies */}
                      <motion.div
                        initial={{ clipPath: "inset(0 100% 0 0)" }}
                        animate={{ clipPath: "inset(0 0 0 0)" }}
                        transition={{
                          duration: 0.3,
                          delay: 0.7,
                          ease: [0.175, 0.885, 0.32, 1.275], // custom bezier curve for elastic effect
                        }}
                        className="flex md:flex-row flex-col md:items-center gap-5 mt-16 md:block hidden "
                      >
                        <h2 className="text-lightgray text-2xl font-bold">
                          Inspiration for the <br /> grandest brands on earth.
                        </h2>

                        <div className="flex flex-row md:flex-nowrap flex-wrap items-center gap-5 ">
                          <Image
                            src={BaseCamp}
                            alt="BaseCamp"
                            className="h-16 w-auto opacity-70"
                          />
                          <Image
                            src={AfterPay}
                            alt="AfterPay"
                            className="h-16 w-auto opacity-70"
                          />
                          <Image
                            src={Maze}
                            alt="Maze"
                            className="h-16 w-auto opacity-70"
                          />
                        </div>
                      </motion.div>
                    </div>

                    <div className=""></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* How we work */}
          <HowWeWork />
          {/* Services */}
          <Services />
          {/* Grow with us */}
          <GrowWithUs />
          {/* Projects */}
          <Projects />
          {/* Counter */}
          <Counter />
          {/* Hire Us */}
          <HireUs />
 

  </ >;
}