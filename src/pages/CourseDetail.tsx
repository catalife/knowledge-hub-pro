import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PlayCircle, CheckCircle, Lock, ArrowRight } from "lucide-react";
import { useState } from "react";

const lessons = [
  { id: 1, title: "Introduction to the Course", duration: "5:30", completed: true, locked: false },
  { id: 2, title: "Setting Up Your Environment", duration: "12:45", completed: true, locked: false },
  { id: 3, title: "Core Concepts Deep Dive", duration: "18:20", completed: false, locked: false },
  { id: 4, title: "Building Your First Project", duration: "25:10", completed: false, locked: false },
  { id: 5, title: "Advanced Patterns", duration: "22:00", completed: false, locked: true },
  { id: 6, title: "Testing & Best Practices", duration: "15:40", completed: false, locked: true },
];

const CourseDetail = () => {
  const { id } = useParams();
  const [activeLesson, setActiveLesson] = useState(3);

  return (
    <div className="min-h-screen py-8">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Video Player */}
          <div className="lg:col-span-2">
            <div className="mb-4 aspect-video rounded-xl bg-primary/5 border flex items-center justify-center">
              <div className="text-center">
                <PlayCircle className="mx-auto mb-3 h-16 w-16 text-primary/40" />
                <p className="text-muted-foreground">Lesson {activeLesson}: {lessons[activeLesson - 1]?.title}</p>
                <p className="text-sm text-muted-foreground/60 mt-1">Video player placeholder</p>
              </div>
            </div>

            <h1 className="mb-2 font-display text-2xl font-bold">React Fundamentals</h1>
            <p className="mb-6 text-muted-foreground">
              Master the core concepts of React including hooks, state management, and component architecture.
            </p>

            <Link to="/quiz/1">
              <Button className="gap-2">
                Take Module Quiz <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Lesson List */}
          <div className="rounded-xl border bg-card p-4 shadow-card h-fit">
            <h2 className="mb-4 font-display text-lg font-semibold">Course Content</h2>
            <div className="space-y-1">
              {lessons.map((l) => (
                <button
                  key={l.id}
                  onClick={() => !l.locked && setActiveLesson(l.id)}
                  disabled={l.locked}
                  className={`flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left text-sm transition-colors ${
                    activeLesson === l.id ? "bg-primary/10 text-primary" : "hover:bg-muted"
                  } ${l.locked ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
                >
                  {l.completed ? (
                    <CheckCircle className="h-5 w-5 shrink-0 text-success" />
                  ) : l.locked ? (
                    <Lock className="h-5 w-5 shrink-0 text-muted-foreground" />
                  ) : (
                    <PlayCircle className="h-5 w-5 shrink-0" />
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="truncate font-medium">{l.title}</p>
                    <p className="text-xs text-muted-foreground">{l.duration}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
