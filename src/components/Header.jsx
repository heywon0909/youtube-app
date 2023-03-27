import React, { useEffect, useState } from "react";
import { BsYoutube } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { useNavigate, Link, useLocation } from "react-router-dom";
import Loading from "./Loading";

export default function Header() {
  const { pathname } = useLocation();

  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const updateKeyword = (e) => setKeyword(e.target.value);
  const searchKeyword = () => {
    navigate(`/videos/${keyword}`);
  };
  const searchKeywordByForm = (e) => {
    if (e.keyCode === 13) {
      searchKeyword();
    }
  };
  useEffect(() => {
    if (pathname === "/") {
      setKeyword("");
      document.getElementById("searchKeyword").value = "";
    }
  }, [pathname]);
  return (
    <>
      <div className="w-full bg-white fixed z-10">
        <Loading />
        <div className="w-full flex p-2">
          <div className="p-2 ml-10 flex">
            <Link to="/">
              <BsYoutube size="30" className="text-brand" />
            </Link>
          </div>
          <div className="flex not-italic font-mono text-xl py-2 font-semibold">
            <Link to="/"> Youtube</Link>
          </div>

          <div className="flex w-full p-2 justify-center border-slate-300">
            <div className="flex w-2/5">
              <input
                className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-l-full py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-slate-500 focus:ring-slate-200 focus:ring-1 sm:text-sm"
                placeholder="검색"
                type="text"
                name="search"
                id="searchKeyword"
                onChange={updateKeyword}
                onKeyDown={searchKeywordByForm}
                autoComplete="off"
              />
              <button
                className="w-14 border-3 bg-slate-200 rounded-r-full px-3 text-center hover:bg-slate-300 mr-4"
                onClick={searchKeyword}
              >
                <BiSearch />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
