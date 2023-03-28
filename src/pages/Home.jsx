import React from "react";
import { Item } from "../components/Item";
import { useQuery } from "@tanstack/react-query";
import { useYoutubeApi } from "../context/YoutubeApiContext";

export default function Home() {
  const { youtube } = useYoutubeApi();
  const { isLoading, data: videos } = useQuery(["video_list"], () =>
    youtube.search()
  );
  console.log("isLoading", isLoading);

  return (
    // <div className="block w-full pt-5">
    <div className="flex justify-center items-center">
      <div className="flex flex-wrap xl:justify-between justify-center md:justify-center xl:w-11/12 h-full mt-32">
        {!isLoading &&
          videos.map((video) => {
            return (
              <Item
                video={video}
                img={video.snippet.thumbnails.medium.url}
                key={video.etag}
              />
            );
          })}
      </div>
    </div>
    // </div>
  );
}
