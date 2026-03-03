import { Link, useLocation } from "react-router-dom";
import { BookOpen, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const isAuth = location.pathname === "/login" || location.pathname === "/signup";

  if (isAuth) return null;

  return (
    <nav className="sticky top-0 z-50 border-b bg-card/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <BookOpen className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="font-display text-xl font-bold text-foreground">LearnHub</span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          <Link to="/dashboard" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Dashboard
          </Link>
          <Link to="/courses" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Courses
          </Link>
          <Link to="/forum" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Forum
          </Link>
          <Link to="/admin" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Admin
          </Link>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Link to="/login">
            <Button variant="ghost" size="sm">Log in</Button>
          </Link>
          <Link to="/signup">
            <Button size="sm">Get Started</Button>
          </Link>
        </div>

        <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t bg-card p-4 md:hidden">
          <div className="flex flex-col gap-3">
            <Link to="/dashboard" className="text-sm font-medium" onClick={() => setMobileOpen(false)}>Dashboard</Link>
            <Link to="/courses" className="text-sm font-medium" onClick={() => setMobileOpen(false)}>Courses</Link>
            <Link to="/forum" className="text-sm font-medium" onClick={() => setMobileOpen(false)}>Forum</Link>
            <Link to="/admin" className="text-sm font-medium" onClick={() => setMobileOpen(false)}>Admin</Link>
            <div className="flex gap-2 pt-2">
              <Link to="/login"><Button variant="ghost" size="sm">Log in</Button></Link>
              <Link to="/signup"><Button size="sm">Get Started</Button></Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
