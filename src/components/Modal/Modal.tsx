"use client";

import { useState } from "react";
import { IoIosClose } from "react-icons/io";

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

export default function Modal({
  children,
  isOpen,
  closeModal,
}: {
  children: React.ReactNode;
  isOpen: boolean;
  closeModal: () => void;
}) {
  const [modalId, setModalId] = useState("");

  return (
    <Dialog
      open={isOpen}
      onClose={closeModal}
      className="relative z-10 w-screen  "
    >
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div
        className="fixed inset-0 z-10   overflow-y-auto "
        style={{ width: "100vw", backdropFilter: "blur(4px)" }}
      >
        <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center  ">
          <DialogPanel
            transition
            className="relative w-screen  transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in   sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div
              className="bg-white  *: pb-4  flex flex-col justify-center items-center  *:"
         
            >
              <div className="w-full px-5">
                <div className="   ">
                  <DialogTitle
                    as="h3"
                    className="text-3xl text-center mt-8 font-semibold leading-6 text-gray-900"
                  >
                    Enquire Now
                  </DialogTitle>
                  <hr className="w-full mt-5"></hr>
                  <div className="mt-2">{children}</div>
                </div>
              </div>
            </div>
           
              <IoIosClose
                className="text-4xl text-primary"
                style={{ position: "absolute", top: "10px", right: "10px" }}
                onClick={closeModal}
              />
           
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
