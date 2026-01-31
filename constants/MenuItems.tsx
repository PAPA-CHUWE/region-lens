import {
    LayoutDashboard,
    Globe,
    GitCompare,
    Trophy,
    Lightbulb,
} from "lucide-react";

export const MenuItems = [
    {
        label: "Home",
        href: "/dashboard",
        icon: LayoutDashboard,
    },
    {
        label: "Regions",
        href: "/regions",
        icon: Globe,
    },
    {
        label: "Compare",
        href: "/compare",
        icon: GitCompare,
    },
    {
        label: "Rankings",
        href: "/rankings",
        icon: Trophy,
    },
    {
        label: "Insights",
        href: "/insights",
        icon: Lightbulb,
    },
];