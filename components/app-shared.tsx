import type { ReactNode } from "react";
import {
  LayoutGridIcon,
  BriefcaseIcon,
  ListTodoIcon,
  MessageSquareTextIcon,
  UsersIcon,
  SparklesIcon,
  SettingsIcon,
  HelpCircleIcon,
  ActivityIcon,
  BadgeCheckIcon,
  FolderKanbanIcon,
} from "lucide-react";

export type SidebarNavItem = {
  title: string;
  path?: string;
  icon?: ReactNode;
  isActive?: boolean;
  roles?: ("freelancer" | "client")[];
  subItems?: SidebarNavItem[];
};

export type SidebarNavGroup = {
  label?: string;
  items: SidebarNavItem[];
};

/* =========================
   🚀 MAIN HYRATIC DASHBOARD
========================= */

export const navGroups: SidebarNavGroup[] = [
  {
    items: [
      {
        title: "SkillHub Overview",
        path: "/dashboard/overview",
        icon: <LayoutGridIcon />,
        isActive: true,
      },
    ],
  },

  /* =========================
     💼 WORKSPACE (BOTH)
  ========================= */
  {
    label: "Workspace",
    items: [
      {
        title: "Projects Hub",
        path: "/dashboard/projects",
        icon: <FolderKanbanIcon />,
      },
      {
        title: "Tasks Board",
        path: "/dashboard/tasks",
        icon: <ListTodoIcon />,
      },
      {
        title: "Messages",
        path: "/dashboard/messages",
        icon: <MessageSquareTextIcon />,
      },
    ],
  },

  /* =========================
     👨‍💻 FREELANCER (SELLER)
  ========================= */
  {
    label: "Freelancer Tools",
    items: [
      {
        title: "My Gigs",
        path: "/dashboard/gigs",
        icon: <SparklesIcon />,
        roles: ["freelancer"],
      },
      {
        title: "Earnings",
        path: "/dashboard/earnings",
        icon: <BadgeCheckIcon />,
        roles: ["freelancer"],
      },
      {
        title: "Applications",
        path: "/dashboard/applications",
        icon: <BriefcaseIcon />,
        roles: ["freelancer"],
      },
    ],
  },

  /* =========================
     🧑‍💼 CLIENT / HR SIDE
  ========================= */
  {
    label: "Hiring Hub",
    items: [
      {
        title: "Post Job",
        path: "/dashboard/post-job",
        icon: <BriefcaseIcon />,
        roles: ["client"],
      },
      {
        title: "Talent Pool",
        path: "/dashboard/talent",
        icon: <UsersIcon />,
        roles: ["client"],
      },
      {
        title: "Applications Review",
        path: "/dashboard/reviews",
        icon: <BadgeCheckIcon />,
        roles: ["client"],
      },
    ],
  },

  /* =========================
     ⚙️ SETTINGS (BOTH)
  ========================= */
  {
    label: "System",
    items: [
      {
        title: "Workspace Settings",
        path: "/dashboard/settings",
        icon: <SettingsIcon />,
      },
    ],
  },
];

/* =========================
   FOOTER
========================= */

export const footerNavLinks: SidebarNavItem[] = [
  {
    title: "Help Center",
    path: "/help",
    icon: <HelpCircleIcon />,
  },
  {
    title: "System Status",
    path: "/status",
    icon: <ActivityIcon />,
  },
];

/* =========================
   FLAT NAV
========================= */

export const navLinks: SidebarNavItem[] = [
  ...navGroups.flatMap((group) =>
    group.items.flatMap((item) =>
      item.subItems?.length ? [item, ...item.subItems] : [item]
    )
  ),
  ...footerNavLinks,
];