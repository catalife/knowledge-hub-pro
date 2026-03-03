import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { PlayCircle, Clock, Trophy, TrendingUp } from "lucide-react";

const enrolledCourses = [
  { id: 1, title: "React Fundamentals", progress: 72, lessons: 24, duration: "12h", category: "Frontend" },
  { id: 2, title: "Node.js Backend Development", progress: 45, lessons: 18, duration: "9h", category: "Backend" },
  { id: 3, title: "UI/UX Design Principles", progress: 90, lessons: 15, duration: "7h", category: "Design" },
];

const stats = [
  { label: "Courses Enrolled", value: "3", icon: PlayCircle },
  { label: "Hours Learned", value: "28", icon: Clock },
  { label: "Quizzes Passed", value: "12", icon: Trophy },
  { label: "Current Streak", value: "5 days", icon: TrendingUp },
];

const Dashboard = () => (
  <div className="min-h-screen py-8">
    <div className="container">
      <div className="mb-8">
        <h1 className="font-display text-3xl font-bold">Welcome back, Jane 👋</h1>
        <p className="mt-1 text-muted-foreground">Continue where you left off</p>
      </div>

      {/* Stats */}
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

      {/* Enrolled Courses */}
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

export default Dashboard;
