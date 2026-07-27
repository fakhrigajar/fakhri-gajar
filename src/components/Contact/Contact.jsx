import { useRef, useState } from "react";
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
    <section id="contact" className="flex justify-center items-center">
      <div className="w-4/5 flex flex-col gap-[50px]">
        <h1 className="text-center text-[40px] font-semibold text-white">
          Contact me
        </h1>
        <div className="flex w-full flex-col-reverse overflow-hidden rounded-[10px] bg-surface-2 shadow-[0_0_20px_1px_rgba(0,0,0,0.1)] desktop:grid desktop:grid-cols-[500px_1fr]">
          <div
            className="relative p-[2.3rem_2.2rem] before:absolute before:-bottom-[77px] before:right-[50px] before:h-[100px] before:w-[110px] before:rounded-full before:border-[22px] before:border-primary before:opacity-30 before:content-['']"
            data-aos="slide-right"
          >
            <h3 className="text-2xl text-white">Let's get in touch</h3>
            <p className="my-6 w-full leading-normal text-text-muted desktop:w-[400px]">
              {contactDetail.description}
            </p>

            <div>
              {contactDetail.infos.map((info, index) => (
                <div
                  key={index}
                  className="my-[0.7rem] flex items-center gap-2.5 text-[0.95rem] text-text-secondary"
                >
                  <i className={`${info.icon} text-[1.3rem]`}></i>
                  <p>{info.label}</p>
                </div>
              ))}
            </div>

            <div className="pt-8">
              <p className="text-text-secondary">Connect with us :</p>
              <div className="mt-2 flex">
                {contactDetail.socials.map((social, index) => (
                  <a
                    key={index}
                    target="_blank"
                    rel="noreferrer"
                    href={social.value}
                    className="mr-2 flex h-[35px] w-[35px] items-center justify-center rounded-[5px] bg-gradient-to-tr from-primary to-primaryOverlay text-white no-underline duration-300 hover:scale-105"
                  >
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="relative bg-primary before:absolute before:-left-[13px] before:top-[50px] before:hidden before:h-[26px] before:w-[26px] before:rotate-45 before:bg-white before:content-[''] desktop:before:block">
            <span className="absolute right-[-40px] top-[130px] h-[130px] w-[130px] rounded-full bg-[linear-gradient(135deg,transparent_20%,#231e36)]"></span>
            <span className="absolute right-[30px] top-[10px] h-[80px] w-[80px] rounded-full bg-[linear-gradient(135deg,transparent_20%,#231e36)]"></span>

            <form
              ref={form}
              onSubmit={sendMail}
              autoComplete="off"
              data-aos="slide-left"
              className="font-poppins relative overflow-hidden p-[2.3rem_2.2rem] [&_.MuiFormControl-root]:w-full [&_.MuiFormLabel-root]:text-text-secondary [&_.MuiInputBase-input]:text-[0.95rem] [&_.MuiInputLabel-root.Mui-focused]:text-white [&_.MuiInputBase-input]:font-medium [&_.MuiInputBase-input]:tracking-[0.5px] [&_.MuiInputBase-input]:text-white [&_.MuiInputBase-root]:rounded-[20px] [&_.MuiInputLabel-shrink]:bg-primary [&_.MuiInputLabel-shrink]:pr-[7px] [&_.MuiInputLabel-shrink]:text-white [&_.MuiOutlinedInput-notchedOutline]:border-2 [&_.MuiOutlinedInput-notchedOutline]:border-text-secondary [&_.MuiOutlinedInput-root:hover_.MuiOutlinedInput-notchedOutline]:!border-white [&_.Mui-focused_.MuiOutlinedInput-notchedOutline]:!border-white [&_textarea]:pr-[5px] [&_textarea::-webkit-scrollbar]:w-[5px] [&_textarea::-webkit-scrollbar]:rounded-[20px] [&_textarea::-webkit-scrollbar-thumb]:rounded-[20px] [&_textarea::-webkit-scrollbar-thumb]:bg-white"
            >
              <div className="relative my-4">
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
              <div className="relative my-4">
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
              <div className="relative my-4">
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
              <div className="relative my-4">
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
              <input
                type="submit"
                value="Send"
                className="m-0 w-full cursor-pointer rounded-[25px] border-2 border-text-secondary bg-white px-[1.3rem] py-[0.6rem] text-[0.95rem] leading-none text-primary outline-none duration-300 hover:bg-transparent hover:text-white desktop:w-auto"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
