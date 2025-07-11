"use client";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { StatCardData } from "@/lib/statssection";
import { useListStore } from "@/store/useListstore";
import { BarChart3, Clock, CheckCircle, XCircle } from "lucide-react";

const iconMap = {
  BarChart3,
  Clock,
  CheckCircle,
  XCircle,
};

export default function StatsCard({ title, iconName, color }: StatCardData) {
  const { cars } = useListStore();
  const Icon = iconMap[iconName as keyof typeof iconMap];

  return (
    <Card className="py-4">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-xl font-medium">{title}</CardTitle>
        {Icon && <Icon className={`h-7 w-7 ${color?.icon || ""}`} />}
      </CardHeader>
      <CardContent>
        <div className={`text-2xl font-bold`}>
          {title === "Total Listings" && cars.length}
          {title === "Pending" &&
            cars.filter((car) => car.Status === "pending").length}
          {title === "Approved" &&
            cars.filter((car) => car.Status === "approve").length}
          {title === "Rejected" &&
            cars.filter((car) => car.Status === "reject").length}
        </div>
      </CardContent>
    </Card>
  );
}
