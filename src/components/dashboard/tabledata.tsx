"use client";

import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  TableHead,
} from "@/components/ui/table";
import { Search } from "lucide-react";
import { PaginationComp } from "@/components/dashboard/pagination";
import { useListStore } from "@/store/useListstore";
import { TableHeaders } from "@/lib/statssection";
import dynamic from "next/dynamic";
const Tableitems = dynamic(() => import("@/components/dashboard/tableitems"));

export function TableData() {
  const { cars, setCars } = useListStore();
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(true);
  const rowsPerPage = 7;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/carddetails");
        const data = await res.json();
        setCars(data);
      } catch (error) {
        console.error("Error fetching car data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredCars = filter
    ? cars.filter(
        (car) =>
          car.name.toLowerCase().includes(filter.toLowerCase()) ||
          car.modale.toLowerCase().includes(filter.toLowerCase()) ||
          car.Price.toString().toLowerCase().includes(filter.toLowerCase()) ||
          (car.availability ? "available" : "not available")
            .toLowerCase()
            .includes(filter.toLowerCase()) ||
          car.Status.toLowerCase().includes(filter.toLowerCase()),
      )
    : cars;

  const totalPages = Math.ceil(filteredCars.length / rowsPerPage);
  const paginatedCars = filteredCars.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage,
  );

  return (
    <>
      <h1 className="text-[18px] font-bold my-4">Admin Dashboard</h1>
      <div className="border-2 px-3 border-blue-700/30 rounded-xl flex items-center mb-2">
        <Search className="top-3 h-5 w-5 text-blue-600" />
        <input
          type="text"
          className="px-1 py-2  w-full focus:outline-none "
          placeholder="Comman Search for name , model, price , availability, action"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            {TableHeaders.map((header) => (
              <TableHead key={header} className="w-[16.6%]">
                {header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {loading ? (
            Array.from({ length: 7 }).map((_, idx) => (
              <TableRow key={idx}>
                {TableHeaders.map((_, i) => (
                  <TableCell key={i}>
                    <div className=" h-8 max-w-[100px] bg-gray-300 rounded animate-pulse"></div>
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : filteredCars.length === 0 ? (
            <TableRow>
              <TableCell colSpan={TableHeaders.length} className="text-center">
                No cars found matching your search criteria.
              </TableCell>
            </TableRow>
          ) : (
            paginatedCars.map((item) => (
              <Tableitems key={item.id} item={item} />
            ))
          )}
        </TableBody>
      </Table>
      {filteredCars.length !== 0 && (
        <PaginationComp
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </>
  );
}
