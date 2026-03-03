import { Link } from "react-router-dom";
import { Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const courses = [
  { id: 1, title: "React Fundamentals", desc: "Build modern UIs with React hooks and components", lessons: 24, duration: "12h", students: 1240, category: "Frontend" },
  { id: 2, title: "Node.js Backend Development", desc: "Create scalable APIs with Express and Node", lessons: 18, duration: "9h", students: 890, category: "Backend" },
  { id: 3, title: "UI/UX Design Principles", desc: "Design beautiful, usable interfaces", lessons: 15, duration: "7h", students: 2100, category: "Design" },
  { id: 4, title: "Python for Data Science", desc: "Analyze data with pandas and matplotlib", lessons: 30, duration: "15h", students: 3200, category: "Data" },
  { id: 5, title: "TypeScript Mastery", desc: "Level up your JavaScript with strong typing", lessons: 20, duration: "10h", students: 750, category: "Frontend" },
  { id: 6, title: "Database Design", desc: "Model and optimize relational databases", lessons: 16, duration: "8h", students: 620, category: "Backend" },
];

const Courses = () => (
  <div className="min-h-screen py-8">
    <div className="container">
      <div className="mb-8">
        <h1 className="font-display text-3xl font-bold">Explore Courses</h1>
        <p className="mt-1 text-muted-foreground">Browse our catalog and start learning</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((c) => (
          <div key={c.id} className="group rounded-xl border bg-card shadow-card transition-shadow hover:shadow-card-hover overflow-hidden">
            <div className="gradient-hero h-32 flex items-end p-4">
              <span className="rounded-full bg-secondary/90 px-3 py-1 text-xs font-semibold text-secondary-foreground">
                {c.category}
              </span>
            </div>
            <div className="p-5">
              <h3 className="mb-1 font-display text-lg font-semibold">{c.title}</h3>
              <p className="mb-4 text-sm text-muted-foreground">{c.desc}</p>
              <div className="mb-4 flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {c.duration}</span>
                <span className="flex items-center gap-1"><Users className="h-4 w-4" /> {c.students.toLocaleString()}</span>
              </div>
              <Link to={`/course/${c.id}`}>
                <Button className="w-full" size="sm">View Course</Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Courses;
