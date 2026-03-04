import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Stethoscope } from "lucide-react";

const Login = () => (
  <div className="flex min-h-screen items-center justify-center bg-muted/30 p-4">
    <div className="w-full max-w-md space-y-8">
      <div className="text-center">
        <Link to="/" className="mx-auto mb-4 flex items-center justify-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <Stethoscope className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="font-display text-2xl font-bold">CataLife</span>
        </Link>
        <h1 className="font-display text-2xl font-bold">Welcome back</h1>
        <p className="mt-1 text-sm text-muted-foreground">Sign in to continue learning</p>
      </div>

      <div className="rounded-xl border bg-card p-6 shadow-card">
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="you@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="••••••••" />
          </div>
          <Button className="w-full font-semibold" type="submit">Sign in</Button>
        </form>
      </div>

      <p className="text-center text-sm text-muted-foreground">
        Don't have an account?{" "}
        <Link to="/signup" className="font-medium text-primary hover:underline">Sign up</Link>
      </p>
    </div>
  </div>
);

export default Login;
