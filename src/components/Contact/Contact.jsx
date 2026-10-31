import { useRef, useState } from "react";
import { contactDetail } from "../../data/constants";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import SectionHeading from "../Custom/SectionHeading";
import FormField from "./FormField";

const EMPTY_INPUTS = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const INFO_TITLES = {
  "ri-map-pin-line": "Location",
  "ri-mail-line": "Email",
  "ri-phone-fill": "Phone",
};

function Contact() {
  const [inputs, setInputs] = useState(EMPTY_INPUTS);
  const [isSending, setIsSending] = useState(false);
  const form = useRef();

  const handleChange = (e) =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const sendMail = (e) => {
    e.preventDefault();
    if (Object.values(inputs).some((value) => value.trim() === "")) {
      toast.warning("Please fill all the inputs");
      return;
    }

    setIsSending(true);
    emailjs
      .sendForm("service_ntjgx6t", "template_2ergwl7", form.current, {
        publicKey: "bzj7XofiRWUJhFwDn",
      })
      .then(() => {
        toast.success("Message sent succesfully");
        setInputs(EMPTY_INPUTS);
      })
      .catch((error) => {
        toast.error("There is an error!");
        console.log(error);
      })
      .finally(() => setIsSending(false));
  };

  return (
    <section id="contact" className="relative">
      <div className="container-page flex flex-col items-center gap-14">
        <SectionHeading title="Have a project" highlight="in mind?" />

        <div
          data-aos="fade-up"
          className="w-full rounded-[2rem] bg-gradient-to-br from-gold/70 via-surface-border to-tangerine/60 p-px shadow-glow"
        >
          <div className="grid overflow-hidden rounded-[calc(2rem-1px)] bg-surface-card desktop:grid-cols-[0.9fr_1.1fr]">
            <div className="relative overflow-hidden border-b border-surface-border bg-surface-1/70 p-8 sm:p-10 desktop:border-b-0 desktop:border-r">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 animate-pulse-glow rounded-full bg-gold/25 blur-3xl"
              ></div>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-16 -right-16 h-44 w-44 rounded-full border-[18px] border-primary/10"
              ></div>

              <div className="relative">
                <h3 className="text-2xl font-semibold text-text-primary sm:text-3xl">
                  Let&apos;s get in touch
                </h3>
                <p className="mt-4 leading-relaxed text-text-secondary">
                  {contactDetail.description}
                </p>

                <ul className="mt-8 flex flex-col gap-5">
                  {contactDetail.infos.map((info, index) => (
                    <li key={index} className="group flex items-center gap-4">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-primary/15 bg-primaryOverlay text-xl text-primary transition-all duration-300 group-hover:-rotate-6 group-hover:bg-brand group-hover:text-onBrand">
                        <i aria-hidden="true" className={info.icon}></i>
                      </span>
                      <span className="flex min-w-0 flex-col">
                        <span className="text-xs font-medium uppercase tracking-wider text-text-muted">
                          {INFO_TITLES[info.icon] || "Info"}
                        </span>
                        {info.icon === "ri-mail-line" ? (
                          <a
                            href={`mailto:${info.label}`}
                            className="break-all font-medium text-text-primary no-underline transition-colors hover:text-primary"
                          >
                            {info.label}
                          </a>
                        ) : (
                          <span className="font-medium text-text-primary">
                            {info.label}
                          </span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-10">
                  <p className="text-sm text-text-muted">Connect with me</p>
                  <div className="mt-3 flex gap-3">
                    {contactDetail.socials.map((social, index) => (
                      <a
                        key={index}
                        target="_blank"
                        rel="noreferrer"
                        href={social.value}
                        aria-label={social.icon.replace(
                          /^ri-|-(fill|line)$/g,
                          "",
                        )}
                        className="icon-btn hover:border-transparent hover:bg-brand hover:text-onBrand"
                      >
                        <i aria-hidden="true" className={social.icon}></i>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <form
              ref={form}
              onSubmit={sendMail}
              autoComplete="off"
              className="flex flex-col gap-5 p-8 sm:p-10"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <FormField
                  label="Your Name"
                  name="name"
                  value={inputs.name}
                  onChange={handleChange}
                />
                <FormField
                  label="Email"
                  name="email"
                  type="email"
                  value={inputs.email}
                  onChange={handleChange}
                />
              </div>
              <FormField
                label="Subject"
                name="subject"
                value={inputs.subject}
                onChange={handleChange}
              />
              <FormField
                label="Message"
                name="message"
                value={inputs.message}
                onChange={handleChange}
                multiline
              />
              <button
                type="submit"
                disabled={isSending}
                className="btn btn-primary group mt-1 w-full sm:w-auto sm:self-start"
              >
                {isSending ? (
                  <>
                    <i
                      aria-hidden="true"
                      className="ri-loader-4-line animate-spin text-base"
                    ></i>
                    Sending...
                  </>
                ) : (
                  <>
                    Send message
                    <i
                      aria-hidden="true"
                      className="ri-send-plane-2-line text-base transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1"
                    ></i>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
