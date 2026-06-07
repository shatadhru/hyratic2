import { Button } from "@/components/ui/button";
import { FullWidthDivider } from "@/components/full-width-divider";
import { ArrowRightIcon } from "lucide-react";

export function CallToAction() {
	return (
		<div className="relative mx-auto flex w-full max-w-3xl flex-col justify-between border-x">

			<FullWidthDivider className="-top-px" />

			{/* Main CTA Text */}
			<div className="border-b px-4 py-8">
				<h2 className="text-center font-semibold text-lg md:text-2xl">
					Start Earning. Start Hiring. Start Building.
				</h2>

				<p className="text-balance text-center text-muted-foreground text-sm md:text-base mt-2">
					Join Hyratic — connect with global freelancers and grow your business faster.
				</p>
			</div>

			{/* Buttons */}
			<div className="flex items-center justify-center gap-3 bg-secondary/80 p-4 dark:bg-secondary/40">
				
				<Button variant="outline" className="rounded-full px-5">
					Hire Talent
				</Button>

				<Button className="rounded-full px-5">
					Find Work{" "}
					<ArrowRightIcon className="ml-1" />
				</Button>

			</div>

			<FullWidthDivider className="-bottom-px" />
		</div>
	);
}