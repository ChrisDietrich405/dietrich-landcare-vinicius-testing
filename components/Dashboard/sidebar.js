import React from "react";
import Link from "next/link";

import { authChecker } from "../../lib/auth-checker";

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: {} };
  }

  componentDidMount() {
    this.setState({ user: authChecker() });
  }

  render() {
    return (
      <div className="list-group link-hover sidebar-responsivity">
        <Link href="/useraccount">
          <a className="list-group-item link-hover">My Profile</a>
        </Link>
        <Link href="/customized-service">
          <a className="list-group-item">Schedule an estimate</a>
        </Link>
        <Link href="/scheduled-estimates">
          <a className="list-group-item">Scheduled estimates</a>
        </Link>
        <Link href="/invoices">
          <a className="list-group-item">Pay Invoice</a>
        </Link>
        {Object(this.state.user).hasOwnProperty('profile_id') && this.state.user.profile_id === 1 ? (
          <Link href="/account-filter">
            <a className="list-group-item">Add Invoice</a>
          </Link>
        ) : (
          ""
        )}
      </div>
    );
  }
}
