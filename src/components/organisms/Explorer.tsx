import React from "react";
import SearchForm from "./forms/SearchForm";

const Explorer = () => {
  return (
    <div className="flex flex-col flex-1 max-w-5xl p-5 rounded-sm shadow-lg bg-neutral-50">
      <SearchForm />
    </div>
  );
};

export default Explorer;
