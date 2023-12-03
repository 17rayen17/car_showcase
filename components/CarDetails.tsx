"use client";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { CarProps } from "@/types";
import { generateCarImageUrl } from "@/utils";

interface carDetailsProps {
  isOpen: boolean;
  closeModel: () => void;
  car: CarProps;
}

const CarDetails = ({ isOpen, closeModel, car }: carDetailsProps) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" onClose={closeModel} className={`relative z-10`}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-opacity-25 bg-black" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex justify-center items-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-300"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className={`relative w-full max-w-lg max-h-[90vh] overflow-y-auto flex 
                flex-col gap-5 text-left bg-white shadow-2xl transform rounded-lg p-6`}>
                  <button
                    className="absolute top-2 right-2 bg-primary-blue-100 p-2 w-fit z-10 rounded-full"
                    onClick={closeModel}>
                    <Image
                      src="/close.svg"
                      alt="Close"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </button>
                  <div className="flex-1 flex flex-col gap-3">
                    <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
                      <Image
                        src={generateCarImageUrl(car)}
                        alt="car Model"
                        fill
                        priority
                        className="object-contain"
                      />
                    </div>

                    <div className="flex gap-3 items-center">
                      <div className="flex-1 relative w-full rounded-lg h-24 bg-primary-blue-100">
                        <Image
                          src={generateCarImageUrl(car,'29')}
                          alt="car Model"
                          fill
                          priority
                          className="object-contain"
                        />
                      </div>
                      <div className="flex-1 relative w-full rounded-lg h-24 bg-primary-blue-100">
                        <Image
                          src={generateCarImageUrl(car,'33')}
                          alt="car Model"
                          fill
                          priority
                          className="object-contain"
                        />
                      </div>
                      <div className="flex-1 relative w-full rounded-lg h-24 bg-primary-blue-100">
                        <Image
                          src={generateCarImageUrl(car,'13')}
                          alt="car Model"
                          fill
                          priority
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col gap-2">
                    <h2 className="font-semibold capitalize text-xl">{car.make} {car.model}</h2>
                    <div className=" flex flex-wrap gap-4">
                        {Object.entries(car).map(([key,value])=>(
                          <div className="flex justify-between gap-5 w-full text-right" key={key}>
                            <h4 className="text-grey">{key.split("_").join(" ")}</h4>
                            <p className="text-black-100 font-semibold">{value}</p>
                          </div>
                        ))}
                    </div>
                  </div>
                </Dialog.Panel>

              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CarDetails;
