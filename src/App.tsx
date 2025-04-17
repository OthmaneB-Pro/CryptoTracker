import { BrowserRouter, Route, Routes } from "react-router";
import CryptoTracker from "./components/pages/crypto/CryptoTracker";
import ErrorPage from "./components/pages/error/ErrorPage";
import CryptoDetail from "./components/pages/cryptoDetails/CryptoDetail";
import LoginPage from "./components/pages/login/LoginPage";
import { UserContext } from "./context/UserContext";
import { useState } from "react";

export default function App() {
  const [username, setUsername] = useState<string>("");
  const UserListValue = {
    username,
    setUsername,
  }
  return (
    <UserContext.Provider value={UserListValue}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<ErrorPage />} />
          <Route path="/:username" element={<CryptoTracker />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/crypto/:id" element={<CryptoDetail />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
