import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import Signout from "@/components/header/Signout";
import { Auditlogmodal } from "@/components/header/auditlogmodal";
import { History } from "lucide-react";

interface MockUser {
  name: string;
  email: string;
}

interface DropdownProps {
  mockUser: MockUser;
}

const Dropdown = ({ mockUser }: DropdownProps) => {
  return (
    <div className="md:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar className="cursor-pointer">
            <AvatarFallback className="bg-blue-600 text-white">
              DA
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 p-3">
          <Auditlogmodal>
            <History className="w-5 h-5" />
            Audit Trail
          </Auditlogmodal>
          <DropdownMenuLabel className="text-sm">
            <p className="font-medium">{mockUser.name}</p>
            <p className="text-xs text-gray-500">{mockUser.email}</p>
          </DropdownMenuLabel>
          <DropdownMenuItem>
            <Signout />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Dropdown;
