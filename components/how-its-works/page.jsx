"use client"
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Search,
  UserCheck,
  MessageSquare,
  PackageCheck,
  ArrowRight,
  Star,
  Sparkles,
  LayoutGrid,
  CheckCircle2,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    badge: "Discover",
    title: "Browse Services",
    description:
      "Explore thousands of professional services across web development, design, AI, mobile apps, and more.",
    illustration: <BrowseIllustration />,
    accent: "from-blue-500/10 to-indigo-500/10",
  },
  {
    number: "02",
    icon: UserCheck,
    badge: "Select",
    title: "Choose the Right Expert",
    description:
      "Compare portfolios, reviews, pricing, and experience to find the perfect match for your project.",
    illustration: <ExpertIllustration />,
    accent: "from-violet-500/10 to-purple-500/10",
  },
  {
    number: "03",
    icon: MessageSquare,
    badge: "Collaborate",
    title: "Collaborate & Track Progress",
    description:
      "Communicate directly with freelancers, share requirements, and monitor project milestones.",
    illustration: <CollabIllustration />,
    accent: "from-emerald-500/10 to-teal-500/10",
  },
  {
    number: "04",
    icon: PackageCheck,
    badge: "Deliver",
    title: "Get Your Project Delivered",
    description:
      "Receive high-quality results and complete your project successfully — on time, every time.",
    illustration: <DeliverIllustration />,
    accent: "from-amber-500/10 to-orange-500/10",
  },
];

// ─── Illustration Components ───────────────────────────────────────────────

function BrowseIllustration() {
  return (
    <svg viewBox="0 0 320 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      {/* Background */}
      <rect width="320" height="200" fill="transparent" />

      {/* Browser chrome */}
      <rect x="20" y="16" width="280" height="168" rx="10" fill="currentColor" className="text-muted" opacity="0.4" />
      <rect x="20" y="16" width="280" height="32" rx="10" fill="currentColor" className="text-muted" opacity="0.7" />
      <rect x="20" y="36" width="280" height="12" fill="currentColor" className="text-muted" opacity="0.7" />

      {/* Browser dots */}
      <circle cx="38" cy="32" r="4" fill="currentColor" className="text-muted-foreground" opacity="0.4" />
      <circle cx="52" cy="32" r="4" fill="currentColor" className="text-muted-foreground" opacity="0.4" />
      <circle cx="66" cy="32" r="4" fill="currentColor" className="text-muted-foreground" opacity="0.4" />

      {/* Address bar */}
      <rect x="90" y="24" width="160" height="16" rx="4" fill="currentColor" className="text-background" opacity="0.6" />
      <circle cx="253" cy="32" r="5" fill="currentColor" className="text-primary" opacity="0.6" />

      {/* Search bar */}
      <rect x="36" y="58" width="248" height="22" rx="6" fill="currentColor" className="text-background" opacity="0.8" />
      <circle cx="52" cy="69" r="5" fill="currentColor" className="text-muted-foreground" opacity="0.5" />
      <rect x="62" y="65" width="100" height="8" rx="2" fill="currentColor" className="text-muted-foreground" opacity="0.3" />
      <rect x="264" y="63" width="14" height="14" rx="3" fill="currentColor" className="text-primary" opacity="0.7" />

      {/* Category pills */}
      {[0, 1, 2, 3].map((i) => (
        <rect
          key={i}
          x={36 + i * 62}
          y={90}
          width={52}
          height={14}
          rx={7}
          fill="currentColor"
          className={i === 0 ? "text-primary" : "text-muted"}
          opacity={i === 0 ? 0.8 : 0.4}
        />
      ))}

      {/* Service cards grid */}
      {[0, 1, 2].map((col) =>
        [0, 1].map((row) => (
          <g key={`${col}-${row}`}>
            <rect
              x={36 + col * 90}
              y={116 + row * 36}
              width={80}
              height={28}
              rx={6}
              fill="currentColor"
              className="text-background"
              opacity="0.8"
            />
            <rect
              x={42 + col * 90}
              y={120 + row * 36}
              width={20}
              height={14}
              rx={3}
              fill="currentColor"
              className="text-muted"
              opacity="0.6"
            />
            <rect
              x={66 + col * 90}
              y={122 + row * 36}
              width={44}
              height={5}
              rx={2}
              fill="currentColor"
              className="text-muted-foreground"
              opacity="0.3"
            />
            <rect
              x={66 + col * 90}
              y={130 + row * 36}
              width={30}
              height={4}
              rx={2}
              fill="currentColor"
              className="text-muted-foreground"
              opacity="0.2"
            />
          </g>
        ))
      )}

      {/* Floating search ping */}
      <circle cx="268" cy="68" r="9" fill="currentColor" className="text-primary" opacity="0.15" />
      <circle cx="268" cy="68" r="5" fill="currentColor" className="text-primary" opacity="0.5" />
    </svg>
  );
}

function ExpertIllustration() {
  return (
    <svg viewBox="0 0 320 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="200" fill="transparent" />

      {/* Profile card — main */}
      <rect x="60" y="20" width="200" height="160" rx="12" fill="currentColor" className="text-muted" opacity="0.35" />

      {/* Avatar */}
      <circle cx="160" cy="60" r="28" fill="currentColor" className="text-muted" opacity="0.6" />
      <circle cx="160" cy="54" r="12" fill="currentColor" className="text-muted-foreground" opacity="0.4" />
      <ellipse cx="160" cy="74" rx="18" ry="10" fill="currentColor" className="text-muted-foreground" opacity="0.4" />

      {/* Verified badge */}
      <circle cx="182" cy="40" r="10" fill="currentColor" className="text-primary" opacity="0.9" />
      <path d="M177 40 l3 3 l6 -6" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />

      {/* Name + title */}
      <rect x="110" y="96" width="100" height="8" rx="4" fill="currentColor" className="text-foreground" opacity="0.4" />
      <rect x="126" y="110" width="68" height="6" rx="3" fill="currentColor" className="text-muted-foreground" opacity="0.3" />

      {/* Stars */}
      {[0, 1, 2, 3, 4].map((i) => (
        <polygon
          key={i}
          points="0,-5 1.5,-1.5 5,-1.5 2.5,1 3.5,5 0,2.5 -3.5,5 -2.5,1 -5,-1.5 -1.5,-1.5"
          transform={`translate(${135 + i * 11},127)`}
          fill="currentColor"
          className={i < 4 ? "text-primary" : "text-muted"}
          opacity={i < 4 ? 0.8 : 0.3}
        />
      ))}

      {/* Skill tags */}
      {["React", "Node", "AWS"].map((label, i) => (
        <g key={label}>
          <rect x={82 + i * 54} y={140} width={48} height={14} rx={7} fill="currentColor" className="text-primary" opacity="0.12" />
          <rect x={90 + i * 54} y={145} width={32} height={4} rx={2} fill="currentColor" className="text-primary" opacity="0.4" />
        </g>
      ))}

      {/* Compare ghost cards */}
      <rect x="20" y="40" width="46" height="100" rx="8" fill="currentColor" className="text-muted" opacity="0.2" />
      <rect x="254" y="40" width="46" height="100" rx="8" fill="currentColor" className="text-muted" opacity="0.2" />
    </svg>
  );
}

function CollabIllustration() {
  return (
    <svg viewBox="0 0 320 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="200" fill="transparent" />

      {/* Chat panel */}
      <rect x="20" y="20" width="150" height="160" rx="10" fill="currentColor" className="text-muted" opacity="0.35" />

      {/* Chat header */}
      <rect x="20" y="20" width="150" height="30" rx="10" fill="currentColor" className="text-muted" opacity="0.5" />
      <rect x="20" y="36" width="150" height="14" fill="currentColor" className="text-muted" opacity="0.5" />
      <circle cx="38" cy="35" r="8" fill="currentColor" className="text-muted-foreground" opacity="0.5" />
      <rect x="52" y="30" width="60" height="5" rx="2" fill="currentColor" className="text-muted-foreground" opacity="0.35" />
      <rect x="52" y="38" width="40" height="4" rx="2" fill="currentColor" className="text-primary" opacity="0.4" />

      {/* Chat bubbles */}
      {[
        { x: 34, y: 62, w: 100, align: "left", primary: false },
        { x: 48, y: 84, w: 88, align: "right", primary: true },
        { x: 34, y: 106, w: 80, align: "left", primary: false },
        { x: 60, y: 128, w: 72, align: "right", primary: true },
      ].map((b, i) => (
        <rect
          key={i}
          x={b.align === "right" ? 156 - b.w - 8 : b.x}
          y={b.y}
          width={b.w}
          height={14}
          rx={7}
          fill="currentColor"
          className={b.primary ? "text-primary" : "text-background"}
          opacity={b.primary ? 0.7 : 0.7}
        />
      ))}

      {/* Input bar */}
      <rect x="28" y="158" width="114" height="14" rx="7" fill="currentColor" className="text-background" opacity="0.7" />

      {/* Progress panel */}
      <rect x="182" y="20" width="118" height="160" rx="10" fill="currentColor" className="text-muted" opacity="0.35" />
      <rect x="194" y="32" width="70" height="6" rx="3" fill="currentColor" className="text-foreground" opacity="0.35" />

      {/* Milestone rows */}
      {[
        { y: 50, done: true, w: 72 },
        { y: 72, done: true, w: 60 },
        { y: 94, done: false, w: 80 },
        { y: 116, done: false, w: 50 },
      ].map((m, i) => (
        <g key={i}>
          <circle cx="198" cy={m.y + 5} r="5" fill="currentColor" className={m.done ? "text-primary" : "text-muted-foreground"} opacity={m.done ? 0.8 : 0.3} />
          {m.done && <path d={`M194 ${m.y + 5} l3 3 l5 -5`} stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" />}
          <rect x={210} y={m.y + 2} width={m.w} height={5} rx={2} fill="currentColor" className="text-muted-foreground" opacity={m.done ? 0.4 : 0.2} />
        </g>
      ))}

      {/* Progress bar */}
      <rect x="194" y="148" width="94" height="6" rx="3" fill="currentColor" className="text-muted" opacity="0.3" />
      <rect x="194" y="148" width="58" height="6" rx="3" fill="currentColor" className="text-primary" opacity="0.7" />
    </svg>
  );
}

function DeliverIllustration() {
  return (
    <svg viewBox="0 0 320 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="200" fill="transparent" />

      {/* Package box */}
      <rect x="90" y="70" width="140" height="100" rx="8" fill="currentColor" className="text-muted" opacity="0.45" />
      <rect x="90" y="70" width="140" height="30" rx="8" fill="currentColor" className="text-muted" opacity="0.65" />
      <rect x="90" y="86" width="140" height="14" fill="currentColor" className="text-muted" opacity="0.65" />

      {/* Ribbon */}
      <rect x="152" y="70" width="16" height="100" rx="4" fill="currentColor" className="text-primary" opacity="0.25" />
      <rect x="90" y="80" width="140" height="12" rx="4" fill="currentColor" className="text-primary" opacity="0.25" />

      {/* Bow */}
      <ellipse cx="160" cy="72" rx="20" ry="10" fill="currentColor" className="text-primary" opacity="0.4" />
      <circle cx="160" cy="72" r="6" fill="currentColor" className="text-primary" opacity="0.7" />

      {/* Check badge */}
      <circle cx="225" cy="68" r="22" fill="currentColor" className="text-primary" opacity="0.15" />
      <circle cx="225" cy="68" r="16" fill="currentColor" className="text-primary" opacity="0.8" />
      <path d="M216 68 l6 6 l12 -12" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />

      {/* Stars / sparkles */}
      {[
        { cx: 76, cy: 56, r: 6 },
        { cx: 250, cy: 140, r: 5 },
        { cx: 100, cy: 156, r: 4 },
      ].map((s, i) => (
        <g key={i}>
          <line x1={s.cx} y1={s.cy - s.r} x2={s.cx} y2={s.cy + s.r} stroke="currentColor" className="text-primary" strokeWidth="1.5" opacity="0.5" />
          <line x1={s.cx - s.r} y1={s.cy} x2={s.cx + s.r} y2={s.cy} stroke="currentColor" className="text-primary" strokeWidth="1.5" opacity="0.5" />
          <line x1={s.cx - s.r * 0.7} y1={s.cy - s.r * 0.7} x2={s.cx + s.r * 0.7} y2={s.cy + s.r * 0.7} stroke="currentColor" className="text-primary" strokeWidth="1" opacity="0.35" />
          <line x1={s.cx + s.r * 0.7} y1={s.cy - s.r * 0.7} x2={s.cx - s.r * 0.7} y2={s.cy + s.r * 0.7} stroke="currentColor" className="text-primary" strokeWidth="1" opacity="0.35" />
        </g>
      ))}

      {/* Confetti dots */}
      {[
        [60, 80], [270, 60], [85, 130], [252, 110], [240, 170], [70, 165],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="4" fill="currentColor" className="text-primary" opacity="0.2" />
      ))}

      {/* Label strip on box */}
      <rect x="110" y="110" width="100" height="30" rx="4" fill="currentColor" className="text-background" opacity="0.7" />
      <rect x="118" y="116" width="60" height="5" rx="2" fill="currentColor" className="text-muted-foreground" opacity="0.35" />
      <rect x="118" y="126" width="40" height="4" rx="2" fill="currentColor" className="text-primary" opacity="0.4" />
    </svg>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────
function HowItWorks() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden">


      {/* Glow orbs */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-muted/50 text-xs font-medium text-muted-foreground tracking-wide uppercase mb-2">
            <Sparkles className="w-3 h-3 text-primary" />
            Simple Process
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            How It{" "}
            <span className="relative inline-block">
              Works
              <span className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full bg-primary/40" />
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
            From discovery to delivery — four straightforward steps to get your
            project done with the right expert.
          </p>
        </div>

        {/* Connector line — desktop only */}
        <div className="hidden lg:block absolute top-[calc(16rem+2px)] left-[calc(12.5%+2rem)] right-[calc(12.5%+2rem)] h-px">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-border to-transparent" />
            {/* Arrow dots */}
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-primary/40"
                style={{ left: `${(i + 1) * 25}%` }}
              />
            ))}
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isHovered = hoveredIndex === index;

            return (
              <Card
                key={step.number}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={[
                  "group relative rounded-xl border border-border bg-card overflow-hidden cursor-default",
                  "transition-all duration-300 ease-out",
                  isHovered
                    ? "shadow-2xl shadow-primary/10 -translate-y-2 border-primary/30"
                    : "shadow-md hover:shadow-xl",
                ].join(" ")}
              >
                {/* Gradient overlay on hover */}
                <div
                  className={[
                    "absolute inset-0 bg-gradient-to-br pointer-events-none transition-opacity duration-300",
                    step.accent,
                    isHovered ? "opacity-100" : "opacity-0",
                  ].join(" ")}
                />

                <CardContent className="relative p-0">
                  {/* Illustration area */}
                  <div
                    className={[
                      "relative w-full h-44 overflow-hidden bg-gradient-to-br",
                      step.accent,
                      "border-b border-border/60",
                    ].join(" ")}
                  >
                    {/* Step number watermark */}
                    <span className="absolute top-3 right-4 text-6xl font-black text-foreground/[0.05] select-none leading-none">
                      {step.number}
                    </span>

                    {/* Illustration */}
                    <div
                      className={[
                        "absolute inset-0 flex items-center justify-center p-4",
                        "transition-transform duration-500",
                        isHovered ? "scale-105" : "scale-100",
                      ].join(" ")}
                    >
                      {step.illustration}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 space-y-3">
                    {/* Badge + icon row */}
                    <div className="flex items-center justify-between">
                      <Badge
                        variant="secondary"
                        className="text-xs font-medium px-2 py-0.5 rounded-full"
                      >
                        {step.badge}
                      </Badge>
                      <div
                        className={[
                          "flex items-center justify-center w-8 h-8 rounded-lg",
                          "bg-primary/10 transition-all duration-300",
                          isHovered ? "bg-primary/20 rotate-6 scale-110" : "",
                        ].join(" ")}
                      >
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-semibold text-foreground leading-snug">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>

                    {/* Step indicator */}
                    <div className="pt-1 flex items-center gap-1.5">
                      {steps.map((_, i) => (
                        <div
                          key={i}
                          className={[
                            "h-0.5 rounded-full transition-all duration-300",
                            i === index
                              ? "w-6 bg-primary"
                              : i < index
                              ? "w-3 bg-primary/30"
                              : "w-3 bg-muted",
                          ].join(" ")}
                        />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center space-y-4">
          <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-muted-foreground mb-4">
            {["No setup fees", "Vetted professionals", "Secure payments"].map(
              (item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                  {item}
                </span>
              )
            )}
          </div>
          <Button
            size="lg"
            className="group rounded-full px-8 font-medium shadow-lg shadow-primary/20 transition-all duration-200 hover:shadow-primary/30 hover:scale-[1.02]"
          >
            Get Started Today
            <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}


export default HowItWorks