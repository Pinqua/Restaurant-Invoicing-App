import React from "react";
import InvoiceDescription from "./InvoiceDescription/InvoiceDescription";
import { useParams } from "react-router-dom";
import "./Invoice.css";

function Invoice({ invoices }) {
  const { invoiceId } = useParams();
  return (
    <div className="invoice">
      <h1 className="invoice__heading">Invoice</h1>
      <InvoiceDescription
        invoice={invoices.find((invoice) => invoice.id === invoiceId)}
      />
    </div>
  );
}

export default Invoice;
