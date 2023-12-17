import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Router from "next/router";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

import { api } from "../api/api";
import { toast } from "react-toastify";

import { authChecker } from "../../lib/auth-checker";
import MainPage from "../../components/Dashboard/mainpage";

export default function AddInvoice() {
  const [user, setUser] = useState(null);
  const [date, setDate] = useState(null);
  const [dueDate, setDueDate] = useState(null);
  const [service, setService] = useState("");
  const [amount, setAmount] = useState("");

  const router = useRouter();
  const userId = router.query.id;

  const handleFindUserById = async (id) => {
    const response = await api.get(`account/${id}`);
    if (response.status === 200) {
      setUser(response.data);
    }
  };

  if (userId && !user) {
    handleFindUserById(userId);
  }

  useEffect(() => {
    authChecker();
  }, []);

  const handleChange = (e) => {
    setUser(e.target.value);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const response = await api.post("/invoice", {
      user,
      date,
      amount,
      service,
      dueDate,
    });
    if (response.status === 200) {
      toast.success("invoice added");
      Router.push("/");
    }

    return response;
  };

  return (
    <MainPage>
      <div className="card my-2">
        <div className="card-body">
          <h5 className="card-title">Add Invoice</h5>
          {user && (
            <>
              <h3>First name: {user.firstName}</h3>
              <h3>Last name: {user.lastName}</h3>
              <form onSubmit={handleOnSubmit}>
                <label style={{ marginRight: "5px" }}>Pick a date and time</label>
                <DatePicker
                  popperPlacement="bottom"
                  // className={styles.datepicker}
                  showTimeSelect
                  dateFormat="Pp"
                  selected={date}
                  onChange={(date) => setDate(date)}
                />
                <div className="service-amount-container">
                  <div className="service-container">
                    <label>Service</label>
                    <textarea
                      style={{ resize: "none", height: "100px" }}
                      onChange={(e) => setService(e.target.value)}
                    >
                      {service}
                    </textarea>
                  </div>

                  <div className="amount-container">
                    <label>Amount</label>
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                    />
                  </div>
                  <label>Due Date</label>
                  <DatePicker
                    popperPlacement="bottom"
                    showTimeSelect
                    dateFormat="Pp"
                    selected={dueDate}
                    onChange={(date) => setDueDate(date)}
                  />
                </div>
                <button className="submit-btn" type="submit">
                  Add Invoice
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </MainPage>
  );
}
