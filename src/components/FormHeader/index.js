import React from "react";
import { GlobeAltIcon , PlusIcon, MinusIcon } from "@heroicons/react/24/solid";
import Button from "../Button";

const FormHeader = () => {
  return (
    <div className=" my-5 container  mx-auto flex justify-between  items-center  ">
      <div className="flex items-center  gap-2 ">
        <div className=" w-[58px] h-[58px] bg-[#0B128C] rounded-full grid place-content-center">
          <GlobeAltIcon className="h-[29px] w-[29px] text-white" />
        </div>
        <div>
          <div className="text-xl font-medium text-black">Football</div>
          <p className="text-slate-500 text-[12px] ">Sports</p>
        </div>
      </div>
      <div className="flex gap-4 ">
        <Button bgcolor="#0B128C">
          <span aria-hidden="true"><PlusIcon className="text-white h-[12px] w-[12px]"/></span> add to list
        </Button>
        <Button bgcolor="#E01717">
          <span aria-hidden="true"><MinusIcon className="text-white h-[15px] w-[15px]"/></span> delete
        </Button>
      </div>
    </div>
  );
};

export default FormHeader;
