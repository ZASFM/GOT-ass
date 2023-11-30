import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './components/Nav';

const router = createBrowserRouter([
  {
    path: "/houses",
    element: <div>Houses</div>,
  },
  {
    path: "/persons",
    element: <div>Persons</div>,
  },
  {
    path: "/quotes",
    element: <div>Quotes</div>,
  },
  {
    path:'*',
    element:<div>Houses</div>
  }
]);

function App() {
  return (
    <div>
      <Navbar/>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
