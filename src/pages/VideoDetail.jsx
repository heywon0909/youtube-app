import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import VideoInfo from "../components/VideoInfo";
import RelatedVideos from "../components/RelatedVideos";
export default function VideoDetail() {
  const { videoId } = useParams();
  const {
    state: { video },
  } = useLocation();

  const { title, channelId, channelTitle, description } = video.snippet;
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [videoId]);

  return (
    <div className="flex h-screen w-screen justify-center">
      <div className="flex flex-wrap w-11/12">
        <section className="flex flex-col xl:w-4/6 w-screen xl:h-5/6 mt-20 h-4/6  p-2">
          <iframe
            id="player"
            type="text/html"
            title={title}
            src={`https://www.youtube.com/embed/${videoId}`}
            className="w-full xl:h-4/5 md:h-4/5 h-3/5"
            frameBorder="0"
          />
          <div className="w-auto h-1/4">
            <h2>{title}</h2>
            <VideoInfo id={channelId} name={channelTitle}></VideoInfo>
            <p className="line-clamp-5">{description}</p>
          </div>
        </section>

        <RelatedVideos id={video.id}></RelatedVideos>
      </div>
    </div>
  );
}
