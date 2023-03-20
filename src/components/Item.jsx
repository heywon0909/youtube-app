import React from "react";
import { useParams } from "react-router-dom";
export default function Item({ video, title, img }) {
  console.log("use", useParams());
  const { keyword } = useParams();
  console.log("keywowrd", keyword);
  return (
    <div
      className={
        keyword != null
          ? "flex  xl:w-1/3 h-72 mr-2 mb-2 w-72"
          : "flex flex-col h-72 mb-2 w-2/3 xl:w-96"
      }
    >
      <div className="flex w-full h-52 bg-slate-300 rounded-md">
        {/* <img src={img} alt="" className="rounded-md w-full" /> */}
      </div>
      <div className="p-2">
        <div className="flex w-8 h-8 bg-red-400 rounded-full shrink-0">
          {/* <img
            src="http://news.samsungdisplay.com/wp-content/uploads/2018/08/8.jpg"
            alt=""
            className="w-8 h-8 rounded-full"
          /> */}
        </div>
        <div clas="flex flex-col">
          <div className="pl-2 font-mediun font-sans">{title}</div>
          <div className="pl-2 text-sm text-slate-500 font-sans">YTN</div>
          <div className="pl-2 flex text-sm text-slate-500">
            <div>조회수 107만회</div>
            <div>4일 전 </div>
          </div>
        </div>
      </div>
    </div>
  );
}
