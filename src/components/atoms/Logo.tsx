import { FaGithub } from "react-icons/fa";

const Logo = () => {
  return (
    <div className="flex flex-col items-center justify-center my-10 space-y-3 lg:flex-row lg:space-x-3 lg:space-y-0">
      <FaGithub className="w-12 h-12" />
      <h1 className="text-4xl font-semibold text-center text-neutral-800">
        GitHub Repositories Explorer
      </h1>
    </div>
  );
};

export default Logo;
