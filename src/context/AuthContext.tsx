import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface User {
  name: string;
  email: string;
  role: "student" | "admin";
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => boolean;
  signup: (name: string, email: string, password: string) => boolean;
  logout: () => void;
  isAdmin: boolean;
  isLoggedIn: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};

// Admin credentials
const ADMIN_EMAIL = "admin@catalife.in";
const ADMIN_PASSWORD = "admin123";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(() => {
    const stored = localStorage.getItem("catalife_user");
    return stored ? JSON.parse(stored) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem("catalife_user", JSON.stringify(user));
    } else {
      localStorage.removeItem("catalife_user");
    }
  }, [user]);

  const login = (email: string, password: string): boolean => {
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      setUser({ name: "Admin", email, role: "admin" });
      return true;
    }
    // Any other email/password combo logs in as student
    if (email && password) {
      setUser({ name: email.split("@")[0], email, role: "student" });
      return true;
    }
    return false;
  };

  const signup = (name: string, email: string, password: string): boolean => {
    if (name && email && password) {
      setUser({ name, email, role: "student" });
      return true;
    }
    return false;
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{
      user,
      login,
      signup,
      logout,
      isAdmin: user?.role === "admin",
      isLoggedIn: !!user,
    }}>
      {children}
    </AuthContext.Provider>
  );
};
