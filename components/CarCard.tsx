"use client"

import { CarProps } from "@/types";
import { calculateCarRent, generateCarImageUrl } from "@/utils";
import Image from "next/image";
import { CarDetails, CustomBtn } from ".";
import { useState } from "react";

interface carCardProps {
  car: CarProps;
}

const CarCard = ({ car }: carCardProps) => {
  const { city_mpg, drive, make, model, transmission, year } = car;
  const carRent = calculateCarRent(city_mpg, year);
  const [open, setOpen] = useState(false)
  // console.log(car);

  return (
    <div className="car-card cursor-pointer group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {" "}
          {make} {model}{" "}
        </h2>
      </div>
      <p className="text-[36px] font-extrabold mt-6 flex ">
        <span className="text-[14px] font-semibold self-start ">$</span>
        {carRent}
        <span className="text-[14px] font-semibold self-end ">/day</span>
      </p>
      <div className="relative w-full h-40 mt-6 object-contain">
        <Image
          src={generateCarImageUrl(car)}
          alt="hero"
          fill
          priority
          className="object-contain"
        />
      </div>

      <div className="relative flex mt-2 w-full">
        <div className="relative flex justify-between items-center group-hover:invisible text-gray-500 w-full">
          <div className="flex flex-col items-center justify-center gap-2">
            <Image
              src="/steering-wheel.svg"
              alt="steering"
              width={20}
              height={20}
            />
            <p className="text-[14px]">
              {transmission === "a" ? "Automatic" : "Manuel"}
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-2">
            <Image src="/tire.svg" alt="tire" width={20} height={20} />
            <p className="text-[14px]">{drive.toUpperCase()}</p>
          </div>

          <div className="flex flex-col items-center justify-center gap-2">
            <Image src="/gas.svg" alt="gas" width={20} height={20} />
            <p className="text-[14px]">{city_mpg} MPG</p>
          </div>
        </div>
        {/* dialog button */}
        <div className="car-card__btn-container">
          <CustomBtn
            title="View More"
            containerStyles="w-full py[16px] rounded-full bg-primary-blue select-none"
            textStyles="text-white leading-[17px] text-[14px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={()=>setOpen(true)}
          />
        </div>
        {/* end dialog button */}
      </div>

      <CarDetails isOpen={open} closeModel={()=>setOpen(false)} car={car} />
    </div>
  );
};

export default CarCard;
