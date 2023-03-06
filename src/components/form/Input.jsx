import React from "react";

const Input = ({ register, type, placeholder, registerName, error }) => {
  return (
    <input
      {...register(registerName, { required: true })}
      type={type}
      className={`border-2 w-full block px-3 py-1.5 rounded-lg placeholder-slate-300 dark:bg-modal ${
        error ? "border-rose-500" : " dark:border-main"
      }`}
      placeholder={placeholder}
    />
  );
};

export default Input;
