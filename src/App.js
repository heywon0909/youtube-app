import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Root from "./pages/Root";
import NotFoundPage from "./pages/NotFoundPage";
import Video from "./pages/Video";
import VideoDetail from "./pages/VideoDetail";
import { LoadingProvider } from "./context/LoadingContext";

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "/videos", element: <Home /> },
      { path: "/videos/:keyword", element: <Video /> },
      { path: "/videos/watch/:videoId", element: <VideoDetail /> },
    ],
  },
]);
function App() {
  return (
    <LoadingProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={true} />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </LoadingProvider>
  );
}

export default App;
