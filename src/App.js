import logo from "./logo.svg";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./Routes/Routes";

function App() {
  return (
    <div style={{width:'80%',margin:'auto',marginTop:'100px'}} >
  <div className='lg:w-5/6 m-auto'><RouterProvider router={routes}></RouterProvider></div>
    </div>
  );
}

export default App;
