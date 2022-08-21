import React from "react";
import { Form, Formik } from "formik";
import TextArea from "./Field/TextArea";
import Input from "./Field/Input";
import sendPostRequest from "../request";
import * as Yup from "yup";
import nameIcon from "../public/name.svg";
import phoneIcon from "../public/phone.svg";
import emailIcon from "../public/email.svg";

const ContactForm = () => {
  const [status, setStatus] = React.useState("");
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        phone: "",
        talk: "",
      }}
      validationSchema={Yup.object({
        name: Yup.string().required("Required"),
        phone: Yup.string().required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
      })}
      onSubmit={(e) => {
        sendPostRequest("/api/email", { ...e }, setStatus);
      }}
    >
      <Form>
        <div className="form-field">
          <div className="input-entry">
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              img={nameIcon}
            />
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Your email"
              img={emailIcon}
            />
            <Input
              id="phone"
              name="phone"
              type="text"
              placeholder="Your contact number"
              img={phoneIcon}
            />
          </div>
          <hr className="hr" />
          <div className="ta-wrapper">
            <TextArea
              placeholder="Tell us more about your project and what service you are looking for? More information is always better than less."
              rows="6"
              id="talk"
              name="talk"
            />
          </div>
        </div>
        <button type="submit">Send</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
