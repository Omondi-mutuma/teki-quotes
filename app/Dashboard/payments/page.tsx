import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
        id: "728ed52f",
        amount: 100,
        status: "pending",
        quotation: "TQT-101-2025",
        customer: "Teki Corp.",
        invoice: "TIN-154-2025",
        date: "02-03-2025"
    },

    {
        id: "657df58k",
        amount: 100,
        status: "pending",
        quotation: "TQT-187-2025",
        customer: "Jane Doe",
        invoice: "TIN-192-2025",
        date: "02-03-2025"
    },
    // ...
  ];
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="w-full mx-auto py-5">
        <h2 className="text-xl font-semibold">Recent Activity</h2>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
