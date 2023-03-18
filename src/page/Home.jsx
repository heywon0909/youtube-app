import React,{useState,useEffect} from 'react';
import Item from '../components/Item';
export default function Home() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    console.log('몇번 호출되는거얌')
    fetch(`data/list.json`).then((res) => res.json()).then((data) => {
      const { items } = data;
      console.log('items',items)
      setVideos(items);
      console.log('videos',videos)
  })
  },[videos])
  return (
      <div className="w-full p-5">
        <div className="flex flex-wrap xl:justify-between justify-center w-full h-full mt-10">
          {videos.map((video) => {
            return <Item video={video} title={video.snippet.title} img={video.snippet.thumbnails.high.url} />
          })}
        </div>
        </div>
  );
}

