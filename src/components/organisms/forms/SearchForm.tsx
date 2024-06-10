import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  username: string;
};

const SearchForm = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const [submittedValue, setSubmittedValue] = useState("");

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setSubmittedValue(data.username);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
      <input
        {...register("username", { required: true })}
        placeholder="Enter username"
        className="p-2 border rounded-sm bg-neutral-100 border-neutral-200 focus:outline-none"
      />
      <button
        type="submit"
        className="py-3 transition-all rounded-sm bg-sky-500 hover:bg-sky-600 text-neutral-50"
      >
        Search
      </button>

      {submittedValue && (
        <p className="text-neutral-500">Showing users for "{submittedValue}"</p>
      )}
    </form>
  );
};

export default SearchForm;
