import { SearchResultDTO } from "@dto/searchResultDTO";
import { GetSpotifyDataAsJSON } from "../services/getApiData";

export const spotifySearchApi = async (searchString: string, limit: number) => {
  const trendingResponse = await GetSpotifyDataAsJSON<SearchResultDTO>(
    `/search?q=${searchString}&type=album%2Cartist%2Cplaylist%2Ctrack&limit=${limit}`,
  );
  return trendingResponse;
};
