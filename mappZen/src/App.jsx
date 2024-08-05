import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Link } from "react-router-dom";
import BallooningPage from "./pages/BallooningPage";

function MappZen() {
  const [count, setCount] = useState(0);

  return (
    <div className="m-1 border-2">
      <p className="text-3xl font-bold text-red-400">Hello From MappZen MicrofrontEnd</p>
      <Link to="/ballooning">Ballooning Page</Link>
    </div>
  );
}

export default MappZen;
