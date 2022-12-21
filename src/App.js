import logo from "./logo.svg";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./Routes/Routes";

function App() {
  return (
    <div className="App">
  <div className='lg:w-5/6 m-auto'><RouterProvider router={routes}></RouterProvider></div>
    </div>
  );
}

export default App;
