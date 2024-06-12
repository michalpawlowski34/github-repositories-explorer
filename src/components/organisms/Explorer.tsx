import { useState } from "react";
import SearchForm from "./forms/SearchForm";
import UserTile from "../molecules/UserTile";
import { UsersService } from "../../services/UsersService";

const Explorer = () => {
  const [username, setUsername] = useState<string>("");

  const { data, isFetching, isError, error } = UsersService.useSearch(username);

  const ExplorerBody = () => {
    if (isError)
      return (
        <p className="mt-2 font-light text-center text-red-600">
          There was an error fetching usernames: {error.message}
        </p>
      );
    return (
      <>
        <p className="mt-2 text-sm text-neutral-500">
          Showing users for "{username}"
        </p>
        <div className="flex flex-col items-center justify-center mt-10 space-y-3">
          {data?.items.map((user) => (
            <UserTile key={user.id} {...user} />
          ))}
        </div>
      </>
    );
  };

  return (
    <div className="flex flex-col w-full max-w-5xl p-5">
      <SearchForm setUsername={setUsername} loading={isFetching} />
      {data && <ExplorerBody />}
    </div>
  );
};

export default Explorer;
