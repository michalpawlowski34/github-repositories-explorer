import { Dispatch, SetStateAction } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { BeatLoader } from "react-spinners";
import colors from "tailwindcss/colors";

type Props = {
  setInputQuery: Dispatch<SetStateAction<string>>;
  loading: boolean;
};

type Inputs = {
  username: string;
};

const SearchForm = ({ setInputQuery, loading }: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setInputQuery(data.username);
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
        disabled={loading}
        className="flex items-center justify-center h-12 transition-all rounded-sm bg-sky-500 hover:bg-sky-600 text-neutral-50"
      >
        {loading ? (
          <BeatLoader color={colors.neutral[50]} size={10} />
        ) : (
          <p>Search</p>
        )}
      </button>
    </form>
  );
};

export default SearchForm;
