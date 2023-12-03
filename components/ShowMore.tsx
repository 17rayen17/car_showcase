"use client";

import { ShowMoreProps } from "@/types";
import { useRouter } from "next/navigation";
import { CustomBtn } from ".";
import { updateSearchParams } from "@/utils";

const ShowMore = ({ pageNumber, isNext, setLimit }: ShowMoreProps) => {
const handelNavigation = () => {
const newLine = (pageNumber + 1) * 10;
setLimit(newLine);
};
return (
<div className="w-full flex-center gap-5 mt-10">
    {!isNext && (
    <CustomBtn
        title="Show More"
        btnType="button"
        containerStyles="bg-primary-blue rounded-full text-white hover:shadow-md"
        handleClick={handelNavigation}
    />
    )}
</div>
);
};

export default ShowMore;
