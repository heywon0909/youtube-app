import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import Item from "../components/Item";
import { getSearchVideo } from "../hooks/hook";
export default function Video() {
  const { keyword } = useParams();
  const { isLoading, data: items } = useQuery(["searchVideo", keyword], () =>
    getSearchVideo(keyword)
  );
  console.log("data", items);
  return (
    <div className="flex justify-center h-screen">
      <div className="flex flex-col w-3/5 h-full mt-24">
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
  );
}
