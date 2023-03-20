import { useQuery } from "@tanstack/react-query";
import React from "react";
import Item from "../components/Item";
export default function Video() {
  const getRelatedVideos = async () => {
    return await fetch(`../data/list.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        const { items } = data;
        return items;
      })
      .catch((error) => console.log("error", error));
  };

  const { isLoading, data: items } = useQuery(
    ["relatedVideo"],
    getRelatedVideos
  );
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
              />
            );
          })}
        {isLoading && <p>isLoading...</p>}
      </div>
    </div>
  );
}