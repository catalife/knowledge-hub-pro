import { Link, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { PlayCircle, Clock, Trophy, TrendingUp } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

const enrolledCourses = [
  { id: 1, title: "Advance Diploma in Clinical Research", progress: 72, lessons: 32, duration: "6 months", category: "Clinical Research" },
  { id: 5, title: "Advance Diploma in Pharmacovigilance", progress: 45, lessons: 26, duration: "6 months", category: "Pharmacovigilance" },
  { id: 3, title: "Advance Diploma in Medical Writing", progress: 90, lessons: 24, duration: "6 months", category: "Medical Writing" },
];

const stats = [
  { label: "Courses Enrolled", value: "3", icon: PlayCircle },
  { label: "Hours Learned", value: "128", icon: Clock },
  { label: "Quizzes Passed", value: "18", icon: Trophy },
  { label: "Current Streak", value: "12 days", icon: TrendingUp },
];

const Dashboard = () => {
  const { isLoggedIn, user } = useAuth();

  if (!isLoggedIn) return <Navigate to="/login" replace />;

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 via-background to-secondary/5 py-8">
      <div className="container">
        <div className="mb-8">
          <h1 className="font-display text-3xl font-bold">Welcome back, {user?.name} 👋</h1>
          <p className="mt-1 text-muted-foreground">Continue your clinical research training</p>
        </div>

        <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-xl border bg-card p-5 shadow-card">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <s.icon className="h-5 w-5 text-primary" />
              </div>
              <p className="font-display text-2xl font-bold">{s.value}</p>
              <p className="text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-display text-xl font-bold">My Courses</h2>
          <Link to="/courses">
            <Button variant="ghost" size="sm">View all</Button>
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {enrolledCourses.map((c) => (
            <Link key={c.id} to={`/course/${c.id}`} className="group">
              <div className="rounded-xl border bg-card p-5 shadow-card transition-shadow hover:shadow-card-hover">
                <span className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {c.category}
                </span>
                <h3 className="mb-1 font-display text-lg font-semibold group-hover:text-primary transition-colors">{c.title}</h3>
                <p className="mb-4 text-sm text-muted-foreground">{c.lessons} lessons · {c.duration}</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-medium">{c.progress}%</span>
                  </div>
                  <Progress value={c.progress} className="h-2" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
