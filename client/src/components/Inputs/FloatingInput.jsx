import React from "react";
import { brandName } from "../../../config/BRAND";

const FloatingInput = ({
  label=brandName,
  type = "text",
  value,
  onChange=()=>{},
  name=brandName,
}) => {
  return (
    <div className="relative w-full max-w-sm">
      <input
        type={type}
        name={name}
        value={value}
        onChange={(e)=>onChange(e.target.value)}
        required
        className="
        m-1
          peer
          w-full
          border-2 border-gray-300
          rounded-md
          px-3 pt-5 pb-2
          text-md
          focus:outline-none
          focus:border-purple-500
          bg-transparent
        "
      />

      <label
        className="
          absolute
          left-3
          top-1/2
          -translate-y-1/2
          text-gray-500
          text-sm
          transition-all
          duration-200
          bg-white
          px-1

          peer-focus:top-2
          peer-focus:text-xs
          peer-focus:text-black

          peer-valid:top-2
          peer-valid:text-xs
          peer-valid:text-black
        "
      >
        {label}
      </label>
    </div>
  );
};

export default FloatingInput;
