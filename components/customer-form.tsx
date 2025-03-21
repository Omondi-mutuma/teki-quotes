"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Form, FormControl, FormDescription, FormField as FormFieldComponent,
  FormItem, FormLabel, FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { 
  Select, SelectContent, SelectItem, 
  SelectTrigger, SelectValue 
} from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent,
  CardFooter 
} from "@/components/ui/card"

const formSchema = z.object({
  status: z.string(),
  customer: z.string().min(2, { message: "Customer name must be at least 2 characters." }),
  phone: z.string().min(10, { message: "Phone number must be at least 10 digits" }),
  email: z.string().email({ message: "Invalid email address" }),
  date: z.date(),
  location: z.string().min(2, { message: "Location must be at least 2 characters." }),
})

const statusOptions = [
  { value: "active", label: "Active" },
  { value: "inactive", label: "Inactive" },
  { value: "pending", label: "Pending" },
] as const;

type FormField = {
  name: keyof z.infer<typeof formSchema>;
  label: string;
  type: 'text' | 'email' | 'tel' | 'select' | 'date';
  placeholder: string;
  description: string;
  group: 'basic' | 'contact' | 'additional';
}

const formFields: FormField[] = [
  {
    name: "status",
    label: "Status",
    type: "select",
    placeholder: "Select status",
    description: "Current status of the customer",
    group: "basic",
  },
  {
    name: "customer",
    label: "Customer Name",
    type: "text",
    placeholder: "Teki Corp.",
    description: "Full company or customer name",
    group: "basic",
  },
  {
    name: "phone",
    label: "Phone",
    type: "tel",
    placeholder: "(254795871518)",
    description: "Contact phone number",
    group: "contact",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "teki@corp.com",
    description: "Contact email address",
    group: "contact",
  },
  {
    name: "date",
    label: "Date",
    type: "date",
    placeholder: "Pick a date",
    description: "Scheduled date",
    group: "additional",
  },
  {
    name: "location",
    label: "Location",
    type: "text",
    placeholder: "Nairobi",
    description: "Customer location",
    group: "additional",
  },
] as const;

const FormFieldContent = ({ field, fieldProps }: { 
  field: FormField, 
  fieldProps: any 
}) => {
  if (field.type === 'select') {
    return (
      <Select 
        onValueChange={fieldProps.onChange} 
        value={fieldProps.value as string}
        defaultValue={fieldProps.value as string}
      >
        <SelectTrigger>
          <SelectValue placeholder={field.placeholder} />
        </SelectTrigger>
        <SelectContent>
          {statusOptions.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    );
  }

  if (field.type === 'date') {
    return (
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              "w-[240px] justify-start text-left font-normal",
              !fieldProps.value && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {fieldProps.value ? format(fieldProps.value as Date, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={fieldProps.value as Date}
            onSelect={fieldProps.onChange}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    );
  }

  return (
    <Input 
      type={field.type}
      placeholder={field.placeholder}
      {...fieldProps}
    />
  );
};

const FormSection = ({ title, fields, form }: { 
  title: string, 
  fields: FormField[], 
  form: any 
}) => (
  <div>
    <h3 className="text-base font-medium text-muted-foreground">{title}</h3>
    <div className="grid grid-cols-2 gap-4 mt-4">
      {fields.map((field) => (
        <FormFieldComponent
          key={field.name}
          control={form.control}
          name={field.name}
          render={({ field: fieldProps }) => (
            <FormItem>
              <FormLabel>{field.label}</FormLabel>
              <FormControl>
                <FormFieldContent field={field} fieldProps={fieldProps} />
              </FormControl>
              {/* <FormDescription>{field.description}</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
      ))}
    </div>
  </div>
);

export function CustomerForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      status: "active",
      customer: "",
      phone: "",
      email: "",
      date: new Date(),
      location: "",
    },
  })
   
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <Card>
        <CardHeader>
          <CardTitle>Customer Information</CardTitle>
          <CardDescription>Add new customer details to the system.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormSection 
              title="Basic Information" 
              fields={formFields.filter(field => field.group === 'basic')}
              form={form}
            />
            <FormSection 
              title="Contact Information" 
              fields={formFields.filter(field => field.group === 'contact')}
              form={form}
            />
            <FormSection 
              title="Additional Information" 
              fields={formFields.filter(field => field.group === 'additional')}
              form={form}
            />
          </form>
        </CardContent>
        <CardFooter>
          <Button type="submit" onClick={form.handleSubmit(onSubmit)}>Submit</Button>
        </CardFooter>
      </Card>
    </Form>
  );
}
