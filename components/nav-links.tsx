import type { LinkItemType } from "@/components/sheard";
import {
  GlobeIcon,
  LayersIcon,
  UserPlusIcon,
  BarChart3Icon,
  PlugIcon,
  CodeIcon,
  UsersIcon,
  StarIcon,
  HandshakeIcon,
  FileTextIcon,
  ShieldIcon,
  RotateCcwIcon,
  LeafIcon,
  HelpCircleIcon,
  BriefcaseIcon,
  SparklesIcon,
  RocketIcon,
  GraduationCapIcon,
  PaletteIcon,
  VideoIcon,
  PenToolIcon,
  MegaphoneIcon,
  HammerIcon,
} from "lucide-react";

/* =========================
   🚀 HYRATIC CORE PRODUCTS
========================= */
export const productLinks: LinkItemType[] = [
  {
    label: "Hyratic Marketplace",
    href: "/marketplace",
    description: "Hire top freelancers worldwide",
    icon: <BriefcaseIcon />,
  },
  {
    label: "Hyratic Studio",
    href: "/studio",
    description: "Manage projects & client workflow",
    icon: <SparklesIcon />,
  },
  {
    label: "Hyratic SkillHub",
    href: "/skillhub",
    description: "Learn & upgrade professional skills",
    icon: <GraduationCapIcon />,
  },
  {
    label: "Hyratic Jobs",
    href: "/jobs",
    description: "Find freelance & remote jobs",
    icon: <RocketIcon />,
  },
  {
    label: "Cloud Platform",
    href: "#",
    description: "Deploy apps & scale globally",
    icon: <LayersIcon />,
  },
  {
    label: "API & Integrations",
    href: "#",
    description: "Connect tools and automate workflow",
    icon: <CodeIcon />,
  },
];

/* =========================
   💼 FREELANCE CATEGORIES
========================= */
export const freelanceLinks: LinkItemType[] = [
  {
    label: "Web Development",
    href: "/category/web-dev",
    description: "React, Next.js, Node.js experts",
    icon: <GlobeIcon />,
  },
  {
    label: "UI/UX Design",
    href: "/category/design",
    description: "Modern app & website design",
    icon: <PaletteIcon />,
  },
  {
    label: "Video Editing",
    href: "/category/video",
    description: "YouTube, reels & cinematic edits",
    icon: <VideoIcon />,
  },
  {
    label: "Digital Marketing",
    href: "/category/marketing",
    description: "SEO, ads & growth strategies",
    icon: <MegaphoneIcon />,
  },
  {
    label: "Content Writing",
    href: "/category/writing",
    description: "Blogs, copywriting & scripts",
    icon: <PenToolIcon />,
  },
  {
    label: "Software Engineering",
    href: "/category/engineering",
    description: "Full-stack & backend systems",
    icon: <HammerIcon />,
  },
];

/* =========================
   🏢 COMPANY
========================= */
export const companyLinks: LinkItemType[] = [
  {
    label: "About Hyratic",
    href: "/about",
    description: "Our mission & vision",
    icon: <UsersIcon />,
  },
  {
    label: "Success Stories",
    href: "/stories",
    description: "Top freelancer journeys",
    icon: <StarIcon />,
  },
  {
    label: "Partnerships",
    href: "/partners",
    description: "Collaborate & grow",
    icon: <HandshakeIcon />,
  },
];

/* =========================
   📜 LEGAL + SUPPORT
========================= */
export const companyLinks2: LinkItemType[] = [
  {
    label: "Terms of Service",
    href: "/terms",
    icon: <FileTextIcon />,
  },
  {
    label: "Privacy Policy",
    href: "/privacy",
    icon: <ShieldIcon />,
  },
  {
    label: "Refund Policy",
    href: "/refund",
    icon: <RotateCcwIcon />,
  },
  {
    label: "Blog",
    href: "/blog",
    icon: <LeafIcon />,
  },
  {
    label: "Help Center",
    href: "/help",
    icon: <HelpCircleIcon />,
  },
];