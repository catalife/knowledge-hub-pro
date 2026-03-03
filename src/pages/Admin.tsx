import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, BookOpen, Upload, BarChart3, Trash2, Plus } from "lucide-react";

const students = [
  { id: 1, name: "Jane Doe", email: "jane@example.com", courses: 3, quizScore: "85%" },
  { id: 2, name: "Alex Chen", email: "alex@example.com", courses: 2, quizScore: "72%" },
  { id: 3, name: "Sarah Kim", email: "sarah@example.com", courses: 4, quizScore: "91%" },
  { id: 4, name: "Mike Johnson", email: "mike@example.com", courses: 1, quizScore: "68%" },
];

const adminCourses = [
  { id: 1, title: "React Fundamentals", students: 1240, videos: 24, status: "Published" },
  { id: 2, title: "Node.js Backend", students: 890, videos: 18, status: "Published" },
  { id: 3, title: "UI/UX Design", students: 2100, videos: 15, status: "Draft" },
];

const stats = [
  { label: "Total Students", value: "4,120", icon: Users },
  { label: "Active Courses", value: "12", icon: BookOpen },
  { label: "Videos Uploaded", value: "186", icon: Upload },
  { label: "Avg. Quiz Score", value: "78%", icon: BarChart3 },
];

const Admin = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="container">
        <div className="mb-8">
          <h1 className="font-display text-3xl font-bold">Admin Dashboard</h1>
          <p className="mt-1 text-muted-foreground">Manage courses, students, and content</p>
        </div>

        {/* Stats */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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

        <Tabs defaultValue="courses">
          <TabsList className="mb-6">
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="students">Students</TabsTrigger>
            <TabsTrigger value="upload">Upload Video</TabsTrigger>
          </TabsList>

          <TabsContent value="courses">
            <div className="rounded-xl border bg-card shadow-card overflow-hidden">
              <div className="flex items-center justify-between border-b p-4">
                <h2 className="font-display font-semibold">All Courses</h2>
                <Button size="sm" className="gap-1"><Plus className="h-4 w-4" /> Add Course</Button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b bg-muted/50">
                      <th className="px-4 py-3 text-left font-medium text-muted-foreground">Course</th>
                      <th className="px-4 py-3 text-left font-medium text-muted-foreground">Students</th>
                      <th className="px-4 py-3 text-left font-medium text-muted-foreground">Videos</th>
                      <th className="px-4 py-3 text-left font-medium text-muted-foreground">Status</th>
                      <th className="px-4 py-3 text-left font-medium text-muted-foreground">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {adminCourses.map((c) => (
                      <tr key={c.id} className="border-b last:border-0">
                        <td className="px-4 py-3 font-medium">{c.title}</td>
                        <td className="px-4 py-3 text-muted-foreground">{c.students.toLocaleString()}</td>
                        <td className="px-4 py-3 text-muted-foreground">{c.videos}</td>
                        <td className="px-4 py-3">
                          <span className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${
                            c.status === "Published" ? "bg-success/10 text-success" : "bg-warning/10 text-warning"
                          }`}>
                            {c.status}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <Button variant="ghost" size="sm"><Trash2 className="h-4 w-4 text-destructive" /></Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="students">
            <div className="rounded-xl border bg-card shadow-card overflow-hidden">
              <div className="border-b p-4">
                <h2 className="font-display font-semibold">All Students</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b bg-muted/50">
                      <th className="px-4 py-3 text-left font-medium text-muted-foreground">Name</th>
                      <th className="px-4 py-3 text-left font-medium text-muted-foreground">Email</th>
                      <th className="px-4 py-3 text-left font-medium text-muted-foreground">Courses</th>
                      <th className="px-4 py-3 text-left font-medium text-muted-foreground">Avg. Quiz</th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.map((s) => (
                      <tr key={s.id} className="border-b last:border-0">
                        <td className="px-4 py-3 font-medium">{s.name}</td>
                        <td className="px-4 py-3 text-muted-foreground">{s.email}</td>
                        <td className="px-4 py-3 text-muted-foreground">{s.courses}</td>
                        <td className="px-4 py-3 text-muted-foreground">{s.quizScore}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="upload">
            <div className="mx-auto max-w-lg rounded-xl border bg-card p-6 shadow-card">
              <h2 className="mb-4 font-display text-lg font-semibold">Upload Course Video</h2>
              <div className="space-y-4">
                <Input placeholder="Video title" />
                <Input placeholder="Course name" />
                <div className="flex h-32 cursor-pointer items-center justify-center rounded-lg border-2 border-dashed border-border hover:border-primary/30 transition-colors">
                  <div className="text-center">
                    <Upload className="mx-auto mb-2 h-8 w-8 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">Click to upload or drag & drop</p>
                    <p className="text-xs text-muted-foreground/60">MP4, MOV up to 500MB</p>
                  </div>
                </div>
                <Button className="w-full font-semibold">Upload Video</Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
