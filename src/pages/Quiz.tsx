import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const questions = [
  {
    question: "What hook is used to manage state in a functional component?",
    options: ["useEffect", "useState", "useRef", "useMemo"],
    correct: 1,
  },
  {
    question: "Which method is used to render a React component to the DOM?",
    options: ["React.render()", "ReactDOM.createRoot()", "React.mount()", "ReactDOM.append()"],
    correct: 1,
  },
  {
    question: "What is JSX?",
    options: ["A database query language", "A CSS framework", "A syntax extension for JavaScript", "A testing library"],
    correct: 2,
  },
  {
    question: "How do you pass data from parent to child component?",
    options: ["Using state", "Using props", "Using context only", "Using localStorage"],
    correct: 1,
  },
];

const Quiz = () => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const isFinished = answers.length === questions.length;
  const score = answers.filter((a, i) => a === questions[i].correct).length;

  const handleNext = () => {
    if (selected === null) return;
    const newAnswers = [...answers, selected];
    setAnswers(newAnswers);
    setSelected(null);

    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      setSubmitted(true);
    }
  };

  if (submitted && isFinished) {
    const passed = score >= Math.ceil(questions.length * 0.7);
    return (
      <div className="flex min-h-screen items-center justify-center py-8">
        <div className="w-full max-w-md text-center">
          <div className={`mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full ${passed ? "bg-success/10" : "bg-destructive/10"}`}>
            {passed ? <CheckCircle className="h-10 w-10 text-success" /> : <XCircle className="h-10 w-10 text-destructive" />}
          </div>
          <h1 className="mb-2 font-display text-3xl font-bold">{passed ? "Quiz Passed!" : "Keep Practicing"}</h1>
          <p className="mb-6 text-muted-foreground">
            You scored {score} out of {questions.length} ({Math.round((score / questions.length) * 100)}%)
          </p>
          <div className="flex justify-center gap-3">
            <Link to="/dashboard">
              <Button variant="outline">Back to Dashboard</Button>
            </Link>
            <Button onClick={() => { setCurrent(0); setSelected(null); setAnswers([]); setSubmitted(false); }}>
              Retry Quiz
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const q = questions[current];

  return (
    <div className="flex min-h-screen items-center justify-center py-8">
      <div className="w-full max-w-lg">
        <div className="mb-6">
          <div className="mb-2 flex items-center justify-between text-sm text-muted-foreground">
            <span>Question {current + 1} of {questions.length}</span>
            <span>{Math.round(((current + 1) / questions.length) * 100)}%</span>
          </div>
          <div className="h-2 rounded-full bg-muted">
            <div
              className="h-2 rounded-full bg-primary transition-all"
              style={{ width: `${((current + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        <div className="rounded-xl border bg-card p-6 shadow-card">
          <h2 className="mb-6 font-display text-xl font-semibold">{q.question}</h2>
          <div className="space-y-3">
            {q.options.map((opt, i) => (
              <button
                key={i}
                onClick={() => setSelected(i)}
                className={`w-full rounded-lg border p-4 text-left text-sm font-medium transition-colors ${
                  selected === i
                    ? "border-primary bg-primary/5 text-primary"
                    : "border-border hover:border-primary/30 hover:bg-muted/50"
                }`}
              >
                <span className="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full border text-xs">
                  {String.fromCharCode(65 + i)}
                </span>
                {opt}
              </button>
            ))}
          </div>
          <Button
            className="mt-6 w-full gap-2 font-semibold"
            onClick={handleNext}
            disabled={selected === null}
          >
            {current < questions.length - 1 ? "Next Question" : "Submit Quiz"} <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
