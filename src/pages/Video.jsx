import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Item } from "../components/Item";
// import Youtube from "../api/youtube";
import FakeYoutube from '../api/fakeYoutube';

export default function Video() {
  const { keyword } = useParams();
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [keyword]);

  const { isLoading, data: videos } = useQuery(["searchVideo", keyword], () => {
    const youtube = new FakeYoutube();
    return youtube.search(keyword);
  });

  //console.log("data", items);

  return (
    <div className="flex justify-center">
      <div className="flex flex-col w-3/5 sm:w-2/3 h-full mt-24">
        {!isLoading &&
          videos.map((video) => {
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
      </div>
    </div>
  );
}
