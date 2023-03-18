import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './page/Home';
import Root from './page/Root';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
    {index:true,element:<Home/>}
    ]
  }

])
function App() {
  return <RouterProvider router={router} />
}

export default App;
