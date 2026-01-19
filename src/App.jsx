import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Chat from "./pages/Chat";

function App() {
  const { user, loading } = useAuth();

  // 🔒 Wait for Firebase auth to initialize
  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center text-lg font-semibold">
        Loading...
      </div>
    );
  }

  return (
    <Routes>
      {/* Public */}
      <Route path="/" element={<Home />} />

      {/* Login */}
      <Route
        path="/login"
        element={!user ? <Login /> : <Navigate to="/chat" replace />}
      />

      {/* Protected Chat */}
      <Route
        path="/chat"
        element={user ? <Chat /> : <Navigate to="/login" replace />}
      />

      {/* Fallback */}
      <Route
        path="*"
        element={<Navigate to={user ? "/chat" : "/login"} replace />}
      />
    </Routes>
  );
}

export default App;
