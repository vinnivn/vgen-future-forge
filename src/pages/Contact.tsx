import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { Phone, Mail, MapPin, Send, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  school: z.string().trim().max(150).optional(),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().min(5, "Phone is required").max(30),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", school: "", email: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = contactSchema.safeParse(form);
    if (!parsed.success) {
      const first = Object.values(parsed.error.flatten().fieldErrors)[0]?.[0];
      toast({ title: "Please check the form", description: first ?? "Invalid input", variant: "destructive" });
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      if (!res.ok) throw new Error("Request failed");
      toast({
        title: "Message sent!",
        description: "Thank you for contacting VGEN. Our team will reach out to you shortly.",
      });
      setForm({ name: "", school: "", email: "", phone: "", message: "" });
    } catch {
      toast({
        title: "Submission failed",
        description: "Something went wrong. Please try again or email us directly at contact@vgen.co.in.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Contact Us"
          subtitle="Partner with VGEN to bring robotics education to your school."
          gradient
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <AnimatedSection>
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 card-shadow space-y-5">
              <h3 className="text-xl font-bold text-foreground mb-2">Send us a message</h3>
              <Input
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                disabled={loading}
                className="bg-muted/50"
              />
              <Input
                placeholder="School / Organization"
                value={form.school}
                onChange={(e) => setForm({ ...form, school: e.target.value })}
                disabled={loading}
                className="bg-muted/50"
              />
              <Input
                type="email"
                placeholder="Email Address"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                disabled={loading}
                className="bg-muted/50"
              />
              <Input
                placeholder="Phone Number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                required
                disabled={loading}
                className="bg-muted/50"
              />
              <Textarea
                placeholder="Your Message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                disabled={loading}
                rows={4}
                className="bg-muted/50"
              />
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-hero-gradient text-primary-foreground hover:opacity-90 font-semibold"
              >
                {loading ? (
                  <>
                    <Loader2 size={16} className="mr-2 animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} className="mr-2" /> Send Message
                  </>
                )}
              </Button>
            </form>
          </AnimatedSection>

          {/* Info */}
          <AnimatedSection delay={150}>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4">Get in touch</h3>
                <p className="text-muted-foreground mb-8">
                  We'd love to hear from you. Reach out to discuss how VGEN can transform your school's STEM program.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { icon: Phone, label: "Phone", value: "+91 6363851378" },
                  { icon: Phone, label: "Phone", value: "+91 6364355011" },
                  { icon: Mail, label: "Email", value: "contact@vgen.co.in" },
                  { icon: MapPin, label: "Location", value: "Mysore, Karnataka, India" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-hero-gradient flex items-center justify-center flex-shrink-0">
                      <item.icon className="text-primary-foreground" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="font-medium text-foreground">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-hero-gradient rounded-xl p-6 text-primary-foreground mt-8">
                <h4 className="font-bold text-lg mb-2">Partner with Us</h4>
                <p className="text-primary-foreground/80 text-sm">
                  Join the growing network of schools offering future-ready robotics education to their students.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </main>
  );
};

export default Contact;
