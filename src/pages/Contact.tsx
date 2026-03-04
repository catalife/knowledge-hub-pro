import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Instagram, Send, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be under 100 characters"),
  email: z.string().trim().email("Please enter a valid email").max(255),
  subject: z.string().trim().min(1, "Subject is required").max(200),
  message: z.string().trim().min(1, "Message is required").max(2000, "Message must be under 2000 characters"),
});

const contactInfo = [
  { icon: MapPin, label: "Address", value: "CataLife Training Organization, Pune, Maharashtra, India" },
  { icon: Phone, label: "Phone", value: "+91 8483844076", href: "tel:+918483844076" },
  { icon: Mail, label: "Email", value: "info@catalife.in", href: "mailto:info@catalife.in" },
  { icon: Clock, label: "Hours", value: "Mon – Sat, 9:00 AM – 6:00 PM" },
];

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    const encodedMsg = encodeURIComponent(
      `Name: ${result.data.name}\nEmail: ${result.data.email}\nSubject: ${result.data.subject}\n\n${result.data.message}`
    );
    window.open(`https://wa.me/918483844076?text=${encodedMsg}`, "_blank");

    toast({ title: "Message sent!", description: "We'll get back to you soon via WhatsApp." });
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/15 via-secondary/10 to-accent/20 py-12">
      <div className="container max-w-5xl">
        <div className="mb-10 text-center">
          <h1 className="font-display text-4xl font-bold">Get in Touch</h1>
          <p className="mt-2 text-muted-foreground">Have questions about our courses? We'd love to hear from you.</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            {contactInfo.map((item) => (
              <div key={item.label} className="flex gap-4 rounded-xl border bg-card p-4 shadow-card">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-sm font-medium hover:text-primary transition-colors">{item.value}</a>
                  ) : (
                    <p className="text-sm font-medium">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            <a
              href="https://www.instagram.com/_catalife_organization_/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border bg-gradient-to-r from-pink-500/10 to-purple-500/10 p-4 shadow-card transition-shadow hover:shadow-card-hover"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-pink-500/10">
                <Instagram className="h-5 w-5 text-pink-600" />
              </div>
              <div>
                <p className="text-xs font-medium text-muted-foreground">Instagram</p>
                <p className="text-sm font-medium">@_catalife_organization_</p>
              </div>
            </a>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 rounded-xl border bg-card p-6 shadow-card">
            <h2 className="mb-5 font-display text-xl font-semibold">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" name="name" placeholder="Your name" value={form.name} onChange={handleChange} />
                  {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="you@example.com" value={form.email} onChange={handleChange} />
                  {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
                </div>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" name="subject" placeholder="e.g., Course Inquiry" value={form.subject} onChange={handleChange} />
                {errors.subject && <p className="text-xs text-destructive">{errors.subject}</p>}
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" placeholder="Tell us how we can help..." rows={4} value={form.message} onChange={handleChange} />
                {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
              </div>
              <Button type="submit" className="w-full gap-2 font-semibold">
                <Send className="h-4 w-4" /> Send via WhatsApp
              </Button>
              <p className="text-xs text-center text-muted-foreground">
                Your message will be sent via WhatsApp to our team.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
