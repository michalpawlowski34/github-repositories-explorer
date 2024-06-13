import { UsersService } from "../../services/UsersService";
import { GithubUser } from "../../ts/GithubUser";
import { Accordion, AccordionBody, AccordionHeader } from "../atoms/Accordion";
import { BeatLoader } from "react-spinners";
import RepositoryTile from "./RepositoryTile";
import colors from "tailwindcss/colors";

const UserTile = ({ login, avatar_url }: GithubUser) => {
  const { data, isError, error, isFetching, refetch } =
    UsersService.useRepos(login);

  const UserTileBody = () => {
    if (isError)
      return (
        <p className="text-sm font-light text-red-600">
          There was an error fetching repositories: {error.message}
        </p>
      );
    if (isFetching)
      return (
        <div className="flex items-center justify-center w-full">
          <BeatLoader color={colors.neutral[300]} size={12} />
        </div>
      );
    if (data && data.length > 0) {
      return (
        <>
          {data.map((repo) => (
            <RepositoryTile key={repo.id} {...repo} />
          ))}
        </>
      );
    } else
      return (
        <p className="text-sm font-light text-neutral-400">
          User has no public repositories.
        </p>
      );
  };

  return (
    <Accordion onToggle={(isOpen) => isOpen && refetch()}>
      <AccordionHeader>
        <div className="flex items-center justify-center space-x-2">
          <img src={avatar_url} alt="" className="w-10 rounded-full" />
          <p className="font-medium text-neutral-900">{login}</p>
        </div>
      </AccordionHeader>
      <AccordionBody>
        <div className="flex flex-col mt-2 ml-3 space-y-2">
          <UserTileBody />
        </div>
      </AccordionBody>
    </Accordion>
  );
};

export default UserTile;
