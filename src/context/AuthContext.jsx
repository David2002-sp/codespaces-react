import React, { createContext, useState, useEffect } from "react";

const AUTH_KEY = "auth_user";

export const AuthContext = createContext({
  user: null,
  login: async () => {},
  logout: () => {},
});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem(AUTH_KEY);
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    if (user) localStorage.setItem(AUTH_KEY, JSON.stringify(user));
    else localStorage.removeItem(AUTH_KEY);
  }, [user]);

  async function login(username, password) {
    await new Promise((res) => setTimeout(res, 700));
    if (username === "admin" && password === "1234") {
      setUser({ username });
      return;
    }
    throw new Error("Credenciales incorrectas");
  }

  function logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
