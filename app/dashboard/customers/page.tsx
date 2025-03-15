import { resolve } from "path";
import React from "react";

const CustomersPage = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return <div>CustomersPage</div>;
};

export default CustomersPage;
