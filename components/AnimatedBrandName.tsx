type AnimatedBrandNameProps = {
  className?: string;
};

export default function AnimatedBrandName({ className = '' }: AnimatedBrandNameProps) {
  return (
    <span className={className} aria-label="Study2Passport">
      <span className="brand-static-fallback hidden motion-reduce:inline">
        <span className="text-white transition-colors group-hover:text-amber-400">Study</span>
        <span className="brand-two-static">2</span>
        <span className="text-white transition-colors group-hover:text-amber-400">Passport</span>
      </span>
      <span
        className="inline-flex items-baseline motion-reduce:hidden brand-animated"
        aria-hidden="true"
      >
        <span className="brand-study text-white transition-colors group-hover:text-amber-400">Study</span>
        <span className="brand-two-slot">
          <span className="brand-two">2</span>
        </span>
        <span className="brand-passport text-white transition-colors group-hover:text-amber-400">Passport</span>
      </span>
    </span>
  );
}