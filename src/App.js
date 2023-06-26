import { Routes, Route } from "react-router-dom";
import "./reset.css";

import InitPage from "./pages/Init";
import CategoryPage from "./pages/Category";
import SignInPage from "./pages/signIn";
import SignUpPageUser from "./pages/signup-user";
import SignUpPageProvider from "./pages/signup-provider";
import HomePage from "./pages/Home";
import AppointmentsPageUser from "./pages/Appointmentspageuser";
import Homeproviderappointments from "./pages/Homeproviderappointments";
import CategoryPageSignIn from "./pages/CategorySignIn";

function App() {
  return (
    <Routes>
      <Route path="/" element={<InitPage />} />
      <Route path="/category" element={<CategoryPage />} />
      <Route path="/category-sign-in" element={<CategoryPageSignIn />} />
      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/sign-in-provider" element={<SignUpPageProvider />} />
      <Route path="/sign-up-user" element={<SignUpPageUser />} />
      <Route path="/sign-up-provider" element={<SignUpPageProvider />} />
      <Route path="/home" element={<HomePage />} />
      <Route
        path="/appointments-page-user"
        element={<AppointmentsPageUser />}
      />
      <Route
        path="/appointments-page-user"
        element={<Homeproviderappointments />}
      />
    </Routes>
  );
}

export default App;
