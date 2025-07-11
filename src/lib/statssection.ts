export type StatCardData = {
  title: string;
  iconName: string;
  color?: {
    icon?: string;
    text?: string;
  };
};

export const StatSection: StatCardData[] = [
  {
    title: "Total Listings",
    iconName: "BarChart3",
    color: { icon: "text-muted-foreground", text: "" },
  },
  {
    title: "Pending",
    iconName: "Clock",
    color: { icon: "text-yellow-600", text: "text-yellow-600" },
  },
  {
    title: "Approved",
    iconName: "CheckCircle",
    color: { icon: "text-green-600", text: "text-green-600" },
  },
  {
    title: "Rejected",
    iconName: "XCircle",
    color: { icon: "text-red-600", text: "text-red-600" },
  },
];

export const TableHeaders = [
  "Car Title",
  "Model",
  "Price",
  "Availability",
  "Actions",
  "More",
];
