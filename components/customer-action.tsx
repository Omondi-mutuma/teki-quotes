"use client"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { useRouter } from "next/navigation";

const CustomerAction = () => {
    const router = useRouter();
    const handleAddCustomer = () => {
        router.push("/Dashboard/customers/create");
    };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" onClick={handleAddCustomer}>
          <PlusCircle className="size-5" />
          Add Customer
        </Button>
      </DialogTrigger>
    </Dialog>
  );
};

export default CustomerAction;
