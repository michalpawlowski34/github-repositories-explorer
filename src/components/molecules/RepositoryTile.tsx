import { Repository } from "../../ts/Repository";
import { FaStar } from "react-icons/fa6";

const RepositoryTile = ({
  name,
  stargazers_count,
  description,
}: Repository) => {
  return (
    <div className="flex flex-col justify-center w-full p-3 py-5 space-y-2 rounded-sm bg-neutral-200">
      <div className="flex items-center justify-between">
        <p className="font-bold text-neutral-900">{name}</p>
        <div className="flex items-center space-x-1">
          <p className="font-bold text-neutral-900">{stargazers_count}</p>
          <FaStar />
        </div>
      </div>
      <p className="text-sm text-neutral-900">{description}</p>
    </div>
  );
};

export default RepositoryTile;
