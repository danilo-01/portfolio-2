import React from "react";
import { useForm } from "react-hook-form";
import ScrollAnimationItem from "react-scroll-fade-animation";
import "./Contact.scss";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    window.location.href = `mailto:danilo.01@live.com?subject=${data.subject}&body=${data.message}`;
  };

  return (
    <div id="contact" className="contact">
      <ScrollAnimationItem path={"bottom"} duration={800} className="header">
        <h2>CONTACT</h2>
      </ScrollAnimationItem>

      <div className="contact-wrapper">
        <form onSubmit={handleSubmit(onSubmit)}>
          {errors.email && <span>An Email is required</span>}
          <input
            type="text"
            placeholder="Email"
            name="email"
            {...register("email", { required: true })}
          />

          <input
            type="text"
            placeholder="Subject"
            name="subject"
            {...register("subject")}
          />
          {errors.message && <span>A message is required.</span>}
          <textarea
            {...register("message", { required: true })}
            name="message"
            placeholder="Message..."
            cols="30"
            rows="10"
          ></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
