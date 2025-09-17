import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  //   Load token from localStorage
  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const Login = (backendJwt) => {
    setToken(backendJwt);
    localStorage.setItem("authToken", backendJwt);
    navigate("/dashboard");
  };

  const Logout = () => {
    setToken(null);
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  const value = {
    token,
    Login,
    Logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook for access to AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};
