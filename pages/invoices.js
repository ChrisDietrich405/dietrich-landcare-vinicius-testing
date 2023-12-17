import React, { useState, useEffect } from "react";
import Link from "next/link";
import MainPage from "../components/Dashboard/mainpage";
import { authChecker } from "../lib/auth-checker";
import { api } from './api/api'

import styles from "../styles/invoices.module.css";

const Invoices = () => {
  const [invoice, setInvoice] = useState([]);

  const getInvoices = async function (id) {
    const response = await api.get(`/invoices/${id}`);
    return response.data;
  };

  useEffect(() => {
    const callApi = async () => {
      const { _id } = authChecker();
      const data = await getInvoices(_id);
      setInvoice(data);
    };

    callApi();
  }, []);

  return (
    <MainPage className="App">
      <table className={styles.table}>
        <thead className={styles.tableThead}>
          <tr className={styles.tableRow}>
            <th>Amount</th>
            <th>Due Date</th>
            <th>Service</th>
            <th>Invoice Number</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody className={styles.tableBody}>
          {invoice &&
            invoice.map((invoiceItem) => (
              <React.Fragment key={invoiceItem._id}>
                <tr className={styles.tableRow}>
                  {invoiceItem.status !== "paid" && (
                    <td colSpan="5" className={styles.linkContainer}>
                      <Link href={`/pay-invoice?id=${invoiceItem._id}`}>
                        <a className={styles.link}>Pay Invoice</a>
                      </Link>
                    </td>
                  )}
                  <td>${invoiceItem.amount}</td>
                  <td>{invoiceItem.due_date}</td>
                  <td>{invoiceItem.service}</td>
                  <td>{invoiceItem.account_id}</td>
                  <td>{invoiceItem.status}</td>
                </tr>
              </React.Fragment>
            ))}
        </tbody>
      </table>
    </MainPage>
  );
};

export default Invoices;
