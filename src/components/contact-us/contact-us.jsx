import React, { Component } from "react";
import "./contact-us.css";
import { store } from "react-notifications-component";
import "animate.css";
import "react-notifications-component/dist/theme.css";

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      phone: "",
      message: "",
      website: ""
    };
  }
  variables = () => {
    return {
      message_html: this.state.message,
      from_name: this.state.name,
      to_name: "SCHNELL INNOVATIONS",
      web_site: this.state.website,
      phone_number: this.state.phone
    };
  };

  templateId = "template_xRWq9OWI";
  userId = "user_U3kxinpl8Ovoe4i7dSnDn";

  handleSubmit = async event => {
    event.preventDefault();
    await this.handleMail(this.templateId, this.variables());

    this.setState({
        email: "",
        name: "",
        phone: "",
        message: "",
        website: ""
    });
   
  };

  handleMail = async (templateId, variables) => {
    await window.emailjs
      .send("gmail", templateId, variables, this.userId)
      .then(async res => {
        
        // email sent
        await store.addNotification({
            title: "",
            width: 250,
            message: "Email sent, we will get back to you soon",
            type: "success", // 'default', 'success', 'info', 'warning'
            container: "top-left", // where to position the notifications
            animationIn: ["animated", "fadeIn"], // animate.css classes that's applied
            animationOut: ["animated", "fadeOut"], // animate.css classes that's applied
            dismiss: {
              duration: 3000
            }
          });
      })
      .catch(async error => {
        // in the event of an error

        await store.addNotification({
            title: "",
            width: 250,
            message: error.message,
            type: "warning", // 'default', 'success', 'info', 'warning'
            container: "top-left", // where to position the notifications
            animationIn: ["animated", "fadeIn"], // animate.css classes that's applied
            animationOut: ["animated", "fadeOut"], // animate.css classes that's applied
            dismiss: {
              duration: 3000
            }
          });
      });
  };
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  render() {
    return (
      <div className="container">
        <form id="contact">
          <h3>LET'S CONNECT</h3>
          <h4>Looking for more details on how to use our network?</h4>
          <fieldset>
            <input
              placeholder="Your name"
              name="name"
              value={this.state.name}
              type="text"
              onChange={this.handleChange}
            />
          </fieldset>
          <fieldset>
            <input
              placeholder="Your Email Address"
              type="email"
              value={this.state.email}
              name="email"
              onChange={this.handleChange}
            />
          </fieldset>
          <fieldset>
            <input
              placeholder="Your Phone Number (optional)"
              type="tel"
              value={this.state.phone}
              name="phone"
              onChange={this.handleChange}
            />
          </fieldset>
          <fieldset>
            <input
              placeholder="Your Web Site (optional)"
              type="url"
              name="website"
              value={this.state.website}
              onChange={this.handleChange}
            />
          </fieldset>
          <fieldset>
            <textarea
              placeholder="Type your message here...."
              name="message"
              value={this.state.message}
              onChange={this.handleChange}
            ></textarea>
          </fieldset>
          <fieldset>
            <div className="contact-button-container">
              <button
                name="submit"
                type="submit"
                id="contact-submit"
                onClick={this.handleSubmit}
              >
                Submit
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default ContactUs;
