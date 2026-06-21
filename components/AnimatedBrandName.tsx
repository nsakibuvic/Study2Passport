type AnimatedBrandNameProps = {
  className?: string;
};

export default function AnimatedBrandName({ className = '' }: AnimatedBrandNameProps) {
  return (
    <span className={className} aria-label="Study2Passport">
      <span className="brand-static-fallback hidden motion-reduce:inline">Study2Passport</span>
      <span
        className="inline-flex items-baseline motion-reduce:hidden brand-animated"
        aria-hidden="true"
      >
        <span className="brand-study">Study</span>
        <span className="brand-two-slot">
          <span className="brand-two">2</span>
        </span>
        <span className="brand-passport">Passport</span>
      </span>
    </span>
  );
}