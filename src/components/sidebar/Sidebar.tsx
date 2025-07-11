import { cn } from "@/lib/utils";
import { Car, LayoutDashboard } from "lucide-react";
import Link from "next/link";

export function Sidebar() {
  const navigation = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
    },
  ];

  return (
    <main className="max-w-64 w-full h-screen bg-white border-r border-gray-200 py-6 ">
      <div className="flex items-center space-x-4 mb-[15px] px-4">
        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
          <Car className="text-white w-6 h-6" />
        </div>
        <div className="hidden sm:block">
          <h1 className="text-xl font-bold text-gray-900">CarRent Admin</h1>
        </div>
      </div>
      <hr />
      <ul className="space-y-2 mt-3">
        {navigation.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className={cn(
                "flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition-colors",
                "text-gray-600 hover:text-gray-900 hover:bg-gray-50",
              )}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
