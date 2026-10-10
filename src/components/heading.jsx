import Link from "next/link";

const Heading = ({ title, action, className = "" }) => {
  return (
    <div
      className={`mb-5 flex items-baseline justify-between gap-4 ${className}`}
    >
      <h2 className="text-xl font-bold tracking-tight text-foreground">
        {title}
      </h2>
      {action && (
        <Link
          href={action.href}
          className="font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
        >
          {action.label} →
        </Link>
      )}
    </div>
  );
};

export default Heading;
