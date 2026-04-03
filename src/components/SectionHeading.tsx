interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  gradient?: boolean;
  className?: string;
}

const SectionHeading = ({ title, subtitle, gradient, className = "" }: SectionHeadingProps) => (
  <div className={`text-center mb-12 ${className}`}>
    <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${gradient ? "text-gradient" : "text-foreground"}`}>
      {title}
    </h2>
    {subtitle && (
      <p className="text-muted-foreground max-w-2xl mx-auto text-lg">{subtitle}</p>
    )}
  </div>
);

export default SectionHeading;
