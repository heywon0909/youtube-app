import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { YoutubeApiProvider } from '../context/YoutubeApiContext';

const queryClient = new QueryClient();
export default function Root() {
  return (
    <div className="w-full h-screen">
      <Header />
      <YoutubeApiProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={true} />
          <Outlet />
      </QueryClientProvider>
      </YoutubeApiProvider>    
    </div>
  );
}
