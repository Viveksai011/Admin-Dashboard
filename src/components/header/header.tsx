import { Car, History } from "lucide-react";
import React from "react";
import Signout from "@/components/header/Signout";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Dropdown from "@/components/header/dropdown";
import { Auditlogmodal } from "@/components/header/auditlogmodal";
import { Drawerside } from "@/components/sidebar/drawerside";

const Headers = () => {
  const mockUser = {
    name: "Demo Admin",
    email: "admin@carrentals.com",
  };

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="block md:hidden">
            <Drawerside />
          </div>
          <div className=" hidden md:flex w-10 h-10 bg-blue-600 rounded-lg md:items-center md:justify-center">
            <Car className="text-white w-6 h-6" />
          </div>
          <div className="hidden lg:block">
            <h1 className="text-xl font-bold text-gray-900">CarRent Admin</h1>
            <p className="text-sm text-gray-600">Rental Listings Management</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-2">
            <Auditlogmodal>
              <History className="w-5 h-5" />
              Audit Trail
            </Auditlogmodal>
            <Avatar>
              <AvatarFallback className="bg-blue-600 text-white">
                DA
              </AvatarFallback>
            </Avatar>
            <div className="text-sm">
              <p className="font-medium text-gray-900">{mockUser.name}</p>
              <p className="text-gray-500">{mockUser.email}</p>
            </div>
            <Signout />
          </div>
          <Dropdown mockUser={mockUser} />
        </div>
      </div>
    </header>
  );
};

export default Headers;
