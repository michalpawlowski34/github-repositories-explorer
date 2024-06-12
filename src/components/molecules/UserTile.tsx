import { GithubUser } from "../../ts/GithubUser";

const UserTile = ({ login, avatar_url }: GithubUser) => {
  return (
    <button className="flex w-full p-3 transition-all rounded-sm bg-neutral-100 hover:bg-neutral-200">
      <div className="flex items-center justify-center space-x-2">
        <img src={avatar_url} alt="" className="w-10 rounded-full" />
        <p className="font-medium text-neutral-900">{login}</p>
      </div>
    </button>
  );
};

export default UserTile;
