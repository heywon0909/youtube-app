import React from "react";
import { useParams,useNavigate } from "react-router-dom";
export default function Item({ video, title, img, id}) {
  console.log("use", useParams());
  console.log('id',id)
  const { keyword,videoId } = useParams();
  const navigate = useNavigate();
  const goVideoDetail = () => navigate(`/video/detail/${id}`)
  return (
    <div
      className={
        keyword
          ? "flex h-72 sm:h-48 mb-2 w-full"
          : videoId ? "flex flex-col mb-2 md:m-2 h-20" :"flex flex-col h-80  mb-2 w-96 md:m-2"
      }
      onClick={goVideoDetail}
    >
      <div
        className={
          keyword
            ? "flex xl:w-96 w-full xl:h-48 h-36 bg-slate-300 rounded-lg"
            : "flex xl:w-full h-48 bg-slate-300 rounded-lg"
        }
      >
        <img src={img} alt="" className="rounded-lg w-full" />
      </div>
      <div className="flex p-2 w-auto">
        <div className="flex w-8 h-8 bg-red-400 rounded-full shrink-0">
          <img
            src="http://news.samsungdisplay.com/wp-content/uploads/2018/08/8.jpg"
            alt=""
            className="w-8 h-8 rounded-full"
          />
        </div>
        <div clas="flex flex-col">
          <div className="pl-2 h-5 block font-medium font-sans text-base break-words text-ellipsis overflow-hidden">
            {title}
          </div>
          <div className="pl-2 text-sm text-slate-500 font-sans">YTN</div>
          <div className="pl-2 flex text-sm text-slate-500 xl:flex-row flex-col">
            <div class="flex">조회수 107만회</div>
            <div class="flex">4일 전 </div>
          </div>
        </div>
      </div>
      </div>
    
  );
}
