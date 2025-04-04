import { BrowserRouter, Route, Routes } from "react-router";
import CryptoTracker from "./components/pages/crypto/CryptoTracker";
import ErrorPage from "./components/pages/error/ErrorPage";
import CryptoDetail from "./components/pages/cryptoDetails/CryptoDetail";
import LoginPage from "./components/pages/login/LoginPage";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<ErrorPage />} />
          <Route path="/" element={<CryptoTracker />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/crypto/:id" element={<CryptoDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
