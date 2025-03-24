import { BrowserRouter, Route, Routes } from "react-router";
import CryptoTracker from "./components/pages/crypto/CryptoTracker";
import ErrorPage from "./components/pages/error/ErrorPage";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<ErrorPage />} />
          <Route path="/" element={<CryptoTracker />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
