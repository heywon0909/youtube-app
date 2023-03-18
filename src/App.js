import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home';
import Root from './pages/Root';
import NotFoundPage from './pages/NotFoundPage';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement:<NotFoundPage/>,
    children: [
      { index: true, element: <Home /> },
      {path:'/video/:keyword',element:<NotFoundPage/>}
    ]
  }

])
function App() {
  return <RouterProvider router={router} />
}

export default App;
