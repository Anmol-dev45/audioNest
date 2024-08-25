import React from "react";
import { forwardRef } from "react";
import { useId } from "react";

const Input = ({ label, type = "text", className = "", ...props }, ref) => {
  const id = useId();
  return (
    <div>
      {label && (
        <label htmlFor={id} className="label">
          <span className="label-text font-medium">{label}</span>
        </label>
      )}
      <input
        id={id}
        type={type}
        ref={ref}
        className={`input input-bordered input-primary w-full ${className}`}
        {...props}
      />
    </div>
  );
};

export default forwardRef(Input);
