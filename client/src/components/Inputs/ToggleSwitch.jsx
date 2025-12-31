import React from "react";

const ToggleSwitch = ({ checked, onChange }) => {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      {/* Hidden Checkbox */}
      <input
        type="checkbox"
        className="sr-only peer"
        checked={checked}
        onChange={onChange}
      />

      {/* Track */}
      <div
        className="
          w-12 h-6
          bg-gray-300
          rounded-full
          peer-checked:bg-purple-500
          transition-colors
          duration-300
        "
      ></div>

      {/* Thumb */}
      <div
        className="
          absolute left-1 top-1
          w-4 h-4
          bg-white
          rounded-full
          transition-transform
          duration-300
          peer-checked:translate-x-6
        "
      ></div>
    </label>
  );
};

export default ToggleSwitch;
