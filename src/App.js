import { Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import "./App.css";
import {
  Navbar,
  Login,
  Signup,
  Home,
  PurchasedCourses,
  ProtectedRoute,
} from "./components/index";

function App() {
  return (
    <>
      <RecoilRoot>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/purchasedCourses"
            element={
              <ProtectedRoute>
                <PurchasedCourses />
              </ProtectedRoute>
            }
          />
        </Routes>
      </RecoilRoot>
    </>
  );
}

export default App;
