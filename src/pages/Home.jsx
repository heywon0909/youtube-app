import React from "react";
import Item from "../components/Item";
import { useQuery } from "@tanstack/react-query";
import { getVideo } from "../hooks/hook";

export default function Home() {
  const { isLoading, data: items } = useQuery(["video_list"], getVideo);

  return (
    // <div className="block w-full pt-5">
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-wrap xl:justify-between justify-center md:justify-center xl:w-11/12 h-full mt-32">
        {!isLoading &&
          items.map((video) => {
            return (
              <Item
                video={video}
                title={video.snippet.title}
                img={video.snippet.thumbnails.medium.url}
                key={video.etag}
                id={video.id.videoId}
                publishTime={video.snippet.publishTime}
                channelTitle={video.snippet.channelTitle}
              />
            );
          })}
        {isLoading && <p>isLoading...</p>}
      </div>
    </div>
    // </div>
  );
}
