import React from "react";
import { Item } from "./Item";
import { useYoutubeApi } from "../context/YoutubeApiContext";
import { useQuery } from "@tanstack/react-query";
export default function RelatedVideos({ id }) {
  const { youtube } = useYoutubeApi();
  const { isLoading, data: videos } = useQuery(
    ["related"],
    () => youtube.related_video(id),
    {
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
    }
  );
  return (
    <div className="flex flex-col xl:w-2/6 xl:mt-20 mt-10 w-full xl:overflow-y-auto xl:h-4/5 xl:overflow-x-hidden">
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
  );
}
