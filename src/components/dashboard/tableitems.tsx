import React from "react";
import { TableRow, TableCell } from "@/components/ui/table";
import CarDialog from "@/components/dashboard/cardialog";
import { Edit } from "lucide-react";

interface Tableitemsprops {
  item: {
    id: string;
    name: string;
    modale: string;
    Price: number;
    availability: boolean;
    Status: string;
    createdAt: string;
    avatar: string;
  };
}

const Tableitems: React.FC<Tableitemsprops> = ({ item }) => {
  return (
    <TableRow key={item.id}>
      <TableCell className="font-medium w-[16.6%]">{item.name}</TableCell>
      <TableCell className="w-[16.6%]">{item.modale}</TableCell>
      <TableCell className="w-[16.6%]">{item.Price}</TableCell>
      <TableCell className="w-[16.6%]">
        {item.availability ? "Available" : "Not Available"}
      </TableCell>
      <TableCell className="w-[16.6%]">{item.Status}</TableCell>
      <TableCell className="flex items-start w-[16.6%]">
        <CarDialog
          className="text-black px-3 py-1 rounded cursor-pointer"
          car={{
            createdAt: item.createdAt,
            name: item.name,
            avatar: item.avatar,
            availability: item.availability,
            model: item.modale,
            id: item.id,
            status: (item.Status?.toLowerCase?.() || "pending") as
              | "approve"
              | "reject"
              | "pending",
            price: item.Price,
          }}
        >
          <Edit className="h-4 w-4" />
        </CarDialog>
      </TableCell>
    </TableRow>
  );
};

export default Tableitems;
