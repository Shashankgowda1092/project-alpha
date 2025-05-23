import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UserForm from "./pages/reacthookform";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>

      <a href="https://vite.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <h1>SHASH</h1>
      <UserForm title="Welcome to React Hook Form" count={5} />
  
    </>
  );
}

export default App;
