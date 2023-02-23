import React from "react";

const SectionTitle = ({ title }) => {
  return (
    <h2 className="text-black text-3xl font-bold text-center mx-auto dark:text-slate-200 border-b border-gray-200 dark:border-slate-600 pb-3 max-w-4xl">
      {title}
    </h2>
  );
};

export default SectionTitle;
