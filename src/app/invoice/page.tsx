"use client";
import { InvoiceViewer } from "./components/Invoice";

export default function InvoicePage() {
  // Example data - replace with your actual data
  const invoiceData = {
    receipt_no: "INV-2023-001",
    customer: {
      name: "John Doe",
      present_address: "123 Main St, City",
      username: "johndoe",
      client_no: "CL-001",
    },
    package: {
      title: "10Mbps",
      price_with_vat: "৳1,200",
    },
    expire_date: "2023-12-31",
    created_at: new Date().toLocaleDateString("en-GB"),
    images: {
      logo: "https://i.ibb.co/4R0V0tbB/Logo.png",
      barcode: "https://i.ibb.co/k6JhsCGZ/image-1102.png",
    },
  };

  return (
    <div className="container mx-auto p-4">
      <div className="border rounded-lg overflow-hidden">
        <InvoiceViewer data={invoiceData} />
      </div>
    </div>
  );
}
