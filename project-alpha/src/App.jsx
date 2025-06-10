import { Button } from "@/components/ui/button";
import Page from "./app/dashboard/page";
import Counter from "./pages/counter";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="flex min-h-svh flex-col items-center justify-center">
        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
