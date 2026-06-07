"use client";

import { AppleIcon } from "@/components/apple-icon";
import { FacebookIcon } from "@/components/facebook-icon";
import { GooglePlayIcon } from "@/components/google-play-icon";
import { InstagramIcon } from "@/components/instagram-icon";
import { LinkedinIcon } from "@/components/linkedin-icon";
import { XIcon } from "@/components/x-icon";
import { Button } from "@/components/ui/button";

export function Footer() {
	return (
		<footer className="border-t">
			<div className="mx-auto max-w-6xl px-4 lg:px-6">
				{/* Grid container with headings and links */}
				<div className="grid grid-cols-2 gap-8 py-8 md:grid-cols-4">
					{footerLinks.map((item) => (
						<div key={item.title}>
							<h3 className="mb-4 text-xs">{item.title}</h3>
							<ul className="space-y-2 text-muted-foreground text-sm">
								{item.links.map((link) => (
									<li key={link.label}>
										<a className="hover:text-foreground" href={link.href}>
											{link.label}
										</a>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>

				<div className="h-px bg-border" />

				{/* Social Buttons + App Links */}
				<div className="flex flex-wrap items-center justify-between gap-4 py-5">
					<div className="flex items-center gap-2">
						{socialLinks.map(({ icon, href }, index) => (
							<Button
								asChild
								key={`social-${href}-${index}`}
								size="icon"
								variant="outline"
							>
								<a href={href}>{icon}</a>
							</Button>
						))}
					</div>

					<div className="flex gap-4">
						<Button asChild className="h-11">
							<a href="#">
								<GooglePlayIcon className="size-5" />
								<div className="flex flex-col items-start justify-center pr-2 text-left">
									<span className="font-light text-[10px] leading-none tracking-tighter">
										GET IT ON
									</span>
									<p className="font-bold text-base leading-none">
										Google Play
									</p>
								</div>
							</a>
						</Button>

						<Button asChild className="h-11">
							<a href="#">
								<AppleIcon className="size-5" />
								<div className="flex flex-col items-start justify-center pr-2 text-left">
									<span className="text-[10px] leading-none tracking-tighter">
										Download on the
									</span>
									<p className="font-bold text-base leading-none">
										App Store
									</p>
								</div>
							</a>
						</Button>
					</div>
				</div>

				<div className="h-px bg-border" />

				<div className="py-4 text-center text-muted-foreground text-xs">
					<p>&copy; {new Date().getFullYear()} Hyratic, All rights reserved</p>
				</div>
			</div>
		</footer>
	);
}

const footerLinks = [
	{
		title: "Company",
		links: [
			{ href: "#", label: "Engineering Blog" },
			{ href: "#", label: "Hyratic Marketplace" },
			{ href: "#", label: "What's New" },
			{ href: "#", label: "About Hyratic" },
			{ href: "#", label: "Press" },
			{ href: "#", label: "Careers" },
			{ href: "#", label: "Social Impact" },
		],
	},
	{
		title: "Community",
		links: [
			{ href: "#", label: "Hyratic for Enterprise" },
			{ href: "#", label: "Freelancer Report 2026" },
			{ href: "#", label: "Freelancer Report 2025" },
			{ href: "#", label: "Charity Projects" },
			{ href: "#", label: "Trending Skills" },
			{ href: "#", label: "Freelancer Directory" },
			{ href: "#", label: "Explore Templates" },
		],
	},
	{
		title: "Support",
		links: [
			{ href: "#", label: "Help Center" },
			{ href: "#", label: "Getting Started" },
			{ href: "#", label: "Hyratic Pro" },
			{ href: "#", label: "Features & Guides" },
			{ href: "#", label: "FAQs" },
			{ href: "#", label: "Report an Issue" },
		],
	},
	{
		title: "Legal",
		links: [
			{ href: "#", label: "Terms & Conditions" },
			{ href: "#", label: "Privacy Policy" },
			{ href: "#", label: "Cookie Policy" },
			{ href: "#", label: "Trust & Safety" },
			{ href: "#", label: "Cookie Preferences" },
			{ href: "#", label: "Transparency Report" },
			{ href: "#", label: "Law Enforcement Policy" },
		],
	},
];

const socialLinks = [
	{
		icon: <FacebookIcon />,
		href: "#",
	},
	{
		icon: <InstagramIcon />,
		href: "#",
	},
	{
		icon: <LinkedinIcon />,
		href: "#",
	},
	{
		icon: <XIcon />,
		href: "#",
	},
];