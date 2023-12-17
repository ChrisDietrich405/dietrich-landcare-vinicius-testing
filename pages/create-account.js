import React from "react";
import Head from "next/head";
import Router from "next/router";
import { toast } from "react-toastify";
import * as Validator from "validatorjs";

import { api } from "./api/api";

import styles from "../styles/create-account.module.css";

export default class CreateAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: {},
      firstName: "",
      lastName: "",
      email: "",
      streetAddress: "",
      city: "",
      password: "",
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async onSubmit(e) {
    e.preventDefault();
    try {
      const validator = new Validator(
        this.state,
        {
          firstName: "required",
          lastName: "required",
          streetAddress: "required",
          city: "required",
          email: "required|email",
        },
        {
          "required.firstName": "The name field is required",
          "required.lastName": "The name field is required",
        }
      );
      const validate = validator.passes();

      if (validate) {
        
        const response = await api.post("/create-account", this.state);
        toast.success("account successfully created");
        if (response.status === 200) {
          Router.push("/login");
        }
      } else {
        this.setState({ error: validator.errors.errors });
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <>
        <Head>
          <title>Create Account | Dietrich Land Care</title>
          <meta
            name="description"
            content="Join us now and create an account to access exclusive benefits! Sign up for free and unlock a world of personalized services and exciting offers. Start your journey today!"
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://dietrichlandcare.com" />
          <meta property="og:title" content="Dietrich Land Care" />
          <meta
            property="og:description"
            content="Join us now and create an account to access exclusive benefits! Sign up for free and unlock a world of personalized services and exciting offers. Start your journey today!"
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
          <h2>Create account</h2>
          <label htmlFor="firstName" className={styles.label}>
            First Name
            <input
              type="text"
              name="firstName"
              id="firstName"
              className={styles.input}
              value={this.state.firstName}
              onChange={this.handleChange}
            />
            {"firstName" in this.state.error && (
              <p className={styles.error_message}>
                {this.state.error.firstName.join(",")}
              </p>
            )}
          </label>
          <label htmlFor="lastName" className={styles.label}>
            Last Name
            <input
              type="text"
              name="lastName"
              id="lastName"
              className={styles.input}
              value={this.state.lastName}
              onChange={this.handleChange}
            />
            {"lastName" in this.state.error && (
              <p className={styles.error_message}>
                {this.state.error.lastName.join(",")}
              </p>
            )}
          </label>
          <label htmlFor="streetAddress" className={styles.label}>
            Street Address
            <input
              type="text"
              name="streetAddress"
              id="streetAddress"
              className={styles.input}
              value={this.state.streetAddress}
              onChange={this.handleChange}
            />
            {"streetAddress" in this.state.error && (
              <p className={styles.error_message}>
                {this.state.error.streetAddress.join(",")}
              </p>
            )}
          </label>
          <label htmlFor="city" className={styles.label}>
            City
            <input
              type="text"
              name="city"
              id="city"
              className={styles.input}
              value={this.state.city}
              onChange={this.handleChange}
            />
            {"city" in this.state.error && (
              <p className={styles.error_message}>
                {this.state.error.city.join(",")}
              </p>
            )}
          </label>
          <label htmlFor="email" className={styles.label}>
            Email
            <input
              type="text"
              name="email"
              id="email"
              className={styles.input}
              value={this.state.email}
              onChange={this.handleChange}
              // onBlur={handleBlur}
            />
            {"email" in this.state.error && (
              <p className={styles.error_message}>
                {this.state.error.email.join(",")}
              </p>
            )}
          </label>
          <label htmlFor="password" className={styles.label}>
            Password
            <input
              type="password"
              name="password"
              id="password"
              className={styles.input}
              value={this.state.password}
              onChange={this.handleChange}
              // onBlur={handleBlur}
            />
          </label>

          <button type="submit" className={styles.button}>
            Submit
          </button>
        </form>
      </>
    );
  }
}
