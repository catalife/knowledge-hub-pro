import { Link } from "react-router-dom";
import { Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";

const courses = [
  { id: 1, title: "Advance Diploma in Clinical Research", desc: "In-depth knowledge of clinical research processes, protocols, and regulatory requirements", lessons: 32, duration: "6 months", students: 150, category: "Clinical Research" },
  { id: 2, title: "PG Diploma in Clinical Research", desc: "Postgraduate-level training covering advanced clinical trial management and biostatistics", lessons: 40, duration: "12 months", students: 120, category: "Clinical Research" },
  { id: 3, title: "Advance Diploma in Medical Writing", desc: "Master regulatory writing, clinical study reports, and scientific documentation", lessons: 24, duration: "6 months", students: 90, category: "Medical Writing" },
  { id: 4, title: "Advance Diploma in Clinical Data Management", desc: "Data collection, validation, and management in clinical trials for data professionals", lessons: 28, duration: "6 months", students: 100, category: "Data Management" },
  { id: 5, title: "Advance Diploma in Pharmacovigilance", desc: "Principles and practices of drug safety, risk assessment, and adverse event reporting", lessons: 26, duration: "6 months", students: 110, category: "Pharmacovigilance" },
  { id: 6, title: "Public Speaking Certificate Course", desc: "Build confidence in presentations, communication, and public speaking for professionals", lessons: 12, duration: "3 months", students: 80, category: "Soft Skills" },
  { id: 7, title: "Certificate Course of Soft Skills", desc: "Improve communication, teamwork, and leadership skills for the clinical research field", lessons: 14, duration: "3 months", students: 75, category: "Soft Skills" },
];

const Courses = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary/5 via-background to-primary/5 py-8">
      <div className="container">
        <div className="mb-8">
          <h1 className="font-display text-3xl font-bold">Our Courses</h1>
          <p className="mt-1 text-muted-foreground">Explore CataLife's comprehensive pharmacy and clinical research programs</p>
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
                  <span className="flex items-center gap-1"><Users className="h-4 w-4" /> {c.students.toLocaleString()} students</span>
                </div>
                <Link to={isLoggedIn ? `/course/${c.id}` : "/login"}>
                  <Button className="w-full" size="sm">{isLoggedIn ? "View Course" : "Login to Enroll"}</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
