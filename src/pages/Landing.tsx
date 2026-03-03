import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PlayCircle, Users, Trophy, MessageSquare, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-illustration.jpg";

const features = [
  { icon: PlayCircle, title: "Video Courses", desc: "HD knowledge videos organized into structured learning paths" },
  { icon: Trophy, title: "Interactive Quizzes", desc: "Test your understanding with quizzes after every module" },
  { icon: Users, title: "Student Accounts", desc: "Personal dashboards to track progress and achievements" },
  { icon: MessageSquare, title: "Community Forum", desc: "Ask questions, share knowledge, and collaborate" },
];

const Landing = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="gradient-hero relative overflow-hidden py-24 md:py-32">
        <div className="container relative z-10 grid items-center gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-4 inline-block rounded-full bg-secondary/20 px-4 py-1.5 text-sm font-medium text-secondary">
              Learn at your pace
            </span>
            <h1 className="mb-6 font-display text-4xl font-bold leading-tight text-primary-foreground md:text-6xl">
              Master new skills with expert-led courses
            </h1>
            <p className="mb-8 max-w-lg text-lg text-primary-foreground/70">
              Watch curated video lessons, test your knowledge with quizzes, and connect with a community of learners.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/signup">
                <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold gap-2">
                  Start Learning <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/courses">
                <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                  Browse Courses
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:block"
          >
            <img
              src={heroImage}
              alt="Online learning illustration"
              className="rounded-2xl shadow-hero"
            />
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-display text-3xl font-bold md:text-4xl">Everything you need to learn</h2>
            <p className="mx-auto max-w-xl text-muted-foreground">
              A complete learning platform built for students and educators
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl border bg-card p-6 shadow-card transition-shadow hover:shadow-card-hover"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <f.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 font-display text-lg font-semibold">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t bg-muted/50 py-20">
        <div className="container text-center">
          <h2 className="mb-4 font-display text-3xl font-bold">Ready to start learning?</h2>
          <p className="mx-auto mb-8 max-w-md text-muted-foreground">
            Join thousands of students already advancing their skills.
          </p>
          <Link to="/signup">
            <Button size="lg" className="gap-2 font-semibold">
              Create Free Account <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">© 2026 LearnHub. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
