import React from "react";
import { format } from "date-fns";
import { toast } from "react-toastify";
import MainPage from "../components/Dashboard/mainpage";
import { api } from './api/api'

export default class ScheduledEstimate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { scheduledEstimates: [] };
    this.loadSchedule = this.loadSchedule.bind(this);
  }

  async loadSchedule() {
    const { _id } = JSON.parse(localStorage.getItem("account"));
    try {
      const response = await api.get(`schedule/${_id}`);
      this.setState({ scheduledEstimates: response.data });
    } catch (error) {
      toast.error("Scheduled services not loaded");
    }
  }

  componentDidMount() {
    this.loadSchedule();
  }

  render() {
    return (
      <MainPage>
        <h1 className="py-3 text-center">Scheduled Estimates</h1>
        <table className="table table-stripped">
          <thead>
            <tr className="text-center">
              <th>Name</th>
              <th>Address</th>
              <th>Service</th>
              <th>Date/Time</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {this.state.scheduledEstimates.map((item) => {
              return (
                <>
                  <tr>
                    <td>
                      {item.customer.firstName} {item.customer.lastName}
                    </td>
                    <td>{item.customer.streetAddress}</td>
                    <td>
                      <ul className="list-unstyled">
                        {item.selectedServices.map((service) => (
                          <>
                            <li>{service.name}</li>
                          </>
                        ))}
                      </ul>
                    </td>
                    <td>
                      {item.date &&
                        format(new Date(item.date), "MM/dd/yyyy hh:mm a")}
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </MainPage>
    );
  }
}
