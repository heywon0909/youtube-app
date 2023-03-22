import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import Item from "../components/Item";
import { useParams } from "react-router-dom";

export default function VideoDetail() {
  const { videoId } = useParams();
  const url = "http://www.youtube.com/embed/" + videoId;
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);
  const getRelatedVideos = async () => {
    return fetch(`http://localhost:3000/data/list.json`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        const { items } = data;
        return items;
      })
      .catch((error) => console.log("error", error));
  };
  const { isLoading, data: items } = useQuery(["related"], getRelatedVideos);
  console.log("data", items);
  return (
    <div className="flex h-screen w-screen justify-center">
      <div className="flex flex-wrap w-5/6">
        <div className="flex xl:w-4/5 w-screen bg-blue-100 xl:h-4/5 mt-20 h-2/5">
          <iframe
            id="player"
            type="text/html"
            title="videoPlayer"
            src={url}
            className="w-full"
            frameBorder="0"
          ></iframe>
        </div>
        <div className="flex flex-col xl:w-1/5 mt-20 w-screen xl:overflow-y-auto xl:h-4/5 xl:overflow-x-hidden">
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
    </div>
  );
}
