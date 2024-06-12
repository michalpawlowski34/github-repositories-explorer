import { useQuery } from "@tanstack/react-query";
import { APIService } from "./APIService";
import { APIRoute } from "../constants/routes";
import { GithubUser } from "../ts/GithubUser";

type SearchQuery<T> = {
  incomplete_results: boolean;
  items: T[];
  total_count: number;
};

export const GithubService = {
  useSearchUsers(username: string) {
    return useQuery({
      queryKey: ["username", username],
      queryFn: async () =>
        await APIService.get<SearchQuery<GithubUser>>(
          `${APIRoute.SEARCH_USERS}?q=${username}&per_page=5`
        ),
      enabled: !!username,
      refetchOnWindowFocus: false,
    });
  },
};
