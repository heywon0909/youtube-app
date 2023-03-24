import { useQuery } from "@tanstack/react-query";
import React from "react";
import Item from "../components/Item";
import { getSearchVideo } from "../hooks/hook";
export default function Video() {
  const { isLoading, data: items } = useQuery(["relatedVideo"], getSearchVideo);
  console.log("data", items);
  return (
    <div className="flex justify-center h-screen">
      <div class="flex flex-col w-3/5 h-full mt-24">
        {!isLoading &&
          items.map((video) => {
            return (
              <Item
                video={video}
                title={video.snippet.title}
                img={video.snippet.thumbnails.medium.url}
                key={video.etag}
                id={video.id.videoId}
              />
            );
          })}
        {isLoading && <p>isLoading...</p>}
      </div>
    </div>
  );
}
