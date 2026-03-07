import React, { useRef, useState } from "react";
import { contactDetail } from "../../data/constants";
import emailjs from "@emailjs/browser";
import { TextField } from "@mui/material";
import { toast } from "react-toastify";

function Contact() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const form = useRef();
  const sendMail = (e) => {
    e.preventDefault();
    if (
      inputs.subject === "" &&
      inputs.name === "" &&
      inputs.message === "" &&
      inputs.email === ""
    ) {
      toast.warning("Please fill all the inputs");
      return inputs;
    }
    emailjs
      .sendForm("service_ntjgx6t", "template_2ergwl7", form.current, {
        publicKey: "bzj7XofiRWUJhFwDn",
      })
      .then((e) => {
        toast.success("Message sent succesfully");
        console.log(e);
      })
      .catch((e) => {
        toast.error("There is an error!");
        console.log(e);
      });

    setInputs({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section id="contact">
      <div className="contact__container">
        <div className="contact__top">Contact me</div>
        <div className="form">
          <div className="contact-info" data-aos="slide-right">
            <h3 className="title">Let's get in touch</h3>
            <p className="text">{contactDetail.description}</p>

            <div className="info">
              {contactDetail.infos.map((info, index) => (
                <div key={index} className="information">
                  <i className={`${info.icon} icon`}></i>
                  <p>{info.label}</p>
                </div>
              ))}
            </div>

            <div className="social-media">
              <p>Connect with us :</p>
              <div className="social-icons">
                {contactDetail.socials.map((social, index) => (
                  <a key={index} target="_blank" href={social.value}>
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-form">
            <span className="circle one"></span>
            <span className="circle two"></span>

            <form
              ref={form}
              onSubmit={sendMail}
              autoComplete="off"
              data-aos="slide-left"
            >
              <div className={`input-container`}>
                <TextField
                  id="outlined-basic"
                  label="Your Name"
                  value={inputs.name}
                  name="name"
                  type="text"
                  onChange={(e) =>
                    setInputs({ ...inputs, name: e.target.value })
                  }
                  variant="outlined"
                />
              </div>
              <div className={`input-container`}>
                <TextField
                  id="outlined-basic"
                  label="Email"
                  value={inputs.email}
                  type="email"
                  name="email"
                  onChange={(e) =>
                    setInputs({ ...inputs, email: e.target.value })
                  }
                  variant="outlined"
                />
              </div>
              <div className={`input-container`}>
                <TextField
                  id="outlined-basic"
                  label="Subject"
                  value={inputs.subject}
                  name="subject"
                  type="text"
                  onChange={(e) =>
                    setInputs({ ...inputs, subject: e.target.value })
                  }
                  variant="outlined"
                />
              </div>
              <div className={`input-container`}>
                <TextField
                  id="outlined-multiline-flexible"
                  label="Message"
                  value={inputs.message}
                  name="message"
                  onChange={(e) =>
                    setInputs({ ...inputs, message: e.target.value })
                  }
                  multiline
                  minRows={4}
                  maxRows={4}
                />
              </div>
              <input type="submit" value="Send" className="btn" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
