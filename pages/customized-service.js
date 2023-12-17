import React from "react";
import { toast } from "react-toastify";
import Router from "next/router";

import emailjs from "@emailjs/browser";
import { api } from './api/api'
import DatePicker from "react-datepicker";
import MainPage from "../components/Dashboard/mainpage";

import "react-datepicker/dist/react-datepicker.css";
import styles from "../styles/customized-service.module.css";

const loadCategories = async () => {
  const response = await api.get("/categories");
  return response.data.data;
};

export default class CustomizedService extends React.Component {
  constructor(props) {
    super(props);
    this.state = { services: [], selectedServices: [], date: "", customer: {} };
    this.toggleChecked = this.toggleChecked.bind(this);
    this.scheduleEstimate = this.scheduleEstimate.bind(this);
  }

  async scheduleEstimate() {
    try {
      const postData = {
        selectedServices: this.state.selectedServices,
        date: this.state.date,
        customer: this.state.customer,
      };
      const response = await api.post("schedules", postData);
      var templateParams = {
        first_name: this.state.customer.firstName,
        last_name: this.state.customer.lastName,
        email: this.state.customer.email,
        phone: this.state.customer.phone,
        services: this.state.selectedServices
          .map((service) => service.name)
          .join(","),
        message: this.state.customer.message,
        scheduledAppointment: this.state.date,
      };
      emailjs
        .send(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          templateParams,
          process.env.REACT_APP_USER_ID
        )
        .then(
          () => {
            toast.success("your estimate was scheduled successfully");
            Router.push("/scheduled-estimates");
          },
          (error) => {
            toast.error("Your message wasn't successfully isSubmitted");
          }
        );

      return response;
    } catch (error) {
      toast.error("appt not scheduled");
    }
  }

  toggleChecked(service) {
    const isSelected = this.state.selectedServices.find(
      (item) => item._id === service._id
    );
    let selectedServices;
    if (isSelected) {
      selectedServices = this.state.selectedServices.filter(
        (item) => item._id !== service._id
      );
    } else {
      selectedServices = [...this.state.selectedServices, service];
    }
    this.setState({ selectedServices });
  }

  async componentDidMount() {
    const services = await loadCategories();
    const customer = JSON.parse(localStorage.getItem("account"));
    this.setState({ services, customer });
  }

  render() {
    return (
      <MainPage>
        <h1 className="py-3 text-center">Schedule an estimate</h1>
        <div className="card my-2">
          <div className="card-body">
            {this.state.services.map((service, index) => {
              return (
                <div key={index} className={`${styles.input_container}`}>
                  <input
                    className="checkbox-input"
                    checked={service.status}
                    type="checkbox"
                    value={service._id}
                    onChange={() => this.toggleChecked(service)}
                  />
                  <span className="services-name">{service.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {this.state.selectedServices.length > 0 && (
          <>
            <div className="card my-2">
              <div className="card-body">
                <h5 className="card-title">Pick a date and time</h5>

                <DatePicker
                  popperPlacement="bottom"
                  style={{ position: "relative" }}
                  showTimeSelect
                  dateFormat="Pp"
                  selected={this.state.date}
                  onChange={(date) => this.setState({ date })}
                />
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Services</h5>
                <p>
                  Name: {this.state.customer.firstName}{" "}
                  {this.state.customer.lastName}
                </p>
                <p>Address: {this.state.customer.streetAddress} </p>
                <p>City: {this.state.customer.city}</p>
              </div>
            </div>

            <button className="submit-btn" onClick={this.scheduleEstimate}>
              Schedule Estimate
            </button>
          </>
        )}
      </MainPage>
    );
  }
}
