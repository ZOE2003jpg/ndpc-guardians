import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Shield, BookOpen, CheckCircle, Users, FileText, Settings, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Training & Awareness",
    description: "NDPA knowledge programs for employees",
    icon: BookOpen,
    href: "/training"
  },
  {
    title: "Data Protection Training",
    description: "Role-specific compliance training",
    icon: Users,
    href: "/training/data-protection"
  },
  {
    title: "Audit & DPIAs",
    description: "Gap analysis and impact assessments",
    icon: CheckCircle,
    href: "/audit"
  },
  {
    title: "Registration Support",
    description: "NDPC Controller/Processor registration",
    icon: FileText,
    href: "/registration"
  },
  {
    title: "Compliance Tools",
    description: "Technology-driven compliance platforms",
    icon: Settings,
    href: "/tools"
  },
  {
    title: "Full NDPA Program",
    description: "End-to-end compliance lifecycle",
    icon: Shield,
    href: "/full-program"
  }
];

const resources = [
  { title: "NDPA Compliance Checklist", href: "/resources/checklist" },
  { title: "Self-Assessment Tool", href: "/resources/assessment" },
  { title: "Key Requirements Guide", href: "/resources/requirements" },
  { title: "Case Studies", href: "/case-studies" },
  { title: "Whitepapers", href: "/resources/whitepapers" },
  { title: "Webinars", href: "/resources/webinars" }
];

const sectors = [
  { title: "Healthcare Guidance", href: "/sectors/healthcare" },
  { title: "Financial Services", href: "/sectors/finance" },
  { title: "SMEs & Large Enterprises", href: "/sectors/sme-enterprise" },
  { title: "Technology Companies", href: "/sectors/technology" }
];

export function MegaMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="space-x-2">
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent">
            Services
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[800px] gap-3 p-6 md:grid-cols-2">
              {services.map((service) => (
                <NavigationMenuLink key={service.href} asChild>
                  <a
                    className={cn(
                      "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors"
                    )}
                    href={service.href}
                  >
                    <div className="flex items-center space-x-3">
                      <service.icon className="h-5 w-5 text-primary" />
                      <div>
                        <div className="text-sm font-medium leading-none">{service.title}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </a>
                </NavigationMenuLink>
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent hover:bg-accent/10">
            NDPA
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-[400px] p-6">
              <div className="space-y-3">
                <h4 className="text-sm font-medium leading-none text-primary">
                  Nigeria Data Protection Act 2023
                </h4>
                <p className="text-sm text-muted-foreground">
                  Essential information and guidance for NDPA compliance
                </p>
              </div>
              <div className="mt-6 space-y-2">
                {sectors.map((sector) => (
                  <NavigationMenuLink key={sector.href} asChild>
                    <a
                      className="block select-none rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                      href={sector.href}
                    >
                      {sector.title}
                    </a>
                  </NavigationMenuLink>
                ))}
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent hover:bg-accent/10">
            Resources
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-[300px] p-6">
              <div className="space-y-2">
                {resources.map((resource) => (
                  <NavigationMenuLink key={resource.href} asChild>
                    <a
                      className="block select-none rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                      href={resource.href}
                    >
                      {resource.title}
                    </a>
                  </NavigationMenuLink>
                ))}
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <a
              className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
              href="/insights"
            >
              Insights
            </a>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <a
              className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
              href="/case-studies"
            >
              Case Studies
            </a>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <a
              className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
              href="/about"
            >
              About
            </a>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}