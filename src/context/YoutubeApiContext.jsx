import { createContext, useContext } from "react";
import FakeYoutueClient from "../api/fakeYoutubeClient";
import Youtube from "../api/youtube";

export const YoutubeApiContext = createContext();
export function YoutubeApiProvider({ children }) {
  const client = new FakeYoutueClient();
  const youtube = new Youtube(client);

  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
}

export function useYoutubeApi() {
  return useContext(YoutubeApiContext);
}
