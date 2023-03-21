import { useQuery } from "@tanstack/react-query";
import React from 'react';
import Item from "../components/Item";
export default function VideoDetail() {
    const getRelatedVideos = async () => {
    return await fetch(`data/list.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        const { items } = data;
        return items;
      })
      .catch((error) => console.log("error", error));
  };
     const { isLoading, data: items } = useQuery(
    ["related"],
    getRelatedVideos
  );
  console.log("data", items);
    return (
       <div className="flex h-screen w-screen justify-center"> 
        <div className="flex flex-wrap w-5/6">  
            <div className="flex xl:w-4/5 w-screen bg-blue-100 xl:h-4/5 h-auto">
                <iframe id="player" type="text/html" title="videoPlayer"
                src="http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com" className="w-full"
                    frameBorder="0"></iframe>
            </div>
                <div className="flex xl:w-1/5 w-screen bg-blue-600">
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
        </div>    
         
    );
}

