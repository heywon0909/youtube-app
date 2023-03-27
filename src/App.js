import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Root from "./pages/Root";
import NotFoundPage from "./pages/NotFoundPage";
import Video from "./pages/Video";
import VideoDetail from "./pages/VideoDetail";


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
    <>
        <RouterProvider router={router} />
    </>);
}

export default App;
