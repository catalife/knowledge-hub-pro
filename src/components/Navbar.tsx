import { Link, useLocation, useNavigate } from "react-router-dom";
import { Stethoscope, Menu, X, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user, isAdmin, isLoggedIn, logout } = useAuth();
  const isAuth = location.pathname === "/login" || location.pathname === "/signup";

  if (isAuth) return null;

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="sticky top-0 z-50 border-b bg-card/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <Stethoscope className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="font-display text-xl font-bold text-foreground">CataLife</span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {isLoggedIn && (
            <Link to="/dashboard" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              Dashboard
            </Link>
          )}
          <Link to="/courses" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Courses
          </Link>
          {isLoggedIn && (
            <Link to="/forum" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              Forum
            </Link>
          )}
          {isAdmin && (
            <Link to="/admin" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              Admin
            </Link>
          )}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          {isLoggedIn ? (
            <>
              <span className="text-sm text-muted-foreground">Hi, {user?.name}</span>
              <Button variant="ghost" size="sm" onClick={handleLogout} className="gap-1">
                <LogOut className="h-4 w-4" /> Logout
              </Button>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button variant="ghost" size="sm">Log in</Button>
              </Link>
              <Link to="/signup">
                <Button size="sm">Get Started</Button>
              </Link>
            </>
          )}
        </div>

        <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t bg-card p-4 md:hidden">
          <div className="flex flex-col gap-3">
            {isLoggedIn && (
              <Link to="/dashboard" className="text-sm font-medium" onClick={() => setMobileOpen(false)}>Dashboard</Link>
            )}
            <Link to="/courses" className="text-sm font-medium" onClick={() => setMobileOpen(false)}>Courses</Link>
            {isLoggedIn && (
              <Link to="/forum" className="text-sm font-medium" onClick={() => setMobileOpen(false)}>Forum</Link>
            )}
            {isAdmin && (
              <Link to="/admin" className="text-sm font-medium" onClick={() => setMobileOpen(false)}>Admin</Link>
            )}
            <div className="flex gap-2 pt-2">
              {isLoggedIn ? (
                <Button variant="ghost" size="sm" onClick={() => { handleLogout(); setMobileOpen(false); }} className="gap-1">
                  <LogOut className="h-4 w-4" /> Logout
                </Button>
              ) : (
                <>
                  <Link to="/login"><Button variant="ghost" size="sm">Log in</Button></Link>
                  <Link to="/signup"><Button size="sm">Get Started</Button></Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
