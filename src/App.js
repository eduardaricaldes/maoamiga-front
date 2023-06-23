import { Routes, Route } from "react-router-dom";

import InitPage from "./pages/Init";
import "./reset.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<InitPage />} />
    </Routes>
  );
}

export default App;
