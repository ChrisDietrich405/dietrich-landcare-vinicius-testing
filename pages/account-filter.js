import React from "react";
import Link from "next/link";

import { api } from './api/api'

import { authChecker } from "../lib/auth-checker";
import MainPage from "../components/Dashboard/mainpage";

export default class AccountFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { accounts: [], filter: null };
    this.handleFilterUsers = this.handleFilterUsers.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleUpdateFilter = this.handleUpdateFilter.bind(this);
  }

  async handleFilterUsers(e) {
    e.preventDefault();
    const response = await api.get(`accounts?filter=${this.state.filter}`);
    if (response.status === 200) {
      this.setState({ accounts: response.data.users });
    }
  }

  handleUserChange(e) {
    this.setState({ user: e.target.value });
  }

  handleUpdateFilter(e) {
    this.setState({ filter: e.target.value });
  }

  componentDidMount() {
    this.setState({ user: authChecker() });
  }

  render() {
    return (
      <MainPage>
        <div className="card my-2">
          <div className="card-body">
            <h5 className="card-title">Add Invoice Page</h5>

            <form
              onSubmit={this.handleFilterUsers}
              className="account-filter-form"
            >
              <div>
                <div>
                  <label htmlFor="">Customer</label>
                  <input
                    style={{ width: "200px" }}
                    value={this.state.filter}
                    onChange={this.handleUpdateFilter}
                    type="text"
                    className="input-group"
                  />
                </div>
              </div>

              <button className="account-filter-submit-btn" type="submit">
                Search Customer
              </button>

              <Link href="/add-customer" className="account-filter-submit-btn">
                <a className="account-filter-submit-btn">Add Customer</a>
              </Link>
            </form>
            {!this.state.accounts || this.state.accounts.length === 0
              ? "No customers found"
              : this.state.accounts.map((account) => (
                <>
                  <div key={account._id} className="account-full-name">
                    <span>{account.firstName}</span>
                    <span>{account.lastName}</span>
                  </div>

                  <Link href={`/add-invoice/${account._id}`}>
                    <a className="submit-btn">Add Invoice</a>
                  </Link>
                </>
              ))}
          </div>
        </div>
      </MainPage>
    );
  }
}
