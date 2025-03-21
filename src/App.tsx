import { BrowserRouter, Route, Routes } from "react-router";
import CryptoTracker from "./components/pages/crypto/CryptoTracker";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CryptoTracker />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
