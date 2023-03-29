import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useYoutubeApi } from "../context/YoutubeApiContext";

export default function VideoInfo({ id, name }) {
  const { youtube } = useYoutubeApi();
  const { isLoading, data: img } = useQuery(
    ["channelImg", id],
    () => youtube.channelImageURL(id),
    {
      staleTime: 1000 * 60 * 5,
    }
  );

  return (
    <div>
      {isLoading && img && (
        <img src={img} alt={name} className="rounded-full w-9 h-9" />
      )}
      <p>{name}</p>
    </div>
  );
}
