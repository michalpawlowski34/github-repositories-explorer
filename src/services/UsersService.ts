import { useQuery } from "@tanstack/react-query";
import { APIService } from "./APIService";
import { APIRoute } from "../constants/routes";
import { GithubUser } from "../ts/GithubUser";
import { SearchResult } from "../ts/SearchResult";
import { Repository } from "../ts/Repository";

export const UsersService = {
  useSearch(inputQuery: string) {
    return useQuery({
      queryKey: ["inputQuery", inputQuery],
      queryFn: async () =>
        await APIService.get<SearchResult<GithubUser>>(
          `${APIRoute.SEARCH_USERS}?q=${inputQuery}&per_page=5`
        ),
      enabled: !!inputQuery,
      refetchOnWindowFocus: false,
    });
  },
  useRepos(username: string) {
    return useQuery({
      queryKey: [`repos-${username}`],
      queryFn: async () =>
        await APIService.get<Repository[]>(
          `${APIRoute.USERS}/${username}/repos`
        ),
      enabled: false,
    });
  },
};
