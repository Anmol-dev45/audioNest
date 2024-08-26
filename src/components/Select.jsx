import React, { forwardRef, useId } from "react";

const Select = ({ label, options = [], className = "", ...props }, ref) => {
  const id = useId();
  return (
    <div>
      {label && (
        <label htmlFor={id} className="label">
          <span className="label-text font-medium">{label}</span>
        </label>
      )}

      <select
        name=""
        id={id}
        ref={ref}
        className={`input input-bordered w-full ${className}`}
        {...props}
      >
        {options &&
          options.map((option) => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
      </select>
    </div>
  );
};

export default forwardRef(Select);
