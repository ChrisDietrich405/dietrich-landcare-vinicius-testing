import React from "react";

import { api } from './api/api'
import { toast } from "react-toastify";

import { authChecker } from "../lib/auth-checker";
import MainPage from "../components/Dashboard/mainpage";
export default class UserAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: {} };
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdateChanges = this.handleUpdateChanges.bind(this);
  }

  handleChange(e) {
    this.setState({
      user: { ...this.state.user, [e.target.name]: e.target.value },
    });
  }

  async handleUpdateChanges(e) {
    e.preventDefault();
    const response = await api.put("/update-user", { user: this.state.user });
    if (response.status === 200) {
      toast.success("account successfully updated");
      localStorage.setItem("account", JSON.stringify(this.state.user));
      localStorage.setItem("token", `Bearer ${response.data.token}`);
    }

    return response;
  }

  componentDidMount() {
    this.setState({ user: authChecker() });
  }

  render() {
    return (
      <MainPage>
        <h1 className="py-3 text-center">My Profile/Update Profile</h1>
        <div className="card my-2">
          <div className="card-body">
            <form onSubmit={this.handleUpdateChanges} className="form">
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
                  <label htmlFor="">Email</label>
                  <input
                    disabled
                    name="email"
                    value={this.state.user.email}
                    onChange={this.handleChange}
                    type="text"
                    className="input-group"
                  />
                </div>
              </div>
              <button className="submit-btn" type="submit">
                Submit Changes
              </button>
            </form>
          </div>
        </div>
      </MainPage>
    );
  }
}
