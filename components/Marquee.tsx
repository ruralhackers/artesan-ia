import { marqueeLine } from "@/content/site";

export function Marquee() {
  return (
    <div
      className="overflow-hidden bg-cream-paper py-20"
      style={{ minHeight: 40 }}
      aria-hidden
    >
      <div className="animate-marquee flex w-max whitespace-nowrap label-mono text-pure-ink">
        <span className="px-10">{marqueeLine.repeat(4)}</span>
        <span className="px-10">{marqueeLine.repeat(4)}</span>
      </div>
    </div>
  );
}
