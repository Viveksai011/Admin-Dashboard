import { StatSection } from "@/lib/statssection";
import StatsCard from "@/components/dashboard/statscard";
import { TableData } from "@/components/dashboard/tabledata";

const Maindashboard = () => {
  return (
    <section className=" bg-gray-100 space-y-6 w-full px-8 ">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mt-1.5 ">Dashboard</h1>
        <p className="text-gray-600 p-0 ">Manage car rental listings</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {StatSection.map((item, index) => (
          <StatsCard
            key={index}
            title={item.title}
            iconName={item.iconName}
            color={item.color}
          />
        ))}
      </div>
      <TableData />
    </section>
  );
};

export default Maindashboard;
