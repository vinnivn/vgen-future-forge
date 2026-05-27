import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar } from "@/components/ui/calendar";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter,
} from "@/components/ui/dialog";
import AnimatedSection from "@/components/AnimatedSection";
import { cn } from "@/lib/utils";
import {
  User, Building2, Briefcase, Mail, Phone, MapPin, Map, Users, Layers,
  Clock, Hash, CalendarIcon, Wifi, MessageSquare, Loader2, Send,
  CheckCircle2, Sparkles, Award, Rocket, ShieldCheck, Wrench, GraduationCap,
  Check, ChevronDown,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const STATES = ["Karnataka", "Maharashtra", "Goa", "Telangana", "Tamil Nadu", "Kerala", "Andhra Pradesh", "Other"];
const AUDIENCE_TYPES = ["School", "College", "Institution", "Organization", "Individual", "Teachers Group", "NGO", "Community Group", "Startup", "Professional Group"];
const WORKSHOP_OPTIONS = [
  "Robotics & Innovation Workshop",
  "AI & Future Technology Workshop",
  "IoT & Smart Systems Workshop",
  "Beginner Coding & Game Development Workshop",
  "Web Development & Deployment Workshop",
  "Cyber Safety & Digital Awareness Workshop",
  "Innovation & Design Thinking Workshop",
  "Startup & Entrepreneurship Bootcamp",
  "Smart Agriculture & Rural Innovation Workshop",
  "Emerging Technology Bootcamp",
  "Customized Workshop",
];
const DURATIONS = ["Half Day", "1 Day", "2 Days", "3 Days", "1 Week", "Custom Duration"];
const PARTICIPANT_RANGES = ["50–100", "100–300", "300–500", "500+"];
const MODES = ["Offline", "Online", "Hybrid"];

const BENEFITS = [
  { icon: Wrench, text: "Hands-on practical learning" },
  { icon: Rocket, text: "Emerging technology exposure" },
  { icon: Briefcase, text: "Industry-oriented sessions" },
  { icon: GraduationCap, text: "Expert mentoring" },
  { icon: Award, text: "Certification support" },
  { icon: Sparkles, text: "Innovation-driven activities" },
  { icon: Layers, text: "Customizable workshop formats" },
  { icon: ShieldCheck, text: "Real-world project learning" },
];

const schema = z.object({
  name: z.string().trim().min(1, "Full name is required").max(100),
  organization: z.string().trim().min(1, "Organization is required").max(150),
  designation: z.string().trim().max(100).optional(),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().min(5, "Phone is required").max(30),
  city: z.string().trim().min(1, "City is required").max(100),
  state: z.string().trim().min(1, "Select a state"),
  audienceType: z.string().trim().min(1, "Select audience type"),
  workshops: z.array(z.string()).min(1, "Select at least one workshop"),
  duration: z.string().trim().min(1, "Select preferred duration"),
  participants: z.string().trim().min(1, "Select expected participants"),
  workshopDate: z.string().trim().optional(),
  mode: z.string().trim().min(1, "Select workshop mode"),
  message: z.string().trim().min(1, "Please describe your requirement").max(2000),
  consent: z.literal(true, { errorMap: () => ({ message: "Consent is required" }) }),
});

const initialForm = {
  name: "", organization: "", designation: "", email: "", phone: "",
  city: "", state: "", audienceType: "",
  workshops: [] as string[],
  duration: "", participants: "",
  workshopDate: undefined as Date | undefined,
  mode: "", message: "", consent: false,
};

const FieldIcon = ({ icon: Icon }: { icon: typeof User }) => (
  <Icon size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-primary/60 pointer-events-none z-10" />
);

const WorkshopEnquiryForm = () => {
  const { toast } = useToast();
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [highlight, setHighlight] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    const onPreselect = (e: Event) => {
      const ce = e as CustomEvent<{ title: string }>;
      const title = ce.detail?.title;
      if (!title) return;
      setForm((f) => ({
        ...f,
        workshops: WORKSHOP_OPTIONS.includes(title)
          ? Array.from(new Set([...f.workshops, title]))
          : Array.from(new Set([...f.workshops, "Customized Workshop"])),
      }));
      setHighlight(true);
      window.setTimeout(() => setHighlight(false), 2200);
    };
    window.addEventListener("workshop:preselect", onPreselect);
    return () => window.removeEventListener("workshop:preselect", onPreselect);
  }, []);

  const update = <K extends keyof typeof initialForm>(key: K, value: typeof initialForm[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const toggleWorkshop = (w: string) => {
    setForm((f) => ({
      ...f,
      workshops: f.workshops.includes(w) ? f.workshops.filter((x) => x !== w) : [...f.workshops, w],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      ...form,
      workshopDate: form.workshopDate ? format(form.workshopDate, "yyyy-MM-dd") : "",
    };
    const parsed = schema.safeParse(payload);
    if (!parsed.success) {
      const first = Object.values(parsed.error.flatten().fieldErrors)[0]?.[0];
      toast({
        title: "Please complete the form",
        description: first ?? "Some fields need attention",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/workshop-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      if (!res.ok) throw new Error("Request failed");
      setSuccess(true);
      setForm(initialForm);
    } catch {
      toast({
        title: "Submission failed",
        description: "Something went wrong. Please try again or email contact@vgen.co.in.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="workshop-enquiry" className="relative py-24 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 20%, hsl(263 91% 66% / 0.18), transparent 45%), radial-gradient(circle at 85% 70%, hsl(217 91% 60% / 0.15), transparent 50%)",
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-widest bg-hero-gradient text-primary-foreground px-3 py-1.5 rounded-full mb-5">
            Register · Enquire · Partner
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-5 text-gradient leading-tight">
            Workshop Registration &amp; Enquiry
          </h2>
          <p className="text-muted-foreground text-base md:text-lg mb-3">
            Interested in organizing a technology workshop, robotics session, innovation bootcamp, or future technology learning program? Submit your enquiry and our VGEN team will get in touch with you shortly.
          </p>
          <p className="text-sm text-foreground/60">
            Workshops available for schools, colleges, institutions, organizations, communities, professionals, and technology enthusiasts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Form */}
          <AnimatedSection className="lg:col-span-3">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className={cn(
                "relative rounded-3xl p-7 md:p-9 border border-border/60 bg-card/80 backdrop-blur-xl elevated-shadow transition-all duration-500",
                highlight && "ring-4 ring-primary/40 shadow-[0_0_60px_-10px_hsl(263_91%_66%/0.6)] animate-pulse"
              )}
            >
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
              <h3 className="text-xl font-bold text-foreground mb-1">Submit Your Enquiry</h3>
              <p className="text-sm text-muted-foreground mb-6">Fields marked * are required.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <IconInput icon={User} placeholder="Enter your full name *" value={form.name} onChange={(v) => update("name", v)} disabled={loading} />
                <IconInput icon={Building2} placeholder="Institution / Organization name *" value={form.organization} onChange={(v) => update("organization", v)} disabled={loading} />
                <IconInput icon={Briefcase} placeholder="Designation / Role" value={form.designation} onChange={(v) => update("designation", v)} disabled={loading} />
                <IconInput icon={Mail} type="email" placeholder="Enter email address *" value={form.email} onChange={(v) => update("email", v)} disabled={loading} />
                <IconInput icon={Phone} type="tel" placeholder="Enter contact number *" value={form.phone} onChange={(v) => update("phone", v)} disabled={loading} />
                <IconInput icon={MapPin} placeholder="Enter city or district *" value={form.city} onChange={(v) => update("city", v)} disabled={loading} />

                <IconSelect icon={Map} placeholder="Select state *" value={form.state} onChange={(v) => update("state", v)} options={STATES} disabled={loading} />
                <IconSelect icon={Users} placeholder="Audience type *" value={form.audienceType} onChange={(v) => update("audienceType", v)} options={AUDIENCE_TYPES} disabled={loading} />

                {/* Multi-select workshops */}
                <div className="md:col-span-2">
                  <Popover>
                    <PopoverTrigger asChild disabled={loading}>
                      <button
                        type="button"
                        className="relative w-full h-11 pl-10 pr-10 rounded-full bg-background/60 border border-input text-left text-sm hover:border-primary/40 transition flex items-center"
                      >
                        <Layers size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-primary/60" />
                        <span className={cn("truncate", form.workshops.length === 0 && "text-muted-foreground")}>
                          {form.workshops.length === 0
                            ? "Select workshops interested in *"
                            : `${form.workshops.length} selected · ${form.workshops.slice(0, 2).join(", ")}${form.workshops.length > 2 ? "…" : ""}`}
                        </span>
                        <ChevronDown size={16} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-2 max-h-72 overflow-y-auto" align="start">
                      {WORKSHOP_OPTIONS.map((w) => {
                        const selected = form.workshops.includes(w);
                        return (
                          <button
                            type="button"
                            key={w}
                            onClick={() => toggleWorkshop(w)}
                            className={cn(
                              "w-full flex items-start gap-2 text-left px-3 py-2 rounded-lg text-sm transition",
                              selected ? "bg-primary/10 text-foreground" : "hover:bg-muted text-foreground/80"
                            )}
                          >
                            <span className={cn(
                              "mt-0.5 w-4 h-4 rounded border flex items-center justify-center flex-shrink-0",
                              selected ? "bg-primary border-primary text-primary-foreground" : "border-input"
                            )}>
                              {selected && <Check size={12} />}
                            </span>
                            <span>{w}</span>
                          </button>
                        );
                      })}
                    </PopoverContent>
                  </Popover>
                  {form.workshops.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {form.workshops.map((w) => (
                        <span key={w} className="text-[11px] bg-primary/10 text-primary px-2 py-1 rounded-full">
                          {w}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <IconSelect icon={Clock} placeholder="Preferred duration *" value={form.duration} onChange={(v) => update("duration", v)} options={DURATIONS} disabled={loading} />
                <IconSelect icon={Hash} placeholder="Expected participants *" value={form.participants} onChange={(v) => update("participants", v)} options={PARTICIPANT_RANGES} disabled={loading} />

                {/* Date */}
                <Popover>
                  <PopoverTrigger asChild disabled={loading}>
                    <button
                      type="button"
                      className="relative w-full h-11 pl-10 pr-4 rounded-full bg-background/60 border border-input text-left text-sm hover:border-primary/40 transition flex items-center"
                    >
                      <CalendarIcon size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-primary/60" />
                      <span className={cn(!form.workshopDate && "text-muted-foreground")}>
                        {form.workshopDate ? format(form.workshopDate, "PPP") : "Preferred workshop date"}
                      </span>
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={form.workshopDate}
                      onSelect={(d) => update("workshopDate", d)}
                      disabled={(d) => d < new Date(new Date().setHours(0, 0, 0, 0))}
                      initialFocus
                      className={cn("p-3 pointer-events-auto")}
                    />
                  </PopoverContent>
                </Popover>

                <IconSelect icon={Wifi} placeholder="Mode of workshop *" value={form.mode} onChange={(v) => update("mode", v)} options={MODES} disabled={loading} />

                <div className="md:col-span-2 relative">
                  <MessageSquare size={16} className="absolute left-3.5 top-3.5 text-primary/60 pointer-events-none z-10" />
                  <Textarea
                    placeholder="Tell us about your requirement, expected audience, workshop goals, institution details, or any specific expectations. *"
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    disabled={loading}
                    rows={4}
                    className="pl-10 rounded-2xl bg-background/60 border-input resize-none"
                  />
                </div>

                <div className="md:col-span-2 flex items-start gap-3 rounded-2xl bg-muted/40 border border-border/50 px-4 py-3">
                  <Checkbox
                    id="consent"
                    checked={form.consent}
                    onCheckedChange={(v) => update("consent", v === true)}
                    disabled={loading}
                    className="mt-0.5"
                  />
                  <label htmlFor="consent" className="text-sm text-foreground/80 leading-relaxed cursor-pointer">
                    I agree to be contacted by VGEN regarding workshops, programs, and related communication.
                  </label>
                </div>
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full mt-6 h-12 rounded-full bg-hero-gradient text-primary-foreground font-semibold hover:opacity-95 hover:shadow-[0_10px_30px_-12px_hsl(263_91%_66%/0.6)] hover:-translate-y-0.5 transition-all"
              >
                {loading ? (
                  <>
                    <Loader2 size={18} className="mr-2 animate-spin" /> Submitting Request...
                  </>
                ) : (
                  <>
                    <Send size={18} className="mr-2" /> Request Workshop
                  </>
                )}
              </Button>
            </form>
          </AnimatedSection>

          {/* Side panel */}
          <AnimatedSection delay={150} className="lg:col-span-2">
            <div className="relative rounded-3xl p-7 md:p-8 text-primary-foreground overflow-hidden bg-hero-gradient elevated-shadow h-full">
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 80% 10%, hsl(263 91% 66% / 0.6), transparent 50%), radial-gradient(circle at 10% 90%, hsl(217 91% 60% / 0.5), transparent 55%)",
                }}
              />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2">Why Organize a VGEN Workshop?</h3>
                <p className="text-primary-foreground/75 text-sm mb-6">
                  Premium, future-ready learning experiences crafted for every audience.
                </p>

                <ul className="space-y-3 mb-7">
                  {BENEFITS.map((b) => (
                    <li key={b.text} className="flex items-start gap-3 text-sm">
                      <span className="w-7 h-7 rounded-lg bg-primary-foreground/15 backdrop-blur flex items-center justify-center flex-shrink-0">
                        <b.icon size={14} />
                      </span>
                      <span className="text-primary-foreground/95">{b.text}</span>
                    </li>
                  ))}
                </ul>

                <div className="grid grid-cols-3 gap-2 mb-7">
                  {[
                    { n: "50+", l: "Workshops" },
                    { n: "1000+", l: "Learners" },
                    { n: "10+", l: "Domains" },
                  ].map((s) => (
                    <div key={s.l} className="text-center rounded-2xl bg-primary-foreground/10 backdrop-blur px-2 py-3 border border-primary-foreground/15">
                      <div className="text-xl font-bold text-accent">{s.n}</div>
                      <div className="text-[11px] uppercase tracking-wider text-primary-foreground/75">{s.l}</div>
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl bg-primary-foreground/10 backdrop-blur border border-primary-foreground/15 p-4">
                  <p className="text-sm text-primary-foreground/90 mb-3">
                    Need help choosing the right workshop?
                  </p>
                  <Button asChild className="w-full bg-card text-foreground hover:bg-card/90 rounded-full font-semibold">
                    <Link to="/contact">Contact VGEN Team</Link>
                  </Button>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Success dialog */}
      <Dialog open={success} onOpenChange={setSuccess}>
        <DialogContent className="sm:max-w-md rounded-3xl border-border/60">
          <DialogHeader className="items-center text-center">
            <div className="w-16 h-16 rounded-full bg-hero-gradient flex items-center justify-center mb-3 shadow-lg">
              <CheckCircle2 size={32} className="text-primary-foreground" />
            </div>
            <DialogTitle className="text-2xl text-gradient">Request Submitted Successfully</DialogTitle>
            <DialogDescription className="text-base text-foreground/70 pt-1">
              Thank you for contacting VGEN. Our team will get in touch with you shortly.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="sm:justify-center gap-2 pt-2">
            <Button variant="outline" onClick={() => setSuccess(false)} className="rounded-full">
              Go Back
            </Button>
            <Button asChild className="rounded-full bg-hero-gradient text-primary-foreground hover:opacity-90">
              <Link to="/workshops" onClick={() => setSuccess(false)}>Explore Workshops</Link>
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
};

/* ---------- Small inputs ---------- */

const IconInput = ({
  icon: Icon, value, onChange, placeholder, type = "text", disabled,
}: {
  icon: typeof User;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  type?: string;
  disabled?: boolean;
}) => (
  <div className="relative">
    <FieldIcon icon={Icon} />
    <Input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      disabled={disabled}
      className="pl-10 h-11 rounded-full bg-background/60 border-input"
    />
  </div>
);

const IconSelect = ({
  icon: Icon, value, onChange, options, placeholder, disabled,
}: {
  icon: typeof User;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  placeholder: string;
  disabled?: boolean;
}) => (
  <div className="relative">
    <FieldIcon icon={Icon} />
    <Select value={value} onValueChange={onChange} disabled={disabled}>
      <SelectTrigger className="pl-10 h-11 rounded-full bg-background/60 border-input">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className="max-h-72">
        {options.map((o) => (
          <SelectItem key={o} value={o}>{o}</SelectItem>
        ))}
      </SelectContent>
    </Select>
  </div>
);

export default WorkshopEnquiryForm;
