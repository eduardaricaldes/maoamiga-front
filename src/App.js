import { Routes, Route } from "react-router-dom";
import "./reset.css";

import InitPage from "./pages/Init";
import CategoryPage from "./pages/Category";
import SignInPage from "./pages/SignIn";

function App() {
  return (
    <Routes>
      <Route path="/" element={<InitPage />} />
      <Route path="/category" element={<CategoryPage />} />
      <Route path="/sign-in" element={<SignInPage />} />
    </Routes>
  );
}

export default App;
