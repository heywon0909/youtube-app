import React, { memo, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MdPlayCircleOutline } from "react-icons/md";
export const Item = memo(
  ({ video, title, img, id, publishTime, channelTitle }) => {
    const navigate = useNavigate();
    const { keyword, videoId } = useParams();
    const goToVideo = () => navigate(`/videos/watch/${id}`);
    const diff = Math.ceil(
      (new Date(publishTime).getTime() - new Date().getTime()) /
        (1000 * 60 * 60 * 24)
    );
    const time =
      diff === 0
        ? Math.ceil(
            (new Date(publishTime).getTime() - new Date().getTime()) /
              (1000 * 60 * 60)
          ) *
            -1 +
          "시간 전"
        : diff * -1 + "일 전";
    useEffect(() => {
      const item = document.getElementById(`item${id}`);
      item.addEventListener("mouseover", () => {
        document.getElementById(`visibility${id}`).style.display = "block";
      });
      item.addEventListener("mouseleave", () => {
        document.getElementById(`visibility${id}`).style.display = "none";
      });
    });

    return (
      <div
        className={
          keyword
            ? "flex xl:h-60 sm:h-48 mb-2 w-full relative"
            : videoId
            ? "flex flex-row h-1/2 mb-2 xl:w-11/12 w-full md:m-2 relative"
            : "flex flex-col h-72 mb-2 w-80 m-2 relative"
        }
        onClick={goToVideo}
        id={"item" + id}
      >
        <div
          className={
            keyword
              ? "flex w-auto xl:h-48 h-36 bg-slate-300 rounded-lg relative"
              : videoId
              ? "flex h-auto w-28 lg:w-2/5 md:w-2/5 sm:h-24 md:h-40 xl:h-auto bg-slate-300 rounded-lg xl:w-48 relative"
              : "flex xl:w-full h-48 bg-slate-300 rounded-lg"
          }
        >
          <img
            src={img}
            alt=""
            className={keyword ? "rounded-lg w-auto" : "rounded-lg w-full"}
          />
          <div
            className={
              videoId ? "absolute right-0 hidden" : "absolute right-0 hidden"
            }
            id={"visibility" + id}
          >
            <MdPlayCircleOutline color="gray" size="23" />
          </div>
        </div>
        <div
          className={
            videoId
              ? "flex  xl:w-full w-4/5"
              : keyword
              ? "flex p-2 w-1/5 xl:w-3/5"
              : "flex pt-2 w-auto"
          }
        >
          <div clas="flex flex-col">
            <div
              className={
                keyword
                  ? "grow-1 pl-2 block font-medium w-auto font-sans whitespace-normal text-base overflow-ellipsis overflow-hidden line-clamp-2"
                  : videoId
                  ? "pl-2 block font-medium font-sans break-words  whitespace-normal overflow-ellipsis overflow-hidden line-clamp-2"
                  : "pl-2 xl:h-auto h-5 block font-medium font-sans text-base break-words text-ellipsis overflow-hidden"
              }
            >
              {title}
            </div>
            <div className="pl-2 text-sm text-slate-500 font-sans">
              {channelTitle}
            </div>
            <div
              className={
                videoId
                  ? "pl-2 flex text-xs text-slate-500 flex-col"
                  : "pl-2 flex text-sm text-slate-500 xl:flex-row flex-col"
              }
            >
              {/* <div className="flex">조회수 107만회</div> */}
              <div className="flex">{time}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);
