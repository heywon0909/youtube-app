import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { Item } from "../components/Item";
import { useParams } from "react-router-dom";
import { getRelatedVideo } from "../hooks/hook";
export default function VideoDetail() {
  const { videoId } = useParams();
  const url = "https://www.youtube.com/embed/" + videoId;
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [videoId]);

  const { isLoading, data: items } = useQuery(
    ["related"],
    () => getRelatedVideo(videoId),
    {
      refetchOnWindowFocus: false,
    }
  );
  console.log("data", items);
  return (
    <div className="flex h-screen w-screen justify-center">
      <div className="flex flex-wrap w-11/12">
        <div className="flex xl:w-4/6 w-screen xl:h-4/5 mt-20 h-2/5 md:h-3/5 p-2">
          <iframe
            id="player"
            type="text/html"
            title="videoPlayer"
            src={url}
            className="w-full"
            frameBorder="0"
          ></iframe>
        </div>
        <div className="flex flex-col xl:w-2/6 xl:mt-20 mt-10 w-full xl:overflow-y-auto xl:h-4/5 xl:overflow-x-hidden">
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
    </div>
  );
}
