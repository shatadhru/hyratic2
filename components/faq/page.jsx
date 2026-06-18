import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/animate-ui/components/radix/accordion';
import { Badge } from "@/components/ui/badge";
import {
  HelpCircle,
  Store,
  Route,
  LayoutGrid,
  UserSearch,
  MessageSquare,
  CreditCard,
  FileText,
  RefreshCw,
  UserPlus,
  ShieldCheck,
} from "lucide-react";

const tagStyles = {
  platform:   "bg-violet-100 text-violet-800 dark:bg-violet-900/40 dark:text-violet-300",
  hiring:     "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300",
  payments:   "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300",
  freelancer: "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300",
  safety:     "bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-300",
};

const faqs = [
  {
    id: "faq-01",
    number: "01",
    tag: "platform",
    tagLabel: "Platform",
    Icon: Store,
    question: "What is Hyratic?",
    answer:
      "Hyratic is a platform that connects clients with skilled freelancers to complete digital projects and services.",
  },
  {
    id: "faq-02",
    number: "02",
    tag: "platform",
    tagLabel: "Platform",
    Icon: Route,
    question: "How does Hyratic work?",
    answer:
      "Browse services, choose a freelancer, discuss your requirements, and collaborate directly to complete your project.",
  },
  {
    id: "faq-03",
    number: "03",
    tag: "platform",
    tagLabel: "Platform",
    Icon: LayoutGrid,
    question: "What services are available on Hyratic?",
    answer:
      "Hyratic offers web development, app development, UI/UX design, graphic design, AI solutions, video editing, and more.",
  },
  {
    id: "faq-04",
    number: "04",
    tag: "hiring",
    tagLabel: "Hiring",
    Icon: UserSearch,
    question: "How do I find the right freelancer?",
    answer:
      "Compare freelancer profiles, portfolios, ratings, skills, and experience to choose the best match for your project.",
  },
  {
    id: "faq-05",
    number: "05",
    tag: "hiring",
    tagLabel: "Hiring",
    Icon: MessageSquare,
    question: "Can I talk with a freelancer before hiring?",
    answer:
      "Yes. Clients and freelancers can communicate before starting a project to discuss requirements and expectations.",
  },
  {
    id: "faq-06",
    number: "06",
    tag: "payments",
    tagLabel: "Payments",
    Icon: CreditCard,
    question: "How does payment work on Hyratic?",
    answer:
      "Hyratic does not hold or process payments. Clients and freelancers agree on payment terms and complete payments directly.",
  },
  {
    id: "faq-07",
    number: "07",
    tag: "payments",
    tagLabel: "Payments",
    Icon: FileText,
    question: "Is Hyratic responsible for project agreements?",
    answer:
      "Hyratic provides the platform for connection and collaboration. Project terms, deadlines, and payments are agreed between clients and freelancers.",
  },
  {
    id: "faq-08",
    number: "08",
    tag: "hiring",
    tagLabel: "Hiring",
    Icon: RefreshCw,
    question: "What if I need revisions or changes?",
    answer:
      "You can communicate with the freelancer and request changes according to your agreed project requirements.",
  },
  {
    id: "faq-09",
    number: "09",
    tag: "freelancer",
    tagLabel: "Freelancer",
    Icon: UserPlus,
    question: "How can I become a freelancer on Hyratic?",
    answer:
      "Create your profile, add your skills and portfolio, and start offering your services to clients on the platform.",
  },
  {
    id: "faq-10",
    number: "10",
    tag: "safety",
    tagLabel: "Community",
    Icon: ShieldCheck,
    question: "How does Hyratic keep the community safe?",
    answer:
      "Hyratic promotes transparency through profiles, portfolios, reviews, and clear communication between users.",
  },
];

function HyraticFAQ() {
  return (
    <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden">
      {/* Glow orbs */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative max-w-5xl mx-auto">
        {/* Section header */}
        <div className="mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-muted/50 text-xs font-medium text-muted-foreground tracking-wide uppercase">
            <HelpCircle className="w-3 h-3 text-primary" />
            Support
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            Frequently asked{" "}
            <span className="relative inline-block">
              questions
              <span className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full bg-primary/40" />
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg leading-relaxed">
            Everything you need to know about Hyratic. Can&apos;t find an answer?{" "}
            <a
              href="#contact"
              className="text-primary underline underline-offset-4 hover:opacity-80 transition-opacity"
            >
              Reach out to us.
            </a>
          </p>
        </div>

        {/* FAQ grid — 2 columns on desktop, 1 on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {faqs.map((faq) => {
            const { Icon } = faq;
            return (
              <Accordion
                key={faq.id}
                type="single"
                collapsible
                className="rounded-xl border border-border bg-card shadow-sm hover:border-border/80 transition-colors duration-200"
              >
                <AccordionItem value={faq.id} className="border-none">
                  <AccordionTrigger className="px-5 py-4 hover:no-underline group [&[data-state=open]]:text-primary">
                    <div className="flex items-center gap-3 text-left">
                      {/* Number badge */}
                      <span className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full border border-border bg-muted text-[11px] font-medium text-muted-foreground group-data-[state=open]:bg-primary/10 group-data-[state=open]:border-primary/30 group-data-[state=open]:text-primary transition-colors duration-200">
                        {faq.number}
                      </span>
                      {/* Question text */}
                      <span className="text-sm font-medium text-foreground group-data-[state=open]:text-primary transition-colors duration-200 leading-snug">
                        {faq.question}
                      </span>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="px-5 pb-5 pt-0">
                    {/* Answer area */}
                    <div className="pl-10 space-y-3">
                      {/* Tag badge */}
                      <Badge
                        variant="secondary"
                        className={[
                          "inline-flex items-center gap-1.5 text-xs font-medium rounded-full px-2.5 py-0.5 border-0",
                          tagStyles[faq.tag],
                        ].join(" ")}
                      >
                        <Icon className="w-3 h-3" aria-hidden="true" />
                        {faq.tagLabel}
                      </Badge>

                      {/* Answer text */}
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HyraticFAQ