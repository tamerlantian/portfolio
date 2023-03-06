import React from "react";

const Label = ({ children, htmlFor }) => {
  return (
    <label className="text-sm text-slate-600 dark:text-slate-400" htmlFor={htmlFor}>
      {children}
    </label>
  );
};

export default Label;
