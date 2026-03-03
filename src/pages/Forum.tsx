import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare, ThumbsUp, Clock, User } from "lucide-react";

const initialPosts = [
  { id: 1, author: "Alex Chen", avatar: "AC", title: "How to handle async state in React?", body: "I'm struggling with managing loading states when fetching data. What patterns do you recommend?", time: "2 hours ago", likes: 12, replies: 5, category: "React" },
  { id: 2, author: "Sarah Kim", avatar: "SK", title: "Best resources for learning TypeScript?", body: "Looking for intermediate-level resources. Already know the basics.", time: "5 hours ago", likes: 8, replies: 3, category: "TypeScript" },
  { id: 3, author: "Mike Johnson", avatar: "MJ", title: "Database indexing tips", body: "Can someone explain when to use composite indexes vs single column indexes?", time: "1 day ago", likes: 15, replies: 7, category: "Database" },
  { id: 4, author: "Emily Davis", avatar: "ED", title: "CSS Grid vs Flexbox — when to use which?", body: "I always default to flexbox. When should I really be using Grid instead?", time: "2 days ago", likes: 20, replies: 11, category: "CSS" },
];

const Forum = () => {
  const [posts, setPosts] = useState(initialPosts);
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handlePost = () => {
    if (!title.trim() || !body.trim()) return;
    setPosts([{
      id: Date.now(), author: "You", avatar: "YO", title, body,
      time: "Just now", likes: 0, replies: 0, category: "General"
    }, ...posts]);
    setTitle("");
    setBody("");
    setShowForm(false);
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container max-w-3xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="font-display text-3xl font-bold">Community Forum</h1>
            <p className="mt-1 text-muted-foreground">Ask questions, share knowledge</p>
          </div>
          <Button onClick={() => setShowForm(!showForm)} className="font-semibold">
            {showForm ? "Cancel" : "New Post"}
          </Button>
        </div>

        {showForm && (
          <div className="mb-6 rounded-xl border bg-card p-5 shadow-card">
            <Input
              placeholder="Post title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mb-3 font-medium"
            />
            <Textarea
              placeholder="What's on your mind?"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              rows={3}
              className="mb-3"
            />
            <Button onClick={handlePost} className="font-semibold">Post to Forum</Button>
          </div>
        )}

        <div className="space-y-4">
          {posts.map((p) => (
            <div key={p.id} className="rounded-xl border bg-card p-5 shadow-card transition-shadow hover:shadow-card-hover">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  {p.avatar}
                </div>
                <div>
                  <p className="text-sm font-medium">{p.author}</p>
                  <p className="flex items-center gap-1 text-xs text-muted-foreground"><Clock className="h-3 w-3" /> {p.time}</p>
                </div>
                <span className="ml-auto rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">{p.category}</span>
              </div>
              <h3 className="mb-1 font-display text-lg font-semibold">{p.title}</h3>
              <p className="mb-4 text-sm text-muted-foreground">{p.body}</p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <button className="flex items-center gap-1 hover:text-primary transition-colors">
                  <ThumbsUp className="h-4 w-4" /> {p.likes}
                </button>
                <span className="flex items-center gap-1">
                  <MessageSquare className="h-4 w-4" /> {p.replies} replies
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Forum;
