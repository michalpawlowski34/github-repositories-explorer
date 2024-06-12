import { useQuery } from "@tanstack/react-query";
import { APIService } from "./APIService";
import { APIRoute } from "../constants/routes";
import { GithubUser } from "../ts/GithubUser";
import { SearchResult } from "../ts/SearchResult";

export const UsersService = {
  useSearch(username: string) {
    return useQuery({
      queryKey: ["username", username],
      queryFn: async () =>
        await APIService.get<SearchResult<GithubUser>>(
          `${APIRoute.SEARCH_USERS}?q=${username}&per_page=5`
        ),
      enabled: !!username,
      refetchOnWindowFocus: false,
    });
  },
};
