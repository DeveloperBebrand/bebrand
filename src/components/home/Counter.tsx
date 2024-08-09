"use client";

import Link from "next/link";
import LinkButton from "../buttons/LinkButton";
import { useState, useEffect } from "react";
 import CountUp from "react-countup";
import { useModal } from "../context/ModalContext";

export default function Counter() {
   const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("progression-in-figures");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          setStartCount(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const {openModal,isModalOpen,closeModal} = useModal();
  return (
    <>
      <section className="py-20" id="progression-in-figures">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-10 items-center">
            <div className="flex flex-col justify-center gap-5">
              <span className="text-primary text-sm">
                Progression in Figures
              </span>

              <h2 className="text-secondary text-4xl font-bold mt-5">
                Dare to be distinctive? <br />
                Think apart.
              </h2>

              <p className="text-lightgray text-sm mt-5 leading-6">
                Herein lies the alchemy of transformation where ardent ambition
                encounters the fundamental expertise of those skilled in their
                trade. The professionals touch responds to the initial vitality
                into a paragon of superiority.
              </p>

              <div className="flex flex-row items-center gap-5 mt-5">
                <LinkButton
                  buttontype="button"
                  type="dark"
                  text="Schedule a Call"
                  url="javascript:void(0)"
                  icon={true}
                  onClick={()=>openModal()}
                />

                <div className="md:block hidden">
                  <p className="text-lightgray text-sm">
                    Or call us at{" "}
                    <Link
                      href="tel:+2348123456789"
                      className="text-primary text-sm"
                    >
                     +971 56 830 6877
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-row items-center gap-5">
              <div className="flex flex-col gap-5 w-full">
                <div className="flex flex-row items-center gap-5">
                  <div className="flex flex-col gap-5 border bg-gradient-to-tl from-primarytransparent via-transparent to-transparent border-primarytransparent p-5 rounded-md w-1/2">
                    <h3 className="text-secondary text-4xl font-bold">
                      {startCount ? <CountUp end={309} duration={3} /> : ""}+
                    </h3>
                    <p className="text-lightgray text-sm">
                      Surpassing Three Hundred Undertakings
                    </p>
                  </div>
                  <div className="flex flex-col gap-5 border border-primarytransparent p-5 rounded-md w-1/2 bg-gradient-to-tl from-primarytransparent via-transparent to-transparent">
                    <h3 className="text-secondary text-4xl font-bold">
                      {startCount ? <CountUp end={112} duration={3} /> : ""}+
                    </h3>
                    <p className="text-lightgray text-sm">
                      Above a Hundred Cheerful Clients
                    </p>
                  </div>
                </div>

                <div className="flex flex-row items-center gap-5">
                  <div className="flex flex-col gap-5 border p-5 rounded-md w-1/2 bg-gradient-to-tl from-primarytransparent via-transparent to-transparent border-primarytransparent">
                    <h3 className="text-secondary text-4xl font-bold">
                      {startCount ? <CountUp end={38} duration={3} /> : ""}+
                    </h3>
                    <p className="text-lightgray text-sm">
                      Dedicated Colleagues
                    </p>
                  </div>
                  <div className="flex flex-col gap-5 border border-primarytransparent p-5 rounded-md w-1/2 bg-gradient-to-tl from-primarytransparent via-transparent to-transparent">
                    <h3 className="text-secondary text-4xl font-bold">
                      {startCount ? <CountUp end={22} duration={3} /> : ""}+
                    </h3>
                    <p className="text-lightgray text-sm">
                      Over Twenty Years of Practice
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
