import React from "react";
import Headers from "@/components/header/header";
import { Sidebar } from "@/components/sidebar/Sidebar";
import Maindashboard from "@/components/dashboard/maindashboard";
import type { Metadata }  from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Manage your car rental listings efficiently",
};

const page = () => {
  return (
    <main className="flex h-screen">
      <section className="hidden md:block">
        <Sidebar />
      </section>
      <section className="bg-gray-100 flex flex-col flex-1">
        <Headers />
        <Maindashboard />
      </section>
    </main>
  );
};

export default page;
