import React, { useState, useEffect } from "react";
import Item from "../components/Item";
export default function Home() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    // console.log('몇번 호출되는거얌')
    fetch(`data/list.json`)
      .then((res) => res.json())
      .then((data) => {
        const { items } = data;
        //   console.log('items',items)
        setVideos(items);
        //   console.log('videos',videos)
      });
  }, [videos]);
  return (
    // <div className="block w-full pt-5">
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-wrap xl:justify-between justify-center md:justify-center xl:w-11/12 h-full mt-32">
        {videos.map((video) => {
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
      </div>
    </div>
    // </div>
  );
}
