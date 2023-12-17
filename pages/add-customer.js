import React from "react";
import Router from "next/router";

import { api } from "./api/api";
import { toast } from "react-toastify";

import { authChecker } from "../lib/auth-checker";
import MainPage from "../components/Dashboard/mainpage";
export default class AddCustomer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: {} };
    this.handleChange = this.handleChange.bind(this);
    this.addCustomer = this.addCustomer.bind(this);
  }

  handleChange(e) {
    this.setState({
      user: { ...this.state.user, [e.target.name]: e.target.value },
    });
  }

  async addCustomer(e) {
    e.preventDefault();
    try {
      const body = { user: this.state.user };
      const response = await api.post("/add-customer", body);

      console.log(response);

      if (response.status === 201) {
        toast.success("account successfully added");
        this.setState({ user: {} });
      }
      Router.push(`/add-invoice/${response.data.profile_id}`);
      return response;
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

  componentDidMount() {
    this.setState({ user: {} });
  }

  render() {
    return (
      <MainPage>
        <div className="card my-2">
          <div className="card-body">
            <h5 className="card-title">Add Customer</h5>

            <form onSubmit={this.addCustomer} className="form">
              <div className="row ">
                <div className="col-md-4 my-3">
                  <label htmlFor="">First Name</label>
                  <input
                    name="firstName"
                    value={this.state.user.firstName}
                    onChange={this.handleChange}
                    type="text"
                    className="input-group"
                  />
                </div>
                <div className="col-md-4 my-3">
                  <label htmlFor="">Last Name</label>
                  <input
                    name="lastName"
                    value={this.state.user.lastName}
                    onChange={this.handleChange}
                    type="text"
                    className="input-group"
                  />
                </div>
                <div className="col-md-4 my-3">
                  <label htmlFor="">Address</label>
                  <input
                    name="streetAddress"
                    value={this.state.user.streetAddress}
                    onChange={this.handleChange}
                    type="text"
                    className="input-group"
                  />
                </div>
                <div className="col-md-4">
                  <label htmlFor="">City</label>
                  <input
                    name="city"
                    value={this.state.user.city}
                    onChange={this.handleChange}
                    type="text"
                    className="input-group"
                  />
                </div>
                <div className="col-md-4">
                  <label htmlFor="">Create Password</label>
                  <input
                    name="password"
                    value={this.state.user.password}
                    onChange={this.handleChange}
                    type="password"
                    className="input-group"
                  />
                </div>
                <div className="col-md-4">
                  <label htmlFor="">Email</label>
                  <input
                    name="email"
                    value={this.state.user.email}
                    onChange={this.handleChange}
                    type="text"
                    className="input-group"
                  />
                </div>
              </div>
              <button className="submit-btn" type="submit">
                Add Customer
              </button>
            </form>
          </div>
        </div>
      </MainPage>
    );
  }
}
