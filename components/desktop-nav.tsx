import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import {
  companyLinks,
  companyLinks2,
  productLinks,
  freelanceLinks,
} from "@/components/nav-links";

import { LinkItem } from "@/components/sheard";

/* =========================
   🎨 BRAND HOVER STYLE
========================= */
const hoverStyle =
  "transition-colors duration-200 hover:text-[#FE5B00] hover:bg-[#FE5B00]/10";

  export function DesktopNav() {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>

        {/* =========================
            🚀 PRODUCT (HYRATIC CORE)
        ========================= */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent hover:text-[#FE5B00] transition-colors">
            Product
          </NavigationMenuTrigger>

          <NavigationMenuContent className="bg-muted/50 dark:bg-background p-2">
            <div className="grid w-[600px] grid-cols-2 gap-2 border bg-popover p-2 shadow">

              {productLinks.map((item, i) => (
                <NavigationMenuLink asChild key={i}>
                  <div className={hoverStyle}>
                    <LinkItem {...item} />
                  </div>
                </NavigationMenuLink>
              ))}

            </div>

            <div className="p-2 text-sm text-muted-foreground">
              Interested?{" "}
              <a
                className="font-medium text-foreground hover:text-[#FE5B00] transition-colors"
                href="#"
              >
                Schedule a demo
              </a>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* =========================
            💼 FREELANCE CATEGORY
        ========================= */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent hover:text-[#FE5B00] transition-colors">
            Freelance
          </NavigationMenuTrigger>

          <NavigationMenuContent className="bg-muted/50 dark:bg-background p-2">
            <div className="grid w-[600px] grid-cols-2 gap-2 border bg-popover p-2 shadow">

              {freelanceLinks.map((item, i) => (
                <NavigationMenuLink asChild key={i}>
                  <div className={hoverStyle}>
                    <LinkItem {...item} />
                  </div>
                </NavigationMenuLink>
              ))}

            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* =========================
            🏢 COMPANY
        ========================= */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent hover:text-[#FE5B00] transition-colors">
            Company
          </NavigationMenuTrigger>

          <NavigationMenuContent className="bg-muted/50 dark:bg-background p-2">
            <div className="grid w-[600px] grid-cols-2 gap-2">

              {/* LEFT */}
              <div className="space-y-2 border bg-popover p-2 shadow">
                {companyLinks.map((item, i) => (
                  <NavigationMenuLink asChild key={i}>
                    <div className={hoverStyle}>
                      <LinkItem {...item} />
                    </div>
                  </NavigationMenuLink>
                ))}
              </div>

              {/* RIGHT */}
              <div className="space-y-2 p-3">
                {companyLinks2.map((item, i) => (
                  <NavigationMenuLink
                    key={i}
                    href={item.href}
                    className={`flex items-center gap-2 rounded-md px-2 py-2 text-sm ${hoverStyle}`}
                  >
                    {item.icon}
                    {item.label}
                  </NavigationMenuLink>
                ))}
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* =========================
            💰 PRICING
        ========================= */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <a
              href="#"
              className={`px-4 py-2 rounded-md text-sm ${hoverStyle}`}
            >
              Pricing
            </a>
          </NavigationMenuLink>
        </NavigationMenuItem>

      </NavigationMenuList>
    </NavigationMenu>
  );
}