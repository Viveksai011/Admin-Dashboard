import { Menu, Car, LayoutDashboard } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

const navigationItems = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
];

export function Drawerside() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <Car className="text-white w-6 h-6" />
            </div>
            Car Admin
          </SheetTitle>
        </SheetHeader>
        <hr />
        <ul className="space-y-2 mt-3">
          {navigationItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={
                  "flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition-colors text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }
              >
                <item.icon className="w-5 h-5" />
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
}
