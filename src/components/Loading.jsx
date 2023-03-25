import React, { useEffect } from "react";
// import { useLoadingMode } from "../context/LoadingContext";
import { useLocation } from "react-router-dom";

export default function Loading() {
  const { pathname } = useLocation();

  useEffect(() => {
    let progressInterval = null;
    let progress = 0;
    let incrementSpeed = 20;
    let bar = document.getElementById("bar");
    bar.style.width = 0 + "px";
    bar.style.backgroundColor = "#E5192C";

    progressInterval = setInterval(function () {
      progress += incrementSpeed;
      bar.style.width = progress + "px";
      if (progress >= 1440) {
        clearInterval(progressInterval);
        bar.style.backgroundColor = "white";
      }
    }, 1);
  }, [pathname]);
  return (
    <div className="w-screen  bg-white" id="progress_state">
      <div className="w-screen h-0.5 bg-white" id="bar"></div>
    </div>
  );
}
