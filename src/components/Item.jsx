import React from 'react';

export default function Item({ video, title,img}) {
    return (
         <div className="flex flex-col  xl:w-96 h-72 mr-2 mb-2 w-72">
            <div className="flex w-full h-52 bg-slate-300 rounded-md">
              <img src={img} alt="" className="rounded-md w-full" />
            </div>
            <div className="flex p-2">
              <div className="w-8 h-8 bg-red-400 rounded-full shrink-0">
                <img src="http://news.samsungdisplay.com/wp-content/uploads/2018/08/8.jpg" alt="" className="w-8 h-8 rounded-full" />
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

