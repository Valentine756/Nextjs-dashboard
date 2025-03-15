import React from "react";

const InvoicePage = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return <div>InvoicePage</div>;
};

export default InvoicePage;
