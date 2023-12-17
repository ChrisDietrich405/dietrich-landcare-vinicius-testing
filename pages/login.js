import React from "react";
import Link from "next/link";
import Head from "next/head";
import Router from "next/router";
import { api } from "./api/api";
import { toast } from "react-toastify";

import styles from "../styles/login.module.css";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "", profile_id: "" };
    this.onSubmit = this.onSubmit.bind(this);
  }

  async onSubmit(e) {
    e.preventDefault();
    try {
      const response = await api.post("/auth", this.state);
      localStorage.setItem("account", JSON.stringify(response.data.account));
      localStorage.setItem("token", `Bearer ${response.data.token}`);
      if (response.data.account.profile_id === 1) {
        Router.push("/invoice-dashboard");
      }
      if (response.data.account.profile_id === 2) {
        Router.push("/useraccount");
      }
    } catch (error) {
      toast.error("Incorrect email or password");
    }
  }

  render() {
    return (
      <>
        {" "}
        <Head>
          <title>Log In | Dietrich Land Care</title>
          <meta
            name="description"
            content="Securely log in to your account and access personalized services. Enjoy a seamless experience with our login process. Sign in now!"
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://dietrichlandcare.com" />
          <meta property="og:title" content="Dietrich Land Care" />
          <meta
            property="og:description"
            content="Securely log in to your account and access personalized services. Enjoy a seamless experience with our login process. Sign in now!"
          />
          <meta
            property="og:image"
            content="https://dietrichlandcare.com/images/logo.jpg"
          />

          <link rel="icon" href="/favicon.ico" />
          <link
            rel="icon"
            type="image/png"
            href="/favicon-32x32.png"
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/png"
            href="/favicon-16x16.png"
            sizes="16x16"
          />
        </Head>
        <form onSubmit={this.onSubmit} className={styles.form}>
          <h2>Log in</h2>
          <label htmlFor="email" className={styles.label}>
            email
            <input
              type="text"
              name="email"
              id="email"
              className={styles.input}
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </label>
          <label htmlFor="password" className={styles.label}>
            password
            <input
              type="password"
              name="password"
              id="password"
              className={styles.input}
              value={this.state.password}
              onChange={(e) => this.setState({ password: e.target.value })}
            />
          </label>

          <button type="submit" className={styles.button}>
            Submit
          </button>

          <p style={{ marginBottom: "10px" }}>New to Dietrich Land Care?</p>
          <Link href="/create-account">Create an account</Link>
        </form>
      </>
    );
  }
}
