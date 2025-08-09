import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

/**
 * Simple auth provider using localStorage.
 * User object shape: { id, name, email, role }
 */
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const raw = localStorage.getItem("tt_user");
    if (raw) setUser(JSON.parse(raw));
  }, []);

  const login = (userObj) => {
    setUser(userObj);
    localStorage.setItem("tt_user", JSON.stringify(userObj));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("tt_user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
