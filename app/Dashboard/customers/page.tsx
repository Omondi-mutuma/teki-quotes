import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { PlusCircle } from "lucide-react";
import { columns } from "./columns";
import { Payment } from "../customers/columns";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
        id: "728ed52f",
        status: "active",
        customer: "Teki Corp.",
        phone: "(254795871518)",
        email: "teki@corp.com",
        date: "02-03-2025",
        location: "Nairobi",
    },

    {
      id: "960gd77s",
      status: "inactive",
      customer: "Maniel Foods",
      phone: "(254799856454)",
      email: "maniel@email.com",
      date: "22-05-2024",
      location: "Nairobi",
  },
    // ...
  ];
}

export async function page  ()  {
  const data = await getData();
  return (
    <div className="container w-full p-4 mx-auto">
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold">Customers</h2>
        <Button variant="default"><PlusCircle className="size-5" />Add Customer</Button>
      </div>
      <div>
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default page;
