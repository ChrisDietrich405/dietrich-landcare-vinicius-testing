import React from "react";
import DatePicker from "react-datepicker";
import { format } from "date-fns";
import axios from "axios";

import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";

import classnames from "classnames";
import * as Validator from "validatorjs";

import ServicesComponent from "../components/ServicesComponent";

import styles from "../styles/schedule.module.css";
import "react-datepicker/dist/react-datepicker.css";

export default class Schedule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      isServicePicked: false,
      date: null,
      error: {}, 
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
      isSubmitting: false,
    };

    this.setCategories = this.setCategories.bind(this);
    this.setServicePicked = this.setServicePicked.bind(this);
    this.submitScheduledEvent = this.submitScheduledEvent.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  setCategories(categories) {
    this.setState({ categories });
  }

  setServicePicked(isServicePicked) {
    this.setState({ isServicePicked });
  }

  async submitScheduledEvent() {
    if (this.state.date) {
      await axios.post("/api/schedules", {
        date: this.state.date,
        categories: this.state.categories,
      });
    } else {
      alert("select a date");
    }
  }

  render() {
    return (
      <>
        <div className={styles.contact_header}>
          <h1 className={styles.contact_title}>Let's Get in Touch!</h1>
          <p>
            Call or Text Us: Monday-Saturday: 7am-7:30 pm • Saturday: 9am-3:30pm
          </p>
        </div>
        <ul className={styles.contact_info}>
          <li className={styles.contact_information}>
            <span className={styles.contact_info_icons}>
              <AiFillPhone />
            </span>
            <p>
              <a
                style={{ textDecoration: "none", color: "black" }}
                href="tel:+4436083258"
                target="_blank"
                rel="noopener noreferrer"
              >
                (240) 814-4208
              </a>
            </p>
          </li>
          <li className={styles.contact_information}>
            <span className={styles.contact_info_icons}>
              <MdEmail />
            </span>

            <p>
              <a
                style={{ textDecoration: "none", color: "black" }}
                href="mailto:office@dietrichlandcare.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                office@dietrichlandcare.com
              </a>
            </p>
          </li>
          <li className={styles.contact_information}>
            <span className={styles.contact_info_icons}>
              <ImLocation2 />
            </span>
            <p>Towson, MD 21286</p>
          </li>
        </ul>
        <div className={styles.contact_social_media}>
          <div className={styles.contact_facebook}>
            <a
              href="https://www.facebook.com/Dietrich-Land-Care-LLC-571934750168436"
              rel="noreferrer"
              target="_blank"
            >
              <BsFacebook style={{ color: "var(--primary-color)" }} size={40} />
            </a>
          </div>
          <div className={styles.contact_instagram}>
            <a
              href="https://www.instagram.com/dietrich_landcarellc/"
              rel="noreferrer"
              target="_blank"
            >
              <AiFillInstagram
                style={{ color: "var(--primary-color)" }}
                size={45}
              />
            </a>
          </div>
        </div>
        <h3 className={styles.title}>Schedule a Free Estimate Today!</h3>

        <ServicesComponent
          setScheduledCategories={this.setCategories}
          setServicePicked={this.setServicePicked}
          isServicePicked={this.state.isServicePicked}
        />
        {this.state.isServicePicked && (
          <div className={styles.schedule_container}>
            <label className="">Pick a date and time</label>
            <DatePicker
              popperPlacement="bottom"
              className={styles.datepicker}
              showTimeSelect
              dateFormat="Pp"
              selected={this.state.date}
              onChange={(date) => this.setState({ date })}
            />
            <div className={styles.contact_form_inputs}>
              <div className={styles.contact_form_section}>
                <div
                  className={classnames("contact-fields", {
                    filled: this.state.firstName !== "",
                  })}
                >
                  <label className={styles.label_name} htmlFor="firstName">
                    First Name
                  </label>
                  <div className={styles.input_container}>
                    <input
                      className={styles.input_name}
                      id="firstName"
                      name="firstName"
                      value={this.state.firstName}
                      onChange={(event) => {
                        this.setState({ firstName: event.target.value });
                      }}
                    />{" "}
                    {"firstName" in this.state.error && (
                      <p className={styles.error_message}>
                        {this.state.error.firstName.join(",")}
                      </p>
                    )}
                  </div>
                </div>

                <div
                  className={classnames("contact-fields", {
                    filled: this.state.lastName !== "",
                  })}
                >
                  <label className={styles.label_name} htmlFor="lastName">
                    Last Name
                  </label>
                  <div className={styles.input_container}>
                    <input
                      className={styles.input_name}
                      id="lastName"
                      value={this.state.lastName}
                      onChange={(event) => {
                        this.setState({ lastName: event.target.value });
                      }}
                    />{" "}
                    {"lastName" in this.state.error && (
                      <p className={styles.error_message}>
                        {this.state.error.lastName.join(",")}
                      </p>
                    )}
                  </div>
                </div>

                <div
                  className={classnames("contact-fields", {
                    filled: this.state.email !== "",
                  })}
                >
                  <label className={styles.label_name} htmlFor="Email">
                    Email
                  </label>
                  <div className={styles.input_container}>
                    <input
                      className={styles.input_name}
                      id="Email"
                      value={this.state.email}
                      onChange={(event) => {
                        this.setState({ email: event.target.value });
                      }}
                    />{" "}
                    {"email" in this.state.error && (
                      <p className={styles.error_message}>
                        {this.state.error.email.join(",")}
                      </p>
                    )}
                  </div>
                </div>

                <div
                  className={classnames("contact-fields", {
                    filled: this.state.phone !== "",
                  })}
                >
                  {" "}
                  <label className={styles.label_name} htmlFor="Phone">
                    Phone #
                  </label>
                  <div className={styles.input_container}>
                    <input
                      className={styles.input_name}
                      id="Phone"
                      value={this.state.phone}
                      onChange={(event) => {
                        this.setState({ phone: event.target.value });
                      }}
                    />
                    {"phone" in this.state.error && (
                      <p className={styles.error_message}>
                        {this.state.error.phone.join(",")}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className={styles.contact_form_section}>
                <div
                  className={classnames("message-text", "contact-fields", {
                    filled: this.state.message !== "",
                  })}
                >
                  <label className={styles.label_name} htmlFor="Message">
                    Message
                  </label>
                  <div className={styles.input_container}>
                    <textarea
                      placeholder="If comfortable doing so please include your address."
                      className={styles.textarea_name}
                      id="textarea-responsive"
                      value={this.state.message}
                      onChange={(event) => {
                        this.setState({ message: event.target.value });
                      }}
                    ></textarea>
                    {"message" in this.state.error && (
                      <p className={styles.error_message}>
                        {this.state.error.message.join(",")}
                      </p>
                    )}
                  </div>
                  onSubmit
                </div>
              </div>
            </div>
            <button
              className={styles.schedule_submit_btn}
              disabled={this.state.isSubmitting}
              onClick={this.onSubmit}
            >
              Submit
            </button>
          </div>
        )}
      </>
    );
  }
  async onSubmit(event) {
    event.preventDefault();

    this.setState({ error: {} });

    const validator = new Validator(
      this.state,
      {
        firstName: "required",
        lastName: "required",
        email: "required|email",
        phone: "required",
        categories: "required",
        message: "required",
        date: "required",
      },
      {
        "required.firstName": "The name field is required",
        "required.lastName": "The name field is required",
      }
    );
    const validate = validator.passes();

    if (validate) {
      const categoriesJoined = this.state.categories
        .map((category) => {
          return category.name;
        })
        .join(", ");

      var templateParams = {
        first_name: this.state.firstName,
        last_name: this.state.lastName,
        email: this.state.email,
        phone: this.state.phone,
        services: categoriesJoined,
        message: this.state.message,
        scheduledAppointment: format(
          new Date(this.state.date),
          "MM/dd/yyyy hh:mm aaaaa'm'"
        ),
      };

      this.setState({ isSubmitting: true });

      const postData = {
        date: this.state.date,
        categories: this.state.categories,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        phone: this.state.phone,
        message: this.state.message,
      };

      const result = await axios.post("/api/schedules", postData);
      return result;

      
    } else {
      this.setState({ error: validator.errors.errors });
    }
  }
}
