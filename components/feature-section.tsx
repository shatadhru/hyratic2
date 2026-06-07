import { cn } from "@/lib/utils";
import type React from "react";
import {
	ZapIcon,
	ShieldCheckIcon,
	ActivityIcon,
	GlobeIcon,
} from "lucide-react";

type FeatureType = {
	title: string;
	icon: React.ReactNode;
	description: string;
};

export function FeatureSection() {
	return (
		<div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 py-4 md:grid-cols-4">

			{features.map((feature, index) => (
				<div
					key={feature.title}
					className={cn(
						"relative flex flex-col items-center justify-center p-2 text-center",
						
						// divider line between items
						"after:absolute after:inset-y-0 after:right-0 after:h-full after:w-px after:bg-linear-to-b after:from-foreground/6 after:via-foreground/25 after:to-foreground/6",

						// icon styling
						"[&_svg]:size-6 [&_svg]:text-orange-500",

						{
							"after:hidden": index === features.length - 1,
							"after:hidden after:md:block": index === 1,
						}
					)}
				>
					{feature.icon}

					<h3 className="mt-3 font-medium text-xs md:text-sm lg:text-base">
						{feature.title}
					</h3>

					<p className="mt-1 text-[10px] md:text-xs text-muted-foreground leading-snug">
						{feature.description}
					</p>
				</div>
			))}
		</div>
	);
}

/* =========================
   💼 Hyratic Features Data
========================= */
const features: FeatureType[] = [
	{
		title: "Fast Hiring",
		icon: <ZapIcon />,
		description: "Hire skilled freelancers instantly and start projects faster.",
	},
	{
		title: "Secure Payments",
		icon: <ShieldCheckIcon />,
		description: "Safe escrow system protects every transaction.",
	},
	{
		title: "Live Collaboration",
		icon: <ActivityIcon />,
		description: "Chat, track progress, and manage projects in real time.",
	},
	{
		title: "Global Talent",
		icon: <GlobeIcon />,
		description: "Access freelancers from anywhere in the world.",
	},
];