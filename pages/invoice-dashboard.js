import React, { useState, useEffect, useCallback } from "react";
import { api } from "./api/api";
import { USDollar } from "../shared/utils";

const InvoiceDashboard = () => {
  const [invoices, setInvoices] = useState([]);
  const [status, setStatus] = useState("pending");

  const loadCategories = useCallback(async () => {
    const response = await api.get(`/dashboard?status=${status}`);
    return response.data.data;
  }, [status]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const services = await loadCategories();
        setInvoices(services);
      } catch (error) {
        throw new Error("Error fetching data: " + error);
      }
    };
  
    fetchData();
  }, [status, loadCategories]);
  

  return (
    <div className="container">
      <select
        className="select-class"
        onChange={(e) => setStatus(e.target.value)}
        name=""
        id=""
      >
        <option style={{ color: "green" }} value="pending">
          Pending
        </option>
        <option value="paid">Paid</option>
      </select>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Invoice #</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Email</th>
            <th scope="col">Amount</th>
            <th scope="col">Service</th>
            <th scope="col">Due Date</th>
          </tr>
        </thead>
        {invoices &&
          invoices.map((invoiceItem, index) => {
            return (
              <tbody key={index}>
                <tr>
                  <th scope="row">{invoiceItem.account?._id}</th>
                  <td>{invoiceItem.account?.firstName}</td>
                  <td>{invoiceItem.account?.lastName}</td>
                  <td>{invoiceItem.account?.email}</td>
                  <td>{USDollar.format(invoiceItem.amount)}</td>
                  <td>{invoiceItem.service}</td>
                  <td>{invoiceItem.due_date.toLocaleString()}</td>
                </tr>
              </tbody>
            );
          })}
      </table>
    </div>
  );
};

export default InvoiceDashboard;
