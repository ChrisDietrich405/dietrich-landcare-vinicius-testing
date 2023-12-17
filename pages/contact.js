import React from "react";
import Head from "next/head";
import { toast } from "react-toastify";
import Router from "next/router";

import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";

import emailjs from "@emailjs/browser";
import { api } from "./api/api";
import DatePicker from "react-datepicker";
import classnames from "classnames";
import * as Validator from "validatorjs";

import ServicesComponent from "../components/ServicesComponent";
import { DateFormatter } from "../shared/utils";

import "react-datepicker/dist/react-datepicker.css";

import styles from "../styles/schedule.module.css";

const loadCategories = async () => {
  const response = await api.get("/categories");
  return response.data.data;
};

export default class CustomizedService extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [],
      selectedServices: [],
      error: {},

      customer: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
        date: "",
      },
    };
    this.toggleChecked = this.toggleChecked.bind(this);
    this.scheduleEstimate = this.scheduleEstimate.bind(this);
    this.setServicePicked = this.setServicePicked.bind(this);
    this.setSelectedServices = this.setSelectedServices.bind(this);
  }

  setServicePicked(isServicePicked) {
    this.setState({ isServicePicked });
  }

  setSelectedServices(selectedServices) {
    this.setState({ selectedServices });
  }

  async scheduleEstimate() {
    try {
      const validator = new Validator(
        this.state.customer,
        {
          firstName: "required",
          lastName: "required",
          email: "required|email",
          phone: "required",
          message: "required",
          date: "required",
        },
        {
          "required.firstName": "The name field is required",
          "required.lastName": "The name field is required",
          "required.email": "The email field is required",
          "required.phone": "The phone field is required",
          "required.message": "The message field is required",
          "required.date": "The date field is required",
        }
      );
      const validate = validator.passes();

      if (validate) {
        const postData = {
          selectedServices: this.state.selectedServices,
          date: this.state.customer.date,
          customer: this.state.customer,
        };
        await api.post("schedules", postData);
        var templateParams = {
          first_name: this.state.customer.firstName,
          last_name: this.state.customer.lastName,
          email: this.state.customer.email,
          phone: this.state.customer.phone,
          message: this.state.customer.message,
          services: this.state.selectedServices.map((s) => s.name).join(","),
          scheduledAppointment: DateFormatter.format(
            new Date(this.state.customer.date)
          ),
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
              Router.push("/");
            },
            (error) => {
              toast.error("Your message wasn't successfully isSubmitted");
            }
          );
      } else {
        this.setState({ error: validator.errors.errors });
      }
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
      <>
        <Head>
          <title>Contact Us | Dietrich Land Care</title>
          <meta
            name="description"
            content="Get in touch with us - Contact our team for inquiries, support, or collaborations. Reach out via email or phone to connect with our experts and discuss your needs."
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://dietrichlandcare.com" />
          <meta property="og:title" content="Dietrich Land Care" />
          <meta
            property="og:description"
            content="Get in touch with us - Contact our team for inquiries, support, or collaborations. Reach out via email or phone to connect with our experts and discuss your needs."
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
        <main className={styles.contact_viewport}>
          <div className={styles.contact_header}>
            <h1 className={styles.contact_title}>Let's Get in Touch!</h1>
            <p>
              Call or Text Us: Monday-Friday: 7am-7pm Saturday: 9am-3pm Sunday:
              closed
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
                  href="tel:+12408144208"
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
                <BsFacebook
                  style={{ color: "var(--primary-color)" }}
                  size={40}
                />
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
          <h3
            style={{ textAlign: "center", margin: "30px" }}
            className={styles.title}
          >
            Schedule a Free Estimate Today!
          </h3>
          <ServicesComponent
            setScheduledCategories={this.setSelectedServices}
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
                selected={this.state?.customer?.date}
                onChange={(date) =>
                  this.setState({
                    customer: {
                      ...this.state?.customer,
                      date,
                    },
                  })
                }
              />
              {"date" in this?.state.error && (
                <p>{this.state?.error?.date?.join(",")}</p>
              )}
              <div className={styles.contact_form_inputs}>
                <div className={styles.contact_form_section}>
                  <div
                    className={classnames("contact-fields", {
                      filled: this.state?.customer?.firstName !== "",
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
                        value={this.state?.customer?.firstName}
                        onChange={(event) => {
                          this.setState({
                            customer: {
                              ...this.state?.customer,
                              firstName: event?.target?.value,
                            },
                          });
                        }}
                      />{" "}
                      {"firstName" in this.state?.error && (
                        <p className={styles.error_message}>
                          {this.state?.error?.firstName?.join(",")}
                        </p>
                      )}
                    </div>
                  </div>

                  <div
                    className={classnames("contact-fields", {
                      filled: this.state?.customer?.lastName !== "",
                    })}
                  >
                    <label className={styles.label_name} htmlFor="lastName">
                      Last Name
                    </label>
                    <div className={styles.input_container}>
                      <input
                        className={styles.input_name}
                        id="lastName"
                        value={this.state?.customer?.lastName}
                        onChange={(event) => {
                          this.setState({
                            customer: {
                              ...this.state?.customer,
                              lastName: event?.target?.value,
                            },
                          });
                        }}
                      />{" "}
                      {"lastName" in this.state?.error && (
                        <p className={styles.error_message}>
                          {this.state?.error?.lastName?.join(",")}
                        </p>
                      )}
                    </div>
                  </div>

                  <div
                    className={classnames("contact-fields", {
                      filled: this.state?.customer?.email !== "",
                    })}
                  >
                    <label className={styles.label_name} htmlFor="Email">
                      Email
                    </label>
                    <div className={styles.input_container}>
                      <input
                        className={styles.input_name}
                        id="Email"
                        value={this.state?.customer?.email}
                        onChange={(event) => {
                          this.setState({
                            customer: {
                              ...this.state?.customer,
                              email: event?.target?.value,
                            },
                          });
                        }}
                      />{" "}
                      {"email" in this.state?.error && (
                        <p className={styles.error_message}>
                          {this.state?.error?.email?.join(",")}
                        </p>
                      )}
                    </div>
                  </div>

                  <div
                    className={classnames("contact-fields", {
                      filled: this.state?.customer?.phone !== "",
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
                        value={this.state.customer?.phone}
                        onChange={(event) => {
                          this.setState({
                            customer: {
                              ...this.state?.customer,
                              phone: event?.target?.value,
                            },
                          });
                        }}
                      />

                      {"phone" in this.state?.error && (
                        <p className={styles.error_message}>
                          {this.state?.error?.phone?.join(",")}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div className={styles.contact_form_section}>
                  <div
                    className={classnames("message-text", "contact-fields", {
                      filled: this.state?.customer?.message !== "",
                    })}
                  >
                    <label className={styles.label_name} htmlFor="Message">
                      Message
                    </label>
                    <div className={styles.input_container}>
                      <textarea
                        className={styles.textarea_name}
                        id="message"
                        name="message"
                        placeholder="If comfortable doing so please include your address."
                        value={this.state?.customer?.message}
                        onChange={(event) => {
                          this.setState({
                            customer: {
                              ...this.state?.customer,
                              message: event?.target?.value,
                            },
                          });
                        }}
                      ></textarea>
                      {"message" in this.state?.error && (
                        <p className={styles.error_message}>
                          {this.state?.error?.message?.join(",")}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <button
                className={styles.schedule_submit_btn}
                disabled={this.state.isSubmitting}
                onClick={this.scheduleEstimate}
              >
                Submit
              </button>
            </div>
          )}
          <div className="card my-2"></div>

          {this.state.selectedServices.length > 0 && <></>}
        </main>
      </>
    );
  }
}
