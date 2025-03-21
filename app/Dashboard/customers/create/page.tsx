import { CustomerForm } from "@/components/customer-form";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const page = () => {
  return (
    <main className="p-4 lg:gap-2 lg:px-6">
      <div className="flex w-full items-center gap-1 ">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/Dashboard/customers">
                Customers
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/Dashboard/customers/create">
                create customers
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-3">
        <div className="col-span-2">
          <CustomerForm />
        </div>
      </div>
    </main>
  );
};

export default page;
