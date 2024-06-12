import { useEffect, useState } from "react";
import SearchForm from "./forms/SearchForm";
import { GithubService } from "../../services/GithubService";

const Explorer = () => {
  const [username, setUsername] = useState<string>("");

  const { data, isFetching } = GithubService.useSearchUsers(username);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="flex flex-col w-full max-w-5xl p-5">
      <SearchForm setUsername={setUsername} loading={isFetching} />
      {data && (
        <>
          <p className="mt-2 text-sm text-neutral-500">
            Showing users for "{username}"
          </p>
          <div className="flex items-center justify-center mt-10"></div>
        </>
      )}
    </div>
  );
};

export default Explorer;
