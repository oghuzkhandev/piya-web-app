"use client";
import React from "react";
import Timeline from "@/components/ui/timeline";
import {
  ShoppingCart,
  FileText,
  PackageCheck,
  Truck,
  CheckCircle,
} from "lucide-react";

export default function OrderProcessTimeline() {
  const steps = [
    {
      title: "1. Order Placed",
      content: (
        <div className="flex items-start gap-4">
          <ShoppingCart className="w-15 h-12 text-red-500" />
          <div className="flex flex-col items-center">
            <p className="text-md font-semibold text-gray-600 dark:text-neutral-200 mb-2 text-left">
              The customer places the order through the website or mobile app. Products are selected and payment is confirmed.
            </p>
            <img
              src="/images/order.svg"
              alt="Order Placed"
              className="h-48 w-72 object-contain mt-5 mr-8 rounded-lg shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2. Invoice Sent",
      content: (
        <div className="flex items-start gap-4">
          <FileText className="w-15 h-12 text-blue-500" />
          <div className="flex flex-col items-center">
            <p className="text-md font-semibold text-gray-600 dark:text-neutral-200 mb-2 text-left">
              The system confirms the order and sends an invoice to the customer's email address automatically.
            </p>
            <img
              src="/images/success.svg"
              alt="Invoice Sent"
              className="h-48 w-72 object-contain mt-5 mr-8 rounded-lg shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "3. Warehouse Processing",
      content: (
        <div className="flex items-start gap-4">
          <PackageCheck className="w-15 h-12 text-yellow-500" />
          <div className="flex flex-col items-center">
            <p className="text-md font-semibold text-gray-600 dark:text-neutral-200 mb-2 text-left">
              Our warehouse team picks and packs the products, verifies with barcode scanners, and prepares for shipment.
            </p>
            <img
              src="/images/logistics.svg"
              alt="Warehouse"
              className="h-48 w-72 object-contain mt-5 mr-8 rounded-lg shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "4. Out for Delivery",
      content: (
        <div className="flex items-start gap-4">
          <Truck className="w-15 h-12 text-orange-500" />
          <div className="flex flex-col items-center">
            <p className="text-md font-semibold text-gray-600 dark:text-neutral-200 mb-2 text-left">
              The package is loaded into our delivery vehicle and shipped to the customer’s address. GPS tracking is available.
            </p>
            <img
              src="/images/deliverytruck.svg"
              alt="Delivery"
              className="h-48 w-72 object-contain mt-5 mr-8 rounded-lg shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "5. Delivered",
      content: (
        <div className="flex items-start gap-4">
          <CheckCircle className="w-15 h-12 text-green-500" />
          <div className="flex flex-col items-center">
            <p className="text-md font-semibold text-gray-600 dark:text-neutral-200 mb-2 text-left">
              The customer receives the order and a delivery confirmation is sent. Feedback or returns can be managed afterward.
            </p>
            <img
              src="/images/delivered.png"
              alt="Delivered"
              className="h-48 w-72 object-contain mt-5 mr-8 rounded-md shadow-lg"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div>
      <Timeline data={steps} />
    </div>
  );
}
